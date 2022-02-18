const jwt = require("jsonwebtoken")
const User = require("../models/userSchema");

const authenticate = async (req,res,next)=>{
    console.log("from authenticate",req.cookies);
   try{
      const token = req.cookies.jwttoken;
      const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
      console.log("verfifytoken",verifyToken);
      const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token":token});

      if(!rootUser){
          throw new Error("User not found");
      }
      req.token = token;
      req.rootUser = rootUser;
      req.UserID = rootUser._id;

      next();
   }
   catch(err){
       res.status(401).send("Unauthorized:no token provided");
       console.log(err);
   }
}

module.exports = authenticate;