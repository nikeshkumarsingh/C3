const path=require("path");
const multer=require("multer");
const storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,path.join(_dirname,"../images"));
    },
});
const fileFilter=(req,file,callback)=>{
    if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"){
        callback(null,true);
    }
    else{
        callback(new Error("error acoure while uploading"),false);
    }
};
const options={
    storage,
    fileFilter,
    limits:{
        fileSize:1024*1024*5,
    },
};
const uploads=multer(options);
module.exports-uploads;