import React from 'react';
import { 
     Text,
     TouchableOpacity,
     ImageBackground,
     View
     } from 'react-native';
     import logo from './images/logo.png';
     import StyleSheet from './Style';

export default class SelectGroup extends React.Component {
  render() {
    return (
      <ImageBackground source= {logo} style={StyleSheet.bgcontainer} >
              <View style={StyleSheet.Container}  >
    <TouchableOpacity style={StyleSheet.btnRound}>
        <Text style={StyleSheet.text}>FAMILY ZIKAR GROUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.btnRound}>
        <Text style={StyleSheet.text}>OVERALL ZIKAR GROUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.btnRound}>
        <Text style={StyleSheet.text}>ALREADY CREATED</Text>
       </TouchableOpacity> 
       </View>
       <View style={StyleSheet.btnContainer}>
        <TouchableOpacity style={StyleSheet.btnT}>
        <Text style={StyleSheet
          .text}>HOME</Text>
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