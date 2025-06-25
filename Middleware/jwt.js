//middleware/jwt.js
const jwt=require('jsonwebtoken');

//here we are creating a jwt middleware 
const jwtAuthMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader) return res.status(401).json({error:'no token found'});
    const token=authHeader.split(' ')[1];
    if(!token) return res.status(401).json({error:"Unauthorised"});

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(err){
        return res.status(401).json({error:'Invalid token'});
    }
};
const generateToken=(userData)=>{
    return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:'1h'});
}

module.exports={jwtAuthMiddleware,generateToken};