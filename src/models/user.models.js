const mongoose=require("mongoose");
const userSchema=new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lasatName:{type:String,required:true},
        age:{type:Number,required:true},
        email:{type:String,required:true,unique:true},
        profimePic:[{type:String,required:false}],
    },
    {
        timestampsd:true,
    }
);
module.exports=mongoose.model("user",userSchema)