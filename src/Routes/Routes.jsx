import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";


 const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement:<p>Loading...</p>,
    children:[
      { 
        index: true,
        loader:()=>fetch('/funitureData.json'),
        Component:Home,
        
      },
      {
        path:'/products',
        Component:Products
      },
      {
        path:'/wishlist',
        Component: WishList
      }


    ]

    
  },
  {
    path:'*',
    Component:ErrorPage
  }
  
  
]);

export default router


