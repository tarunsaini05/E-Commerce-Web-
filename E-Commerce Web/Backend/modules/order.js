const mongoose=require("mongoose");
const Data=mongoose.Schema({
    productId:{
        type:String,
        require:true

    },
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
    quantity:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    pincode:{
        type:Number,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    userContactNumber:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }


    
})
const OrderData=mongoose.model("order",Data);
module.exports=OrderData;