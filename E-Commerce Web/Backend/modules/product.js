const mongoose=require("mongoose");
const Data=mongoose.Schema({
    productname:{
        type:String,
        require:true
        
    },
    productprice:{
        type:Number,
        require:true,
    },
    productdesc:{
        type:String,
        require:true,
    },
    
    productImage:{
        type:String,
        require:true
    },
    availability:{
        type:Boolean,
        require:true
    },
    
})
const ProductData=mongoose.model("product",Data);
module.exports=ProductData;