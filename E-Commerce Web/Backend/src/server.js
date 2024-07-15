const express= require("express");
const connect=require("../dataconnect/dataconnect");
const app=express();
const port=3500;
const SignRoute=require('../Routes/signuser');
const cors=require("cors");
const Productroute=require("../Routes/product");
const OrderRoute=require('../Routes/order');
const path=require("path")



connect();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.use("/user",SignRoute);
app.use("/product",Productroute);
app.use('/order',OrderRoute);


app.listen(port,(req,res)=>{
    console.log(`running port on this ${port}`);
})