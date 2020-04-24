import React from 'react';
import { 
    TextInput,
     Text,
     TouchableOpacity,
     ImageBackground,
     View
     } from 'react-native';
     import logo from './images/logo.png';
     import StyleSheet from './Style';

export default class ModifyGroup extends React.Component {
  render() {
    return (
        <ImageBackground source= {logo} style={StyleSheet.bgcontainer}>
        <View style={StyleSheet.Container2}>
      <Text style={StyleSheet.text}>MODIFY GROUP</Text>
        </View>
        <View style={StyleSheet.RVIEW2}>
          <Text style={StyleSheet
          .text2}>Tasbeeh Name |  </Text>
          <TextInput style={StyleSheet.Input2} placeholder="Enter tasbeeh name" underlineColorAndroid={'transparent'} />
          </View>
          <View style={StyleSheet.RVIEW2}>
          <Text style={StyleSheet
          .text2}>Tasbeeh Picture |  </Text>
          <TextInput style={StyleSheet.Input2} placeholder="Select picture" underlineColorAndroid={'transparent'} />
          </View>
          <View style={StyleSheet.RVIEW2}>
          <Text style={StyleSheet
          .text2}>How much time |  </Text>
          <TextInput style={StyleSheet.Input2} placeholder="Enter how much time" underlineColorAndroid={'transparent'} />
          </View>
          <View style={StyleSheet.btnContainer}>
        <TouchableOpacity style={StyleSheet.btnT}>
        <Text style={StyleSheet
          .text}>MODIFIED</Text>
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