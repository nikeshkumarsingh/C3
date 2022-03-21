const express= require("express");
const User=require("../models/user.models");
const upload=require("../middleware/upload")
const router=express.Router();
router.get("",async(req,res)=>{
    try{
    const users=await User.find().populate("userId").lean.exec();
    return res.status(200).send(users)
    }
    catch(err){
        return res.status(500).send({message:err.message});

    }
});
router.post("",upload.array("profilePic",2),async(req,res)=>{
    try{
        const filePaths=req.files.map((file)=>{
            return file.path;
        });
        const user=await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lasttName,
            age:req.body.age,
            email:req.body.email,
            profilePic:filePaths,
        })
    }catch(err){
        return res.status(500).send({message:err.message});
    }
});



module.exports=router;