const mongoose = require('mongoose');
const express = require('express');
const router =express.Router();
const User = mongoose.model('User');
const jwt= require('jsonwebtoken');
const {jwtkey}= require('../keys');

router.post ('/Register', async(req, res) => {
    const {name,country,password}= req.body;
    try{
        const user =new User({name,country,password});
        await user.save();
        const token = jwt.sign({userid:user._id},jwtkey);
        res.send({token});
    }
    catch(err){
        res.send(422).send(err.message)
    }
    
  });
