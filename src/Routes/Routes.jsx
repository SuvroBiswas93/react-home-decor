import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layout/MainLayout";


 const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout, 
    
  },
  {
    path:'/products',
    Component:Products
  }
]);

export default router


