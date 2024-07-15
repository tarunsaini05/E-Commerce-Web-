
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
//import Shop from "../e-commerce-web/Shop";



function Home(){

const [auth,setauth]=useState(undefined != localStorage.getItem("token") ? localStorage.getItem("token") ? true : false :false);
const [role,setrole]=useState(undefined != localStorage.getItem("role") ? localStorage.getItem("role") : "");

useEffect(()=>{
  
},[])
    return(
        
        <>
        
           <Outlet context={{auth,setauth,role,setrole}}/>
           
        
           
        </>
    )
}
export default Home;