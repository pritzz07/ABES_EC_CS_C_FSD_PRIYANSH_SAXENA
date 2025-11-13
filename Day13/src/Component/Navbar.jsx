import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">ShopEase</div>

      {/* Search Bar inside the yellow section */}
      <input
        type="text"
        className="nav-search"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;
