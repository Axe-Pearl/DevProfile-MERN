const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config({path:"./config.env"});
const DB = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose.connect(DB,{
    useNewUrlParser: true,
})
.then(()=>{
    console.log("MongoDB Connection Successful");
})
.catch((err)=>{
    console.log(err);
})

app.get("/",(req,res)=>{
    res.send("Hello World!")
});

app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}`);
})