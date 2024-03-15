import { BrowserRouter as Router } from "react-router-dom";
//import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import {AuthContextProvider} from "./components/Store/auth-context";
import CartProvider from './components/Store/CartProvider';
import Routers from './components/Router/Router';


function App() {
  return(
    <Router>
    <AuthContextProvider>
    <CartProvider>
    <Header />
    <Routers></Routers>
    </CartProvider>
    </AuthContextProvider>
    </Router>
  )
}

export default App;
