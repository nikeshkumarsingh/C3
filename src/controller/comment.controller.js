const express=require("express");
const Comment=("../models/comment.models.js");
const crudcontroller=require("./crud.controller");
const router=express.Router();
router.get("",async(req,res)=>{
    try{
        const comments=await Comment.find().populate("userId").lean().exec();
        return res.status(200).send(comments)
    }
    catch(err){
        return res.status(200).send({message:err.message});
    }
});

router.post("",crudcontroller.post(Comment));

module.exports=router;