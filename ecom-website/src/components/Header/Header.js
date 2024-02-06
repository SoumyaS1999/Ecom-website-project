// Header.js
import './Header.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Cart from '../Cart/Cart'; // Import the Cart component

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='header'>
      <h1>Your Website</h1>
      <div className='linklist'>
      <div className='links'>
      <Link to="/"><h3>Home</h3></Link>
      </div>
      <div className='links'>
      <Link to="/about"><h3>About</h3></Link>
      </div>
      <button className='cartbtn' onClick={handleCartClick}><h3>Cart</h3></button>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      </div>
    </div>
  );
};

export default Header;
