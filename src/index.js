const express=require("express");
const usercontroller=require("./controller/user.controller");
const bookcontroller=require("./controller/book.controller");
const commentcontroller=require("./controller/comment.controller.js");
const app=express();
app.use("/users",usercontroller)
app.use("/books",bookcontroller)
app.use("/comment",commentcontroller)
module.exports=app;