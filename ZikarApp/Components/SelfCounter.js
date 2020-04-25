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
        <Text style={StyleSheet.text}>0</Text>
        </View>
        <View style={StyleSheet.btnCC}>
        <TouchableOpacity style={StyleSheet.BtnC1}>
        <Text style={StyleSheet.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.BtnC2}>
        <Text style={StyleSheet.text}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={StyleSheet.btnContainer}>
        <TouchableOpacity style={StyleSheet.btnT}>
        <Text style={StyleSheet
          .text}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.btnT}>
        <Text style={StyleSheet
          .text}>BACK</Text>
        </TouchableOpacity>
        
       </View>
        </ImageBackground>
      
    );
        }
      }
