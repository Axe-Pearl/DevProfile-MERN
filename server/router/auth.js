const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../models/userSchema");

router.get("/",(req,res)=>{
    res.send("Hello World! from router");
});

router.post("/register",async (req,res)=>{
    const {name, email, phone, work, password, cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please fill all required fields"});
    }
    try{
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({message:"Email is already registered"});
        }
        const user = new User({name, email, phone, work, password, cpassword});
        const userRegistered = await user.save();
        if(userRegistered){
            return res.status(201).json({message:"User Registered Successfully"});
        }
    }
    catch(err){
        console.log(err);
    }
    
});

router.post("/sigin",(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({message:"Fill all the required fields"});
    }
    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
           if(password === userExist.password){
               return res.status(200).json({message:"Login successfully"});
           }
           return res.status(422).json({message:"Invalid username or password"});
        }
        return res.status(422).json({message:"User is not registered"});
    })
});

module.exports = router;