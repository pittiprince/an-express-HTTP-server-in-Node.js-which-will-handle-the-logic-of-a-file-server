
const express = require('express');
const app=express();
const fs = require('fs'); 
const path = require('path');


app.get("/files",(req,res)=>{
fs.readdir(__dirname,(err,files)=>{
  if(err){
    console.log("error");
  }
  res.json({
    files
  })
})
}
)  

app.get("/files/:filename",(req,res)=>{
  fs.readFile(req.params.filename,'utf8',(err,data)=>{
    if(err){
      console.log("error!");
    }
    let output =JSON.stringify(data);
    res.json({
     output
    })
  })
})

app.listen(3000);


