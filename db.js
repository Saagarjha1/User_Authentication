const mongoose=require('mongoose');
require('dotenv').config();
const mongoURL=process.env.MONGODB_URL;

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;
db.on('connected',()=> console.log('MongoDB connected'));
db.on('error',(err)=> console.error('MongoDB Error: ',err));
db.on('disconnected',()=> console.log('MongoDB Disconnected'));
 
module.exports=db;