const express=require("express");
const route=express.Router();
const controler=require('../controlers/order');


route.get("/getallorder",controler.GetallOrder);
route.post('/addorder',controler.AddOrder);
route.get("/getorderbyuserId/:id",controler.GetOrderbyUserId);
route.put("/updateorder/:id",controler.OrderUpdate);


module.exports=route;