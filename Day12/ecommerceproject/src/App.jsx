import { useEffect, useState } from 'react';
import './App.css';

const Header = () => {
  return (
    <div className="header">
      ⚡ <span style={{ color: '#facc15' }}>NeoMart</span> — Tech & Beyond
    </div>
  );
};

const Search = ({ filterHandler }) => {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search products..."
        onChange={(e) => filterHandler(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
};

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.img} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
    </div>
  );
};

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredData(data);
      })
      .catch((err) => console.log("Unable to load data:", err));
  }, []);

  const filterHandler = (query) => {
    const data = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(data);
  };

  return (
    <div className="body">
      <Search filterHandler={filterHandler} />
      <div className="products">
        {filteredData.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      © 2025 NeoMart | Designed by Priyansh Saxena
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
