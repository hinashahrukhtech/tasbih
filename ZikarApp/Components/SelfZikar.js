import React from 'react';
import { 
    TextInput,
     Text,
     TouchableOpacity,
     ImageBackground,
     View,
     style
     } from 'react-native';
     import logo from './images/logo.png';
     import StyleSheet from './Style';

export default class SelfZikar extends React.Component {
  render() {
    return (
        <ImageBackground source= {logo} style={StyleSheet.bgcontainer}>
            <View style={StyleSheet.Container}  >
    <TouchableOpacity style={StyleSheet.btnRound}>
        <Text style={StyleSheet.text}>PREVIOUS ZIKAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.btnRound}>
        <Text style={StyleSheet.text}>NEW ZIKAR</Text>
        </TouchableOpacity>
        </View>
        <View style={StyleSheet.btnContainer}>
        <TouchableOpacity style={StyleSheet.btn}>
    
        <Text style={StyleSheet.text}>BACK</Text>
       </TouchableOpacity>
       </View>
        </ImageBackground>
        );
    }
}