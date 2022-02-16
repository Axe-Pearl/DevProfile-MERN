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
        else if(password != cpassword){
            return res.status(422).json({message:"Password not matching"});
        }
        else{
            const user = new User({name, email, phone, work, password, cpassword});
            //middleware for hashing password will be called here before saving registered user
            await user.save();
            return res.status(201).json({message:"User Registered Successfully"});
        }
    }
    catch(err){
        console.log(err);
    }
    
});

router.post("/sigin",async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({message:"Fill all the required fields"});
    }
    try{
        const userExist = await User.findOne({email:email});
        if(userExist){
           if(password === userExist.password){
            return res.status(201).json({message:"Login successfully"})
           }
        return res.status(422).json({message:"Invalid username or password"});
        }
        return res.status(422).json({message:"User is not registered"});
    }
    catch(err){
        console.log(err);
        return res.status(422).json({Error:err});
    }
});

module.exports = router;