import os
import json
import requests
from google.cloud import firestore
from google.oauth2 import service_account
import logging
import time
import hmac
import hashlib
import base64
from urllib.parse import quote, urlencode

# Load environment variables
from dotenv import load_dotenv

load_dotenv()

# Initialize Firestore
credentials = service_account.Credentials.from_service_account_file(
    os.getenv("GOOGLE_APPLICATION_CREDENTIALS")
)
db = firestore.Client(
    credentials=credentials, project=os.getenv("GOOGLE_CLOUD_PROJECT")
)

# Read product data from JSON file
with open("products.json") as f:
    products_data = json.load(f)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# Function to fetch product details from Amazon API
def fetch_product_details(affiliate_link):
    try:
        asin = extract_asin(affiliate_link)
        payload = {
            "PartnerTag": os.getenv("AMAZON_ASSOCIATE_TAG"),
            "PartnerType": "Associates",
            "ItemIds": [asin],
            "Resources": [
                "Offers.Listings.Price",
                "ItemInfo.Title",
                "Images.Primary.Large",
            ],
            "LanguagesOfPreference": ["pt_BR"],
        }
        headers = generate_headers(payload)
        response = requests.post(
            "https://webservices.amazon.com.br/paapi5/getitems",
            json=payload,
            headers=headers,
        )
        response.raise_for_status()  # Raise an error for bad status codes
        return response.json()
    except requests.exceptions.RequestException as e:
        logger.error(f"Request failed: {e}")
        return None
    except json.JSONDecodeError as e:
        logger.error(f"JSON decode error: {e}")
        return None


# Function to extract ASIN from affiliate link
def extract_asin(affiliate_link):
    # Extract ASIN from the affiliate link
    return affiliate_link.split("/dp/")[1].split("/")[0]


# Function to generate timestamp
def get_timestamp():
    return time.strftime("%Y%m%dT%H%M%SZ", time.gmtime())


# Function to generate headers
def generate_headers(payload):
    method = "POST"
    host = "webservices.amazon.com.br"
    uri = "/paapi5/getitems"
    content_type = "application/json; charset=utf-8"
    content_encoding = "amz-1.0"
    x_amz_date = get_timestamp()
    x_amz_target = "com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetItems"

    canonical_request = f"{method}\n{uri}\n\ncontent-encoding:{content_encoding}\ncontent-type:{content_type}\nhost:{host}\nx-amz-date:{x_amz_date}\nx-amz-target:{x_amz_target}\n\ncontent-encoding;content-type;host;x-amz-date;x-amz-target\n{hashlib.sha256(json.dumps(payload).encode('utf-8')).hexdigest()}"
    string_to_sign = f"AWS4-HMAC-SHA256\n{x_amz_date}\n{time.strftime('%Y%m%d', time.gmtime())}/us-east-1/execute-api/aws4_request\n{hashlib.sha256(canonical_request.encode('utf-8')).hexdigest()}"
    signing_key = get_signature_key(
        os.getenv("AMAZON_SECRET_KEY"),
        time.strftime("%Y%m%d", time.gmtime()),
        "us-east-1",
        "execute-api",
    )
    signature = hmac.new(
        signing_key, string_to_sign.encode("utf-8"), hashlib.sha256
    ).hexdigest()

    authorization_header = f"AWS4-HMAC-SHA256 Credential={os.getenv('AMAZON_ACCESS_KEY_ID')}/{time.strftime('%Y%m%d', time.gmtime())}/us-east-1/execute-api/aws4_request, SignedHeaders=content-encoding;content-type;host;x-amz-date;x-amz-target, Signature={signature}"

    return {
        "Content-Type": content_type,
        "Content-Encoding": content_encoding,
        "x-amz-date": x_amz_date,
        "x-amz-target": x_amz_target,
        "Authorization": authorization_header,
    }


# Function to get signature key
def get_signature_key(key, date_stamp, region_name, service_name):
    k_date = hmac.new(
        ("AWS4" + key).encode("utf-8"), date_stamp.encode("utf-8"), hashlib.sha256
    ).digest()
    k_region = hmac.new(k_date, region_name.encode("utf-8"), hashlib.sha256).digest()
    k_service = hmac.new(
        k_region, service_name.encode("utf-8"), hashlib.sha256
    ).digest()
    k_signing = hmac.new(
        k_service, "aws4_request".encode("utf-8"), hashlib.sha256
    ).digest()
    return k_signing


# Function to upload products to Firestore
def upload_products():
    batch = db.batch()
    products_collection = db.collection("products")

    for product in products_data:
        product_details = fetch_product_details(product["affiliateLink"])
        if product_details:
            item = product_details.get("ItemsResult", {}).get("Items", [])[0]
            product_ref = products_collection.document()  # Auto-generate ID
            batch.set(
                product_ref,
                {
                    "name": item.get("ItemInfo", {})
                    .get("Title", {})
                    .get("DisplayValue", "Unknown"),
                    "description": item.get("ItemInfo", {})
                    .get("Title", {})
                    .get("DisplayValue", "No description available"),
                    "price": item.get("Offers", {})
                    .get("Listings", [])[0]
                    .get("Price", {})
                    .get("DisplayAmount", "0.0"),
                    "imageUrl": item.get("Images", {})
                    .get("Primary", {})
                    .get("Large", {})
                    .get("URL", ""),
                    "affiliateLink": product["affiliateLink"],
                },
            )
        else:
            logger.warning(
                f"Skipping product with affiliate link: {product['affiliateLink']}"
            )

    batch.commit()
    logger.info("Products uploaded successfully.")


# Run the upload function
if __name__ == "__main__":
    upload_products()
