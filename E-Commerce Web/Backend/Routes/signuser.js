const express=require("express");
const route=express.Router();
const controler=require("../controlers/signuser");

route.get("/dataget",controler.DataGetsign);
route.post("/datasign",controler.DataSignCreate);
route.post("/datalogin",controler.DataLogin);
route.put("/dataupdate/:id",controler.DataUpdate);




module.exports=route