import React, { useEffect, useState } from "react";

import productService from "../services/productService";
import ProductList from "../components/ProductList";
import { Product } from "../types/Products";

const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await productService.getProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Store</h1>
      <p>Welcome to our store! Here you can find various items for sale.</p>
      <ProductList products={products} />
    </div>
  );
};

export default Store;
