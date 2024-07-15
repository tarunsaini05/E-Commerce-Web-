const product=require("../modules/product");

const GetallProduct= async(req,res)=>{
    try{
        const products= await product.find();
        res.status(200).send({message:"product fetched",data:products})
    }
    catch(e){
res.status(500).send({message:"product error",error:"error"});
    }
}

const GetAllAvailableProduct= async(req,res)=>{
    try{
        const products= await product.find({availability:true});
        res.status(200).send({message:"product fetched",data:products})
    }
    catch(error){
res.status(500).send({message:"product error",error:"error"});
    }
}

const GetProductbyId= async(req,res)=>{
    const id=req.params.id;
    try{
        const products= await product.findById(id);
        res.status(200).send({message:"product fetched",data:products})
    }
    catch(e){
res.status(500).send({message:"product error",error:"error"});
    }
}

const AddProduct=async(req,res)=>{
    const {productname,productprice,productdesc,availability}=req.body;
    const productImage=req.file ? req.file.path:"";
    console.log(productImage);
 try{
    const products=new product({productname:productname,productprice:productprice,productdesc:productdesc,ProductImage:productImage,availability:true})
    await products.save();
    res.status(200).send({message:"Product fetched",data:products})
 }
 catch(e){
res.status(500).send({message:"product error",error:"error"});
}
}

const ProductUpdate=async(req,res)=>{
    const id=req.params.id;
    const body=req.body;

try{
    const products=await product.findByIdAndUpdate(id,body,{name:true});
    res.status(200).send({message:"Product update",data:products});
}
catch(e){
    res.status(500).send({message:"Product not Update",error:"error"});
}
}






module.exports ={GetallProduct,GetAllAvailableProduct,GetProductbyId,AddProduct,ProductUpdate};