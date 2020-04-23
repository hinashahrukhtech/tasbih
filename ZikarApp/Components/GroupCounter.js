import React from 'react';
import { 
     Text,
     TouchableOpacity,
     ImageBackground,
     View
     } from 'react-native';
     import Screen from './images/Screen.png';
     import StyleSheet from './Style';

export default class SelfCounter extends React.Component {
  render() {
    return (
      <ImageBackground source= {Screen} style={StyleSheet.bgcontainer}>
        
        <View style={StyleSheet.Container}>
        <Text style={StyleSheet
          .text}>0</Text>
        </View>
        <View style={StyleSheet.btnCC}>
        <TouchableOpacity style={StyleSheet.BtnC}>
        <Text style={StyleSheet
          .text}>      </Text>
        </TouchableOpacity>
        </View>
        <View style={StyleSheet.btnContainer}>
        <TouchableOpacity style={StyleSheet.btnT}>
        <Text style={StyleSheet
          .text}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.btnT}>
        <Text style={StyleSheet
          .text}>Continue</Text>
        </TouchableOpacity>
        
       </View>
        </ImageBackground>

      
    );
  }
}
