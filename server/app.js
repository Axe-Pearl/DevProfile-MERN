const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config({path:"./config.env"});
const PORT = process.env.PORT;

require("./db/conn");

app.get("/",(req,res)=>{
    res.send("Hello World!")
});

app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}`);
})