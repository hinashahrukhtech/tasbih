import React from 'react';
import { 
     TextInput,
     TouchableOpacity,
     ImageBackground,
     View,
     Text
     } from 'react-native';
     import logo from './images/logo.png';
     import StyleSheet from './Style';

export default class Register extends React.Component {
  render() {
    return (
      <ImageBackground source= {logo} style={StyleSheet.bgcontainer} >
              <View style={StyleSheet.Container}  >
              <Text style={StyleSheet.text}>REGISTER</Text>
              <TextInput style={StyleSheet.Input} placeholder="Your Name" underlineColorAndroid={'transparent'} />
        
        <TextInput style={StyleSheet.Input} placeholder="Countery" underlineColorAndroid={'transparent'}/>
        
        <TextInput style={StyleSheet.Input} placeholder="pasword" underlineColorAndroid={'transparent'}/>
        </View>
        <TouchableOpacity style={StyleSheet.btn}>
        <Text style={StyleSheet.text}>CONTINUE</Text>
       </TouchableOpacity>
      
     </ImageBackground>
    );
  }
}
