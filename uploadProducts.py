import os
import json
import requests
import logging
import time
import hmac
import hashlib
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Read product data from JSON file
with open("products.json") as f:
    products_data = json.load(f)


# Function to fetch product title from Amazon API
def fetch_product_title(affiliate_link):
    try:
        asin = extract_asin(affiliate_link)
        if not asin:
            logger.error(f"Could not extract ASIN from link: {affiliate_link}")
            return None
        payload = {
            "PartnerTag": os.getenv("AMAZON_ASSOCIATE_TAG"),
            "PartnerType": "Associates",
            "ItemIds": [asin],
            "Resources": ["ItemInfo.Title"],
            "Marketplace": "www.amazon.com",
        }
        headers = generate_headers(payload)
        response = requests.post(
            "https://webservices.amazon.com/paapi5/getitems",
            json=payload,
            headers=headers,
        )
        response.raise_for_status()  # Raise an error for bad status codes

        # Check for errors in the response body
        response_data = response.json()
        if "Errors" in response_data:
            for error in response_data["Errors"]:
                logger.error(
                    f"Error Code: {error['Code']}, Message: {error['Message']}"
                )
            return None

        item = response_data.get("ItemsResult", {}).get("Items", [])[0]
        return (
            item.get("ItemInfo", {})
            .get("Title", {})
            .get("DisplayValue", "Unknown Title")
        )
    except requests.exceptions.RequestException as e:
        logger.error(f"Request failed: {e}")
        return None
    except json.JSONDecodeError as e:
        logger.error(f"JSON decode error: {e}")
        return None


# Function to extract ASIN from affiliate link
def extract_asin(affiliate_link):
    return affiliate_link.split("/dp/")[1].split("/")[0]


# Function to generate headers
def generate_headers(payload):
    method = "POST"
    host = "webservices.amazon.com"
    uri = "/paapi5/getitems"
    content_type = "application/json; charset=UTF-8"
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


# Function to generate timestamp
def get_timestamp():
    return time.strftime("%Y%m%dT%H%M%SZ", time.gmtime())


# Function to save product titles to a file
def save_product_titles(product_titles):
    with open("productsInfo.txt", "w") as f:
        for title in product_titles:
            f.write(f"Title: {title}\n")


# Main function to fetch and save product titles
def main():
    product_titles = []
    for product in products_data:
        title = fetch_product_title(product["affiliateLink"])
        if title:
            product_titles.append(title)
        else:
            logger.warning(
                f"Skipping product with affiliate link: {product['affiliateLink']}"
            )

    save_product_titles(product_titles)
    logger.info("Product titles saved successfully.")


# Run the main function
if __name__ == "__main__":
    main()
