import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Routes/home";
import LoginPage from "./Routes/LoginPage";
import Sign from "./Routes/Sign";

import Dashboard from "./Routes/Dashboard";
import ProtectRoute from "./Routes/ProtectRoute";
import Profile from "./Routes/Profile";
import EditProfile from './Routes/EditProfile'

//import Shop from "./e-commerce-web/Shop";
import Admin from "./Routes/Admin";
import OrderPage from "./Routes/OrderPage";
import OrderByUser from "./Routes/OrderByUser";
import AddProduct from "./Routes/AddProduct";
import Shop from "./e-commerce-web/Shop";



const Router = createBrowserRouter([
    {
        path:'/',
        element:<Shop/>

    },
    {
        path: "/",
        element: <Home />,
        children:[
            {
                path:'/home',
                element:<Dashboard/>
            },
            {
               
                element:<ProtectRoute role="user"/>,
                children:[
                {
                    path:'/profile',
                    element:<Profile/>
                },
                {
                    path:'/editprofile',
                    element:<EditProfile/>
                },
                {
                    path:'/order/:id',
                    element:<OrderPage/>
                },
                {
                    path:"/myorder",
                    element:<OrderByUser/>

                }
               ]
            },
            {
               
                element:<ProtectRoute role="admin"/>,
                children:[
                {
                    path:'/admin',
                    element:<Admin/>
                },
                {
                    path:'/addproduct',
                    element:<AddProduct/>
                }
                
               ]
            }
        ]
        
    },

    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <Sign />
    },
   
    
    



]
)
export default Router;