import React,{useState} from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
    const[cartItems,setCartItems]=useState([]);

     //Adding Item to Cart
  const addItemToCartHandler = (item) => {
    const updatedCartItem = [...cartItems];


    // cart medicine items
    const existingCartItem = updatedCartItem.find(
      (Item) => Item.title === item.title
    );

    if (existingCartItem) {

        existingCartItem.quantity = Number(existingCartItem.quantity) + 1;
      
    }
    else {
      updatedCartItem.push(item);
    }
    setCartItems(updatedCartItem);
    //setCount(count+1);

  };

  //Removing Item from Cart
  const removeItemFromCartHandler = (item) => {
    let updatedCartItem = [...cartItems];

    const existingCartItem = updatedCartItem.find(
      (Item) => Item.title === item.title
    );

    if (Number(existingCartItem.quantity) > 1) {
      existingCartItem.quantity = Number(existingCartItem.quantity) - 1;
    } 
    else {
        updatedCartItem = updatedCartItem.filter(Item => Item.title !== item.title);
    }
    setCartItems(updatedCartItem);
   // setCount(count-1);
   // addItemFromCartHandler(item.medicineName);
  };

  const cartContext = {

    cartItems: cartItems,
    addCartItem: addItemToCartHandler,
    removeCartItem: removeItemFromCartHandler,
   // count: count,
  };

  return (
    <CartContext.Provider value={cartContext}>
      <div className="cart-provider">{props.children}</div>
    </CartContext.Provider>

  )
}

export default CartProvider
