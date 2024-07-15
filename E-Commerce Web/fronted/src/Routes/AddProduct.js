import axios from "axios";
import React, { useState } from "react";


const AddProduct = () => {
    const [fromData,setFromData]=useState({});

    const handleChange=(e)=>{
      setFromData({...fromData,[e.target.name]:e.target.files ? e.target.files[0]:e.target.value})
    }
    const handleSumbit=(e)=>{
        e.preventDefault();
        console.log(fromData);
        const data=new FormData();
        data.append("productname",fromData.productname);
        data.append("productprice",fromData.productprice);
        data.append("productdesc",fromData.productdesc);
        data.append("productImage",fromData.productImage);
        try{
         const response=axios.post("http://localhost:3500/product/addproduct",fromData)
         console.log(response);
        }
        catch(error){
            console.log("error on response",error);

        }
    }


    return (
        <>
            <div>
                <h1>Add Product</h1>
                  <form onSubmit={handleSumbit}>
                    <input type="text" placeholder="Product Name" name="productname" onChange={handleChange}/>
                    <input type="number" placeholder="Product Price" name="productprice" onChange={handleChange}/>
                    <input type="text" placeholder="Product Description" name="productdesc" onChange={handleChange}/>
                    <input type="file"  name="productImage" onChange={handleChange}/>
                    <button type="sumbit">Sumbit</button>
                  </form>
            </div>
        </>
    )
}
export default AddProduct;