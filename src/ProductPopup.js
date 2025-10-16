import React, { useState } from "react";
import "./ProductPopup.css";


const products = [
  {
    id: 1,
    name: "Laptop",
    price: "₹65,000",
    shortDesc: "Powerful performance laptop",
    image: "/images/laptop.jpg",
    fullDesc: "This laptop features 16GB RAM, 512GB SSD, and Intel i7 processor."
  },
  {
    id: 2,
    name: "Smartphone",
    price: "₹25,000",
    shortDesc: "Feature-rich smartphone",
    image: "/images/phone.jpeg",
    fullDesc: "A smartphone with a 6.5-inch display, 5000mAh battery, and 128GB storage."
  },
  {
    id: 3,
    name: "Headphones",
    price: "₹2,500",
    shortDesc: "Noise-cancelling headphones",
    image: "/images/headphones.jpeg",
    fullDesc: "Enjoy immersive sound with long battery life and comfortable ear cushions."
  }
];


function ProductPopup() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="product-page">
      <h2>KL University Store</h2>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedProduct(product)}
          >
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.shortDesc}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup-overlay">
          <div className="popup">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p><strong>Price:</strong> {selectedProduct.price}</p>
            <p>{selectedProduct.fullDesc}</p>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPopup;
