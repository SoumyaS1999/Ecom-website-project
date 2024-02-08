import {Route, Routes } from "react-router-dom";
import ProductList from "../Products/ProductList";
import About from "../Layouts/About";
import Index from "../Index/Index";

const routePath = {
  Home: "/",
  Store: "/store",
  About: "/about",
};

const Routers = () => {
  return (
    
      <Routes>
        <Route path={routePath.Home} element={<Index />} />
        <Route path={routePath.Store} element={<ProductList />} />
        <Route path={routePath.About} element={<About />} />
      </Routes>
    
  );
};

export default Routers;
