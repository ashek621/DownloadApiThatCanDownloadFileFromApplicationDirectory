const express=require('express');

app=express();

app.get("/",function(req,res){

        res.download("./pictures/mosque.png");
        
       
})


app.listen(6000,function(){

        console.log("Server Run Success!!");
  
});