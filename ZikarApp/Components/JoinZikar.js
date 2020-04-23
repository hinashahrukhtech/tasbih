import React from 'react';
import { 
     Text,
     TouchableOpacity,
     ImageBackground,
     View
     } from 'react-native';
     import logo from './images/logo.png';
     import StyleSheet from './Style';

export default class JoinZikar extends React.Component {
  render() {
    return (
      <ImageBackground source= {logo} style={StyleSheet.bgcontainer}>
          <View style={StyleSheet.Container}>
        <Text style={StyleSheet
          .text}>JOIN ZIKAR</Text>
          </View>
          <View style={StyleSheet.RVIEW}>
          <Text style={StyleSheet
          .text2}>1</Text>
           <View style={StyleSheet.RVIEW2}>
          <Text style={StyleSheet
          .text2}>DAROOD</Text>
          <Text style={StyleSheet
          .text2}>1</Text>
          <Text style={StyleSheet
          .text2}>1</Text>
          </View>
      <View style={StyleSheet.RVIEW2}>
 <Text style={StyleSheet
    .text2}>DAROOD</Text>
    <Text style={StyleSheet
    .text2}>1</Text>
    <Text style={StyleSheet
    .text2}>1</Text>
 </View>
              </View>
      </ImageBackground>
    );
  }
}