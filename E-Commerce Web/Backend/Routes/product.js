const express=require("express");
const route=express.Router();
const controler=require("../controlers/product")
const upload=require("../middleware/multer");

route.get("/getallproduct",controler.GetallProduct);
route.get("/getproductbyid/:id",controler.GetProductbyId);
route.get("/getallavailableproduct",controler.GetAllAvailableProduct);
route.post("/addproduct",upload.single("productImage"),controler.AddProduct);
route.put("/updateproduct/:id",controler.ProductUpdate);






module.exports=route;