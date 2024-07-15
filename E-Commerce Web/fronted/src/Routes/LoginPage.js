import { useState } from "react";
import './sign.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


function LoginPage() {
  const [data, setdata] = useState({});
  const Navigate=useNavigate()

  const sumbitchange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const sumbit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await axios.post("http://localhost:3500/user/datalogin", data)
      console.log(response);
      localStorage.setItem('token',response.data.data.token)
     const DecodeToken=jwtDecode(response.data.data.token)   
     console.log(DecodeToken);
      localStorage.setItem("role",DecodeToken.role)
      if(DecodeToken.role === "admin"){
        Navigate('/admin')
      }
      else{
         Navigate('/profile')
      }
    // alert("User Login In ");
      

    }
    catch (error) {
      console.log(error)
      alert(error?.response?.data?.message || " Error login failed");


    }
  }
  return (
    
    <>
    <body>
    <div className="body-div">
      <div className="signup-container">
        <form className="signup-form">
          <h2>Login Up</h2>
          <input type="email" placeholder="Email" name="email" required onChange={sumbitchange}></input>
          <input type="password" placeholder="Password" name="Password" required onChange={sumbitchange}></input>
          <button onClick={sumbit} type="submit">Login Up</button>
        </form>
      </div>
      </div>
      </body>
    </>
  )
}
export default LoginPage;