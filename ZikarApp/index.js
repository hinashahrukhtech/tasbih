const express = require('express');
const PORT = 3000;
const app = express();
const bodyParser= require ('body-parser');
const mongoose=require('mongoose');
const{mogoURL}=require('./keys');


require('./model/user');
const requiretoken =require('./middleware/requiretoken');
const authroutes = require('./routes/authroutes');
app.use(bodyParser.json());


mongoose.connect(mogoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})

mongoose.connection.on('connected',()=>{
  console.log("connected to mongo ")
})

mongoose.connection.on('error',()=>{
  console.log("this is error ",err)
})

app.get('/',requiretoken,(req,res)=>{
  res.send("your user name is ");
})

app.listen(PORT, () => {
  console.log(`Application listening at localhost:${PORT}`);
});


