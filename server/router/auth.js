const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("Hello World! from router");
});

router.get("/register",(req,res)=>{
    res.send("register");
});

router.post("/register",(req,res)=>{
    console.log(req.body);
    res.json({message: req.body});
});
module.exports = router;