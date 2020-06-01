const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const userschema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        require:true,
    },
    country:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        unique:true,
        require:true,
    }
})

userschema.pre('save',function(next){
    const user=this;
    if(user.isModified('password')){
        return next()
    }
    bcrypt.genSalt(10,(err,salt)=>{
if(err){
return next(err);
}
bcrypt.hash(user.password,salt,(err,hash)=>{

user.password=hash;
next();
    })
})
})

mongoose.model('User',userschema);