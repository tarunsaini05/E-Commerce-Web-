
//import { useEffect, useState } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";




const ProtectRoute = ({ role }) => {
    const context = useOutletContext();
    console.log(context);
    const auth = context.auth;
    if (!auth || context.role !== role) {
        return <Navigate to="/" replace />
    }
    /*const [role,setrole]=useState(null)
   

     useEffect(()=>{
        const role=localStorage.getItem("role")
        setrole(role);
     },[])*/
    return (
        <>
            <div>
                <ul className="list-none m-0 p-0 overflow-hidden bg-slate-800 ">
                    <li className="float-left"><a href ="/home" className="block text-white text-center py-4 px-6 no-underline  hover:bg-gray-700">Home</a></li>
                    <li className="float-left"><a href ="/login" className="block text-white text-center py-4 px-6 no-underline hover:bg-gray-700">Login</a></li>
                    {/*role =="user" ? <li className="float-left"><a href ="/myorder" className="block text-white text-center py-4 px-6 no-underline hover:bg-gray-700">MyOrder</a></li> 
                    :role==="admin" ? "":""*/}
                    <li className="float-left"><a href ="/myorder" className="block text-white text-center py-4 px-6 no-underline hover:bg-gray-700">MyOrder</a></li>
                    
                    <li className="float-left"><a href  className="block text-white text-center py-4 px-6 no-underline  bg-green-600">Product</a></li>
                    <li style={{ float: "right" }}><a className="block text-white text-center py-4 px-6 no-underline bg-red-600" href="/home">Logout</a></li>
                    <input className="p-1 mt-3 ml-10 mr-5 float-right" type="text" placeholder="Search.." />
                </ul>
            </div>
            <br/>

            <div>
                <Outlet />
            </div>



        </>
    )
}
export default ProtectRoute;