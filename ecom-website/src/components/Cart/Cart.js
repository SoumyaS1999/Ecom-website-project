// Cart.js
import React from 'react';
import Modal from '../UI/Modal';
import './Cart.css'
import CartContext from '../Store/cart-context';
import { useContext } from 'react';

const Cart = ({ onClose }) => {
    const cartctx= useContext(CartContext);
    const addToCart = (item) => {
      let Item = {
      title: item.title,
      price: item.price,
      quantity: "1",
      };
      cartctx.addCartItem(Item);
      };

    const removefromCart=(item)=>{
      cartctx.removeCartItem(item)
    }

  return (
    <Modal>
      <h2>Shopping Cart</h2>
      <ul>
        <li className='cartitems'>
            <div className='cartitemtitle'><h2>Item</h2></div>
            <div className='cartitemquantity'><h2>Quantity</h2></div>
            <div className='cartitemprice'><h2>Price</h2></div>
        </li>
        {cartctx.cartItems.map((item)=>{
            return(
                <li className='cartitems' key={item.title}>
                    <div className='cartitemtitle'>{item.title}</div>
                    <div className='cartitemquantity'>{item.quantity}</div>
                    <div className='cartitemprice'>{item.price}</div>
                    <button onClick={()=>addToCart(item)}>+</button>
                    {item.quantity}
                    <button onClick={()=>removefromCart(item)}>-</button>
                </li>
              
            )
        })}

      </ul>
      <button onClick={onClose}>Close Cart</button>
    </Modal>
  );
};

export default Cart;
