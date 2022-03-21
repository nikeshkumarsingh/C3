const mongoose=require("mongoose");
const commentSchema=new mongoose.Schema(
    {
        body:{type:String,required:true},
        bookId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"book",
            required:true,
            unique:true,
        },
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
module.exports=mongoose.model("comment",commentSchema)