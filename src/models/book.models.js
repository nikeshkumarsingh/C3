const mongoose=require("mongoose");
const bookSchema=new mongoose.Schema(
    {
        likes:{type:Number,required:true,default:0},
        coverImg:[{type:String,required:false}],
        content:{type:String,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
            unique:true,
        }
    },
    {
        timestampsd:true,
    }
);
module.exports=mongoose.model("book",bookSchema)