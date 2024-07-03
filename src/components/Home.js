import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>Welcome to the Articles Website</h1>
    <p>Select an article to read from the navigation bar or the list below:</p>
    <ul className="article-list">
      <li><Link to="/article1" className="article-button">Center Embedding in Legalese: Implications and Strategies for Law Firms</Link></li>
      <li><Link to="/article2" className="article-button">Ethics and Regulation of AI in Predictive Policing: Balancing Innovation and Privacy</Link></li>
      <li><Link to="/article3" className="article-button">The Role of Blockchain in Shareholder Voting: An Australian Perspective</Link></li>
    </ul>
  </div>
);

export default Home;
