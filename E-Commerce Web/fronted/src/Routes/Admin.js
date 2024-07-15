import axios from "axios";
import { useEffect, useState } from "react";

function Admin(){
    const [data,setdata]=useState([])
    console.log(data);
    const fetchdata=async()=>{
        try{
const response=await axios.get("http://localhost:3500/product/getallproduct");
console.log(response);
setdata(response.data.data);
        }
        catch(error){
console.log(error)
        }
    }
    useEffect(()=>{
        fetchdata();
    },[])

    const handleUpdate=async(id,status)=>{
        try{
            const response=await axios.put(`http://localhost:3500/product/updateproduct/${id}`,{availability:
            !status});
            console.log(response);
            fetchdata();
                    }
                    catch(error){
            console.log(error)
                    }
                }
    
    return(
        
        <div>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-green-600 text-white">
                        <th className="py-3 px-4 text-left border border-gray-300">
                            Product Name
                        </th>
                        <th className="py-3 px-4 text-left border border-gray-300">
                            Product Price
                        </th>
                        <th className="py-3 px-4 text-left border border-gray-300">
                            Product Descripition
                        </th>
                        <th className="py-3 px-4 text-left border border-gray-300">
                            Product Availability
                        </th>
                        <th className="py-3 px-4 text-left">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item,i)=>(
                      <tr className="bg-gray-100" key={i}>
                        <td className="border border-gray-300 py-2 px-4">{item.productname}</td>
                        <td className="border border-gray-300 py-2 px-4">{item.productprice}</td>
                        <td className="border border-gray-300 py-2 px-4">{item.productdesc}</td>
                        <td className="border border-gray-300 py-2 px-4 bg-blue-500">{item.availability ? "Available":"Not Available"}</td>
                        <td className="border border-gray-300 py-2 px-4 bg-black text text-white"><button onClick={()=>{
                            handleUpdate(item._id,item.availability,)
                        }}>{item.availability ? "Deactivate":"Activate"}</button></td>

                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;