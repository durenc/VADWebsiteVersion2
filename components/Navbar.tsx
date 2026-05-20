import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid #ccc' }}>
    <Link to="/">Home</Link>
    <Link to="/get-veiny">Get Veiny & Formula</Link>
    <Link to="/veiny-drip">Veiny Ahh Drip</Link>
    <Link to="/story-faqs#our-story">Our Story</Link>
    <Link to="/story-faqs#faqs">FAQs</Link>
    <Link to="/story-faqs#connect">Connect</Link>
  </nav>
);

export default Navbar;
