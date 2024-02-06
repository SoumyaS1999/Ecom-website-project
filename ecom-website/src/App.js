import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header/Header';
import './App.css';
import CartProvider from './components/Store/CartProvider';
import Routers from './components/Router/Router';

function App() {
  return(
    <Router>
    <CartProvider>
    <Header />
    <Routers></Routers>
    </CartProvider>
    </Router>
  )
}

export default App;
