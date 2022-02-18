const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(cookieParser());
dotenv.config({path:"./config.env"});
const PORT = process.env.PORT;

require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"));
app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}`);
})




