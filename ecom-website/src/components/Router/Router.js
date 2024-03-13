import {Route, Routes } from "react-router-dom";
import ProductList from "../Products/ProductList";
import About from "../Layouts/About";
import Index from "../Index/Index";
import Movie from "../Movies/Movie";
import Contactus from "../Contactus/Contactus";

const routePath = {
  Home: "/",
  Store: "/store",
  About: "/about",
  Movie: "/movie",
  Contactus: "/contactus"
};

const Routers = () => {
  return (
    
      <Routes>
        <Route path={routePath.Home} element={<Index />} />
        <Route path={routePath.Store} element={<ProductList />} />
        <Route path={routePath.About} element={<About />} />
        <Route path={routePath.Movie} element={<Movie />} />
        <Route path={routePath.Contactus} element={<Contactus />} />
      </Routes>
    
  );
};

export default Routers;
