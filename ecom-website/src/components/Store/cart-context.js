import { createContext } from 'react'

const CartContext = createContext({
  cartItems: [],
  addCartItem: (item) => {},
  removeCartItem: (item) => {},
 // count: 0,

});

export default CartContext
