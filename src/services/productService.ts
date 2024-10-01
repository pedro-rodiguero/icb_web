import { collection, getDocs } from "firebase/firestore";

import { Product } from "../types/Products";
import db from "../firebaseConfig";

const productService = {
  getProducts: async (): Promise<Product[]> => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() } as Product);
    });
    return products;
  },
};

export default productService;
