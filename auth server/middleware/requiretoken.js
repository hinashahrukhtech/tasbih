const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User =mongoose.model('User');
const jwtkey =require('../keys');

module.exports=(req,res,next)=>{
const {authorization}= res.headers;
if(!authorization){
    return res.status(401).send({error:'you must be register'});
}
const token =authorization.replace("Bearer ","");
jwt.verify(token,jwtkey,async (err,payload)=>{
if (err){
    return res.status(401).send({error:'you must be register'});
}
const {userid} = payload;
const user = await User.findById(userid);
req.user=user;
next();
})
}