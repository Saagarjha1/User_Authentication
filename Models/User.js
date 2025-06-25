//Models/user.js
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
username:{
    type:String,
    required:true
},
name:{
    type:String,
    required:true,
    unique:true,
},
password:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    unique:true
}

});

//Now we will be hashing the password
userSchema.pre('save',async function (next){
    const user=this;

    //hash the password only if it has been modified or is new
    if(!user.isModified('password')) return next();
    try{
//creating salt
const salt=await bcrypt.genSalt(10);
//hash the password 
const hashedPassword= await bcrypt.hash(user.password,salt);
//overriding the plain password with the hashed password
user.password=hashedPassword;
next();
    }
    catch(err) { return next(err); }
});

//we will be comparing the password over here
 userSchema.methods.comparePassword=async function (candidatePassword) {
    try{
 //using bcrypt to compare the provided password with the hashed password 
 const isMatch=await bcrypt.compare(candidatePassword,this.password);
 return isMatch;
    }catch(err){
        throw err;
    }
 }

 module.exports=mongoose.model('User',userSchema);