
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './sign.css';


function Sign() {
const[data,setdata]=useState({});
const Navigate=useNavigate();

const sumbitchange =(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
}

const sumbit=async(e)=>{
  e.preventDefault();
    console.log(data);
    try{
const response=await axios.post("http://localhost:3500/user/datasign",data)
console.log(response);
alert("User looged in");
Navigate('/home')
 }
    catch(error){
      console.log(error)
alert(error.response.data.message);
    }
}
   return(

<>
<div className="body-div">
<div className="signup-container">
    <form className="signup-form">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Enter your name" name="Fullname" required onChange={sumbitchange}></input>
      <input type="text" placeholder="Enter your mobile number" name="PhoneNo" required onChange={sumbitchange}></input>
     <input type="email" placeholder="Email" name="email" required onChange={sumbitchange}></input>
     <input type="password" placeholder="Password" name="Password" required onChange={sumbitchange}></input>
      <button onClick={sumbit} type="submit">Sign Up</button>
    </form>
  </div>
  </div>
  </>
    )

}
export default Sign;