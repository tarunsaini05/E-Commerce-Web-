const order=require('../modules/order');

const GetallOrder= async(req,res)=>{
    try{
        const orders= await order.find();
        res.status(200).send({message:"Order fetched",data:orders})
    }
    catch(e){
res.status(500).send({message:"Order error",error:"error"});
    }
}
const GetOrderbyUserId= async(req,res)=>{
    const id=req.params.id;
    try{
        //const orders= await order.findById(id);
        const orders= await order.find({userId:id});
        console.log(orders);
        res.status(200).send({message:"order fetched",data:orders})
    }
    catch(e){
res.status(500).send({message:"order error",error:"error"});
    }
}



const AddOrder=async(req,res)=>{
    
    const {productId,productname,productprice,productdesc,quantity,address,city,state,
        pincode,userId,userName,userContactNumber}=req.body;
 try{
    const orders=new order({productId:productId,productname:productname,productprice:productprice,productdesc:productdesc,
    quantity:quantity,address:address,city:city,state:state,pincode:pincode,userId:userId,userName:userName,
    userContactNumber:userContactNumber,status:"Pending"})
    await orders.save();
    res.status(200).send({message:"Order Create",data:orders})
 }
 catch(e){
res.status(500).send({message:"Order not create",error:"error"});
}
}

const OrderUpdate=async(req,res)=>{
    const id=req.params.id;
    const body=req.body;

try{
    const orders=await order.findByIdAndUpdate(id,body,{name:true});
    res.status(200).send({message:"Order update",data:orders});
}
catch(e){
    res.status(500).send({message:"Order not Update",error:"error"});
}
}


module.exports={GetOrderbyUserId,GetallOrder,AddOrder,OrderUpdate,}