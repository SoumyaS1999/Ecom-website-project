// Header.js
import {Nav,Container} from 'react-bootstrap';
import './Header.css'
import React, { useState , useContext} from 'react';
//import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Cart from '../Cart/Cart'; // Import the Cart component
import AuthContext from "../Store/auth-context";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler= ()=>{
    authCtx.logout();
  }

  return (
    <div className='header'>
      <h1>The Generics</h1>
      <Container className='navbar'>
      <Nav id ="linklist" className='linklist'>
      <NavLink className='links' to="/"><h3>Home</h3></NavLink>
      <NavLink className='links' to="/about"><h3>About</h3></NavLink>
      <NavLink className='links'to="/store"><h3>Store</h3></NavLink>
      <NavLink className='links' to="/movie"><h3>Movie</h3></NavLink>
      <NavLink className='links' to="/contactus"><h3>Contact Us</h3></NavLink>
      
          {!isLoggedIn && (
            
              <NavLink className='links' to="/login"><h3>Login</h3></NavLink>
            
          )}
          {isLoggedIn && (
            
              <NavLink className='links' to="/profile"><h3>Profile</h3></NavLink>
            
          )}
          {isLoggedIn && (
            
              <button onClick={logoutHandler}>Logout</button>
            
          )}
        

      
      </Nav>
      <button className='cartbtn' onClick={handleCartClick}><h3>Cart</h3></button>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      </Container>
    </div>
  );
};

export default Header;
