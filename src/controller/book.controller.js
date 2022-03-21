const express= require("express");
const Book=require("../models/user.models");
const upload=require("../middleware/upload")
const router=express.Router();
router.get("",async(req,res)=>{
    try{
    const books=await Book.find().lean.exec();
    return res.status(200).send(books)
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
            likes:req.body.likes,
            coverImg:filePaths,
            content:req.body.content,
            userId:req.body.userId,
            
        })
    }catch(err){
        return res.status(500).send({message:err.message});
    }
});



module.exports=router;