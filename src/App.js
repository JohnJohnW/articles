import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Article3 from './components/Article3';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>Articles</h1>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/article1">Article 1</Link></li>
            <li><Link to="/article2">Article 2</Link></li>
            <li><Link to="/article3">Article 3</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={
            <div className="home">
              <h1>Welcome to the Articles Website</h1>
              <p>Select an article to read from the navigation bar or the list below:</p>
              <ul className="article-list">
                <li><Link to="/article1" className="article-button">Center Embedding in Legalese: Implications and Strategies for Law Firms</Link></li>
                <li><Link to="/article2" className="article-button">Ethics and Regulation of AI in Predictive Policing: Balancing Innovation and Privacy</Link></li>
                <li><Link to="/article3" className="article-button">The Role of Blockchain in Shareholder Voting: An Australian Perspective</Link></li>
              </ul>
            </div>
          } />
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article3" element={<Article3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
