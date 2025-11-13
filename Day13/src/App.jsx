import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Products from "./Component/Products";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} />

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={<Products search={search} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
