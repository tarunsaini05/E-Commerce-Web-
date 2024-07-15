const mongoose=require("mongoose");
const connect=()=>{
    mongoose.connect("mongodb://localhost:27017/UserDatabase").then(()=>{
        console.log("Database Succesful Conneted");
    }).catch(()=>{
        console.log("Connection Failed");
    })
    
}
module.exports=connect;