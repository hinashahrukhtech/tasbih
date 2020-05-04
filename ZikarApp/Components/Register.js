import React,{useState} from 'react';
import { 
     TextInput,
     TouchableOpacity,
     ImageBackground,
     View,
     Text
     } from 'react-native';
     import logo from './images/logo.png';
     import StyleSheet from './Style';


     const Register=()=>{
  

  sendCred=()=>{
  fetch("http://192.168.13:19001/")
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  })
 
  }
    const[name,setname]=useState('');
    const[country,setcountry]=useState('');
   const[password,setpassword]=useState('');
    
    return (
      <ImageBackground source= {logo} style={StyleSheet.bgcontainer} >
              <View style={StyleSheet.Container}  >
              <Text style={StyleSheet.text}>REGISTER</Text>
              <TextInput Label='name' value={name} style={StyleSheet.Input} placeholder="Your Name" underlineColorAndroid={'transparent'}  onChangeText={(text)=>setname(text)}/>
        
        <TextInput Label='country' value={country}  style={StyleSheet.Input} placeholder="Countery" underlineColorAndroid={'transparent'} onChangeText={(text)=>setcountry(text)}/>
        
        <TextInput  Label='password'  value={password} style={StyleSheet.Input} placeholder="pasword" underlineColorAndroid={'transparent'} secureTextEntry={true} onChangeText={(text)=>setpassword(text)}/>
        </View>
        <TouchableOpacity style={StyleSheet.btn} onPress={()=>sendCred()}>
        <Text style={StyleSheet.text}>CONTINUE</Text>
       </TouchableOpacity>
      
     </ImageBackground>
    );
  
};
export default Register;