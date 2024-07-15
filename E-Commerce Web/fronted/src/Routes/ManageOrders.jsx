import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageOrders=()=>{
    const [data,setdata]=useState([]);
const fetchData=()=>{
    try{
        const response=axios.get(`${process.env.API_URI}/order/getallorder`);
        console.log(response);
        setdata(response.data.data);
    }
    catch(error){
        console.log("Error fetched",error);
    }
}
useEffect(()=>{
    fetchData();
},[])

return(
    <>
<div>
    <table>
        <thead>
            <tr>
                <th>
                    S.No
                </th>
                <th>
                    Product Name
                </th>
                <th>
                    Product Price
                </th>
                <th>
                    Quantity
                </th>
                <th>
                    Delivery to
                </th>
                <th>
                    Order Status
                </th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
             {data.map((item,i)=>{
                return(
                    <tr key={i}>
                    <td>
                        {i+1}
                    </td>
                    <td>{item.productname}</td>
                    <td>{item.productprice}</td>
                    <td>{item.quantity}</td>
                    <td>{item.userName},{item.userContactNumber},{item.address},{item.city},{item.state},{item.pincode}</td>
                    <td>
                        {item.status}
                    </td>
                    <td>
                        <button>Update Status</button>
                    </td>
                </tr>
                )
               
                
             })}
        </tbody>
    </table>
</div>
    </>
)
}












export default ManageOrders;