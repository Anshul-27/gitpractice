var express = require("express");
var app = express();
var routerproduct=require("./product");
app.use("/product",routerproduct);
app.listen(9898,()=>{
    console.log("server started...");
});