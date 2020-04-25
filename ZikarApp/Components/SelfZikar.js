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
            <Text style={StyleSheet.text}>SELF ZIKAR</Text>
    <TouchableOpacity style={StyleSheet.btnRound}>
        <Text style={StyleSheet.text}>PREVIOUS ZIKAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.btnRound}>
        <Text style={StyleSheet.text}>NEW ZIKAR</Text>
        </TouchableOpacity>
        </View>
       <TouchableOpacity style={StyleSheet.btn}>
        <Text style={StyleSheet.text}>BACK</Text>
       </TouchableOpacity>
        </ImageBackground>
        );
    }
}