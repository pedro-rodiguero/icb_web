import React from "react";

import { Product } from "../types/Products";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">R$ {product.price.toFixed(2)}</p>
          <button className="buy-button" type="button">
            Buy via Pix
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
