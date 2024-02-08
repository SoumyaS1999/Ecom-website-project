// Header.js
import {Nav,NavLink,Container} from 'react-bootstrap';
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
      <h1>The Generics</h1>
      <Container className='navbar'>
      <Nav id ="linklist" className='linklist'>
      <NavLink className='links'>
      <Link to="/"><h3>Home</h3></Link>
      </NavLink>
      <NavLink className='links'>
      <Link to="/about"><h3>About</h3></Link>
      </NavLink>
      <NavLink className='links'>
      <Link to="/store"><h3>Store</h3></Link>
      </NavLink>
      </Nav>
      <button className='cartbtn' onClick={handleCartClick}><h3>Cart</h3></button>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      </Container>
    </div>
  );
};

export default Header;
