const Signuser = require("../modules/signuser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const DataGetsign = async (req, res) => {
    try {
        const SignGet = await Signuser.find()
        res.status(200).send({ message: "Sign User Can Be Get", data: SignGet })
    }
    catch (e) {
        res.status(500).send({ message: "User alerady exist", error: "error" })
    }
}
const DataSignCreate = async (req, res) => {
    const { Fullname, PhoneNo, email, Password,role } = req.body;
    console.log(req.body);

    try {
        const ExistingUser = await Signuser.findOne({ email: email })
        if (ExistingUser) {
            res.status(500).send({ message: "User already existed" });
        }
        const Encrypt = await bcrypt.hash(Password, 10)

        const SignPost = new Signuser({ name: Fullname, phoneno: PhoneNo, email: email, password: Encrypt,role:role,status:true})

        await SignPost.save();

        res.status(200).send({ message: "Account will created", data: SignPost, });
    }
    catch (e) {
        res.status(500).send({ message: "Sign falied ", error: "error" })
    }
}

const DataUpdate=async(req,res)=>{
    const id=req.params.id;
    const body=req.body;

try{
    const UpdatePut=await Signuser.findByIdAndUpdate(id,body,{name:true});
    res.status(200).send({message:"User Update",data:UpdatePut});
}
catch(e){
    res.status(500).send({message:"User Not Update",error:"error"});
}
}


const DataLogin = async (req, res) => {
    const { email, Password } = req.body;
    console.log(req.body);
    const user = await Signuser.findOne({ email: email })
    if (!user) {
        return res.status(404).send({ message: "user not found" })
    }
    if(!user.status){
        return res.status(400).send({message:"User Account Deactivated"})
    }
    const valid = await bcrypt.compare(Password, user.password);
    if (!valid) {
        return res.status(401).send({ message: "Incorrect Password" })
    }
    const token = jwt.sign({ _id: user._id, email: user.email,role:user.role}, "THIS_IS_SECREAT_KEY_IT_WAS_HIDE", { expiresIn: "10h" })
    return res.status(200).send({ message: "User Logged In", data: { data: user, token: token } })
}



module.exports = { DataGetsign, DataSignCreate,DataUpdate, DataLogin };
