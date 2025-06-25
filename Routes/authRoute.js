const express=require('express');
const router=express.Router();
const User=require('../Models/User');
const {jwtAuthMiddleware,generateToken}=require('../Middleware/jwt');

//Post route will be used for creating user 
router.post('/signup',async (req,res)=>{
    try{
const data=req.body;
const newUser=new User(data);
const response=await newUser.save();
console.log('data saved');

const payload={
    id:response.id,
    username:response.username
}
console.log(JSON.stringify(payload));
const token = generateToken(payload);
        console.log("Token is : ", token);
        
res.status(200).json({response:response,token:token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});

//Login Logic will be made here
router.post('/login',async(req,res)=>{
    try{
const {username,password}=req.body;
const user=await User.findOne({username:username});
//If user does not exist or password does not match
if(!user || !(await user.comparePassword(password))){
    return res.status(401).json({error:'Invalid username or Password'});

}
//generating token 
const payload={
    id:user.id,
    username:user.name
}
const token=generateToken(payload);
res.json({token})
    }
    catch(err){
        console.err(err);
        res.status(500).json({error:"Internal Server Error"});
    }
});
module.exports=router;

