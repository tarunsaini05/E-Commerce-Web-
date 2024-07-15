import React from "react";
import { useNavigate } from "react-router-dom";

const Card=({item})=>{
    console.log(item);
    const Navigate=useNavigate();
const HandleOrder=(id)=>{
    const token=localStorage.getItem("token");
    const role=localStorage.getItem("role")
    if(!token){
        alert("Please login")
       return Navigate("/login");
    }
    if(role==="admin"){
  alert("Only user customer place order");
    }
    Navigate(`/order/${id}`)
}
return(
    <>
        <div className="bg-white p-2">
            <div>
           
           <img src={require('./img/shoes.jfif')} className="w-100 mx-auto" alt={item.productname}></img>

               <div className="  px-20 ms-20">
               <div>
                <p className="text-3xl font-medium text-gray-500">{item.productname}</p>
                <p className="text-green-700">${item.productprice}</p>
                <p className="text-sm text-blue-800">{item.productdesc}</p>
                </div>
                <div>
                <button className="bg-green-600 text-white p-2 rounded-md" onClick={()=>{HandleOrder(item._id)}}>Order Now</button>
                </div>
               </div>
                
            </div>
        </div>
    </>
)}

export default Card;