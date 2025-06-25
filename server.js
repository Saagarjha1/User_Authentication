const express=require('express');
const dotenv=require('dotenv');
const db=require('./db');
const authRoutes=require('./Routes/authRoute');
const bodyParser=require('body-parser');
 //Loading environment variables
 dotenv.config();

const app=express();
const PORT =process.env.PORT ||3000;

//connect to DB 
if(typeof db.connectDB==='function'){
    db.connectDB(); 
}else{
    console.warn('connetedDB not found in db.js');
}

//Middleware 
app.use(bodyParser.json());

//Routes
app.use('/api',authRoutes);

//start the server
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});