const mongoose = require("mongoose");
const bycrpt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    work:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    }
});

userSchema.pre('save', async function(next){
    console.log("This is from userSchema");
       if(this.isModified("password")){
        console.log("This is from userSchema deep");
           this.password = await bycrpt.hash(this.password, 12);
           this.cpassword = await bycrpt.hash(this.cpassword, 12);
       }
       next();
});




const User = mongoose.model('USER',userSchema);

module.exports = User;