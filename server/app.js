const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({path:"./config.env"});
const PORT = process.env.PORT;

require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"));
app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}`);
})




