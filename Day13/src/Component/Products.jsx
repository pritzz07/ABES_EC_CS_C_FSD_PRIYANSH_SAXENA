import React, { useEffect, useState } from "react";
import "./Products.css";

export default function Products({ search }) {
  const [products, setProducts] = useState([]);

  // Load products from public/products.json
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  // Filter products using search text from Navbar
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-container">
      <h1 className="page-title">Our Products</h1>

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.title} className="card-img" />
              <h3>{item.title}</h3>
              <p className="price">${item.price}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No products found</p>
        )}
      </div>
    </div>
  );
}
