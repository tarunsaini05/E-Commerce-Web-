import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react"

const OrderByUser = () => {
    const [data, setdata] = useState([]);

    const fetchData = async (id) => {
        try {
            let API_URI = `http://localhost:3500/order/getorderbyuserId/${id}`;
            console.log(API_URI)
            const response = await axios.get(API_URI);
            console.log(response);
            if(undefined != response && undefined != response.data)
            {
             if(undefined != response.data.data)
             {
                setdata(response.data.data);
             }
            }
            
        }
        catch (error) {
            console.log("Error fetching data",error);
        }
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token);
        const decodeToken = jwtDecode(token);
        console.log("decode token",decodeToken);
        fetchData(decodeToken['_id']);
    }, [])

    return (
        <>
            <div>
                <h1>My Orders</h1>
                <div className="">
                    {null != data && data.map((item) => {
                        return (
                            <>
                           <div key={item._id} className="flex bg-white m-4 ">
                           <div>
                            <img src={require('./img/shoes.jfif')} alt="shoes img" className="w-48" ></img>
                           </div>
                            <div className="ml-20 justify-center">
                                <h1>{item.productname}</h1>
                                <p>{item.productprice}</p>
                            </div>
                            <div className="">
                            <div className="flex float-left ml-20 p-20 ">  
                                <button className="bg-red-600 text-white p-2 rounded ">Track Order</button>
                            </div>
                            <div className=" float-right mt-12  p-7">
                            <button className="bg-red-600 text-white p-2 rounded ">Cancel Order</button> 
                            </div>
                           </div>
                           </div>
                          
                           </>
                           

                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default OrderByUser;