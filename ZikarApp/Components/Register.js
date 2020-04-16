import React,{Component} from 'react';

import { 
    View,
     StyleSheet,
     Text,
     TextInput,
     TouchableOpacity,
     Dimensions
     } from 'react-native';
     
export default class RegisterForm extends React.Component {
  render() {
    return (

      <View style={styles.RegisterForm}  >

        
        <TextInput style={styles.Input} placeholder="Your Name" underlineColorAndroid={'transparent'} maxLength={90}/>
        
        <TextInput style={styles.Input} placeholder="Countery" underlineColorAndroid={'transparent'} maxLength={90}/>
        
        <TextInput style={styles.Input} placeholder="pasword" underlineColorAndroid={'transparent'} maxLength={90}/>
    
         <TouchableOpacity style={styles.btn} maxLength={100} >
        <Text style={styles.text}>Continue</Text>
       </TouchableOpacity>
       </View>

      
    );
  }
}

const styles = StyleSheet.create({
  
  RegisterForm: {
    marginTop:"130",
    justifyContent:"center",
    

  },
  Input:{
  marginTop:25,
    color:'#0E061C',
    borderRadius:25,
    backgroundColor:'#F9FDF0',
    borderWidth:2,
    borderColor:'#0E061C',
     marginTop: 30,
     padding:10,
    height:45,
    fontSize:20, 
   
    
    
  },
  btn:{
    marginTop:70,
    borderRadius:10,
    fontSize:20,
    backgroundColor:'#0E061C',
    color:'#F9FDF0',
    borderWidth:2,
    borderColor:'#F9FDF0',
    justifyContent:"center",
    margin:0,
    height:50
    

  },
  text:{
    fontSize:20,
    color:'#F9FDF0',
    textAlign:"center",
  }
}
);