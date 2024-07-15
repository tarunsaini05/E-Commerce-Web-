import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderPage = () => {
    const { id } = useParams();
    console.log(id);
    const [productData, setProductData] = useState({})
    const [fromData, setfromData] = useState({});
    const fetchProductById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3500/product//getproductbyid/${id}`);
            setProductData(response.data.data);
            const token = localStorage.getItem("token");
            const decodeToken = jwtDecode(token)

            setfromData({
                ...fromData, productId: response.data.data._id, productname: response.data.data.productname,
                productprice: response.data.data.productprice, productdesc: response.data.data.productdesc, userId: decodeToken._id
            })
            console.log(response)
        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(fromData);

    useEffect(() => {
        fetchProductById(id);
    }, []);



    const handleChange = (e) => {
        setfromData({ ...fromData, [e.target.name]: e.target.value })
    }
    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3500/order/addorder", fromData)
            console.log(response);
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div>
                <div className="flex justify-between">
                    <div>
                        <div>
                            <h1 className="text-3xl">{productData.productname}</h1>
                            <p className="text-green-700">{productData.productprice}</p>
                            <p className="text-blue-700 text-sm">{productData.productdesc}</p>
                        </div>
                    </div>
                    <img src={require('./img/shoes.jfif')} alt="" className="w-30" />
                </div>
                <div className="bg-white m-4 p-4">
                    <h1 className="text-2xl">Delivery to</h1>
                    <form>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="my-2">
                                <label htmlFor="">Customer Name</label>
                                <input type="text" placeholder="Enter Customer name" name="userName" onChange={handleChange}
                                    className="p-2 outline-none  border border-gray-500 rounded block" />
                            </div>
                            <div>
                                <label htmlFor="">Contact No</label>
                                <input type="text" placeholder="Customer Contact Number" name="userContactNumber" onChange={handleChange}
                                    className="p-2 outline-none  border border-gray-500 rounded block"
                                />
                            </div>
                            <div>
                                <label htmlFor="">Quantity</label>
                                <input type="text" placeholder="Quantity" name="quantity" onChange={handleChange}
                                    className="p-2 outline-none  border border-gray-500 rounded block" />

                            </div>
                            <div>
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder="Adrress" name="address" onChange={handleChange}
                                    className="p-2 outline-none  border border-gray-500 rounded block" />
                            </div>
                            <div>
                                <label htmlFor="">City</label>
                                <input type="text" placeholder="City" name="city" onChange={handleChange}
                                    className="p-2 outline-none  border border-gray-500 rounded block"
                                />
                            </div>
                            <div>
                                <label htmlFor="">State</label>
                                <input type="text" placeholder="State" name=" state" onChange={handleChange}
                                    className="p-2 outline-none  border border-gray-500 rounded block"
                                />
                            </div>
                            <div>
                                <label htmlFor="">Pincode</label>
                                <input type="text" placeholder="Pincode" name="pincode" onChange={handleChange}
                                    className="p-2 outline-none  border border-gray-500 rounded block" />
                            </div>
                        </div>
                        <br />
                        <button className="p-2 bg-green-500 text-white rounded" onClick={handleSumbit}>Order Now</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default OrderPage;