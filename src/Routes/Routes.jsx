import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";


 const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      { 
        index: true,
        Component:Home
      },
      {
        path:'/products',
        Component:Products
      }

    ]

    
  },
  {
    path:'*',
    Component:ErrorPage
  }
  
  
]);

export default router


