const mongoose=require("mongoose");
const Data=mongoose.Schema({
    name:{
        type:String,
        require:true
        
    },
    phoneno:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        require:true
    }

})
const DataSign=mongoose.model("signuser",Data);
module.exports=DataSign;