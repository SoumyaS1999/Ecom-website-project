import {Route, Routes } from "react-router-dom";
import ProductList from "../Products/ProductList";
import About from "../Layouts/About";
import Index from "../Index/Index";
import Movie from "../Movies/Movie";
import Contactus from "../Contactus/Contactus";
import ProductDetail from "../Products/ProductDetail";
import AuthForm from "../Auth/Authform";
import UserProfile from "../Profile/UserProfile";
//import AuthContext from "../Store/auth-context";

const routePath = {
  Home: "/",
  Store: "/store",
  About: "/about",
  Movie: "/movie",
  Contactus: "/contactus",
  Productdetail:"/store/:id",
  Login:"/login",
  Profile:"/profile"
};

const Routers = () => {

 // const authCtx = useContext(AuthContext);

 // const isLoggedIn = authCtx.isLoggedIn;

  return (
    
      <Routes>
        <Route path={routePath.Home} element={<Index />} />
        <Route path={routePath.Store} element={<ProductList />} />
        <Route path={routePath.About} element={<About />} />
        <Route path={routePath.Movie} element={<Movie />} />
        <Route path={routePath.Contactus} element={<Contactus />} />
        <Route path={routePath.Productdetail} element={<ProductDetail />} />
        <Route path={routePath.Login} element={<AuthForm />} />
        <Route path={routePath.Profile} element={<UserProfile />} />

      </Routes>
    
  );
};

export default Routers;