const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config({path:"./config.env"});
const PORT = process.env.PORT;

require("./db/conn");
app.use(express.json());
// const User = require("./models/userSchema");
app.use(require("./router/auth"));
app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}`);
})