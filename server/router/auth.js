const express = require("express");
const router = express.Router();
const bycrpt = require("bcrypt");


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
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(422).json({message:"Fill all the required fields"});
        }
        const userExist = await User.findOne({email:email});
        if(userExist){
           const isMatch = await bycrpt.compare(password, userExist.password);
           const token = await userExist.generateAuthToken();
           console.log(token);
           if(isMatch){
               return res.status(201).json({message:"User Logged in Successfully"})
           }
           return res.status(422).json({message:"Invalid Credentials"});
        }
        return res.status(422).json({message:"User does not exist"});
    }
    catch(err){
        console.log(err);
        return res.status(422).json({Error:err});
    }
});

module.exports = router;