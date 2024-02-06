import {Route, Routes } from "react-router-dom";
import ProductList from "../Products/ProductList";
import About from "../Layouts/About";

const routePath = {
  Home: "/",
  Store: "/store",
  About: "/about",
};

const Routers = () => {
  return (
    
      <Routes>
        <Route path={routePath.Home} element={<ProductList />} />
        <Route path={routePath.Store} element={<ProductList />} />
        <Route path={routePath.About} element={<About />} />
      </Routes>
    
  );
};

export default Routers;
