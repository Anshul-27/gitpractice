var express= require("express");
var router = express();
router.get("/",(request,response)=>{
    response.send("hello savit");
});
module.exports= router;
