import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Article3 from './components/Article3';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>Articles Website</h1>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/article1">Article 1</Link></li>
          <li><Link to="/article2">Article 2</Link></li>
          <li><Link to="/article3">Article 3</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/article1" element={<Article1 />} />
        <Route path="/article2" element={<Article2 />} />
        <Route path="/article3" element={<Article3 />} />
      </Routes>
    </div>
  );
}

export default App;
