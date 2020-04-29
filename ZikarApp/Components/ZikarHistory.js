import React from 'react';
import { 
     Text,
     TouchableOpacity,
     ImageBackground,
     View,
     Image
     } from 'react-native';
     import logo from './images/logo.png';
     import StyleSheet from './Style';

export default class ZikarHistory extends React.Component {
  static NavigationOptions= {
    title:'SelfZikar',
}
  render() {
    const { navigate }=this.props.navigation;
    return (
      <ImageBackground source= {logo} style={StyleSheet.bgcontainer}>
          <View style={StyleSheet.Container}>
        <Text style={StyleSheet
          .text}>ZIKAR HISTORY</Text>
          <View style={StyleSheet.RVIEW}>
          <Text style={StyleSheet
          .text2}>F</Text>
          <View style={StyleSheet.RVIEW1}>
           <View style={StyleSheet.RVIEW2}>
          <Text style={StyleSheet
          .text3}>DAROOD   </Text>
          
          </View>
      <View style={StyleSheet.RVIEW2}>
    <Text style={StyleSheet
    .text3}>T 1000 | </Text>
    <Text style={StyleSheet
    .text3}>R 900 | </Text>
    <TouchableOpacity style={StyleSheet.btnS}>
        <Text style={StyleSheet
          .text4}>DELETE</Text>
          </TouchableOpacity>
          <Text style={StyleSheet
    .text3}> | </Text>
          <TouchableOpacity style={StyleSheet.btnS}>
        <Text style={StyleSheet
          .text4}>READ</Text>
          </TouchableOpacity>
 </View>
 </View>
 </View>
              </View>
      
        <TouchableOpacity style={StyleSheet.btnT}
 onPress={() => navigate(
  'Home',{ screen:'Home' }
) }>
        <Text style={StyleSheet
          .text}>HOME</Text>
        </TouchableOpacity>
        
      
      </ImageBackground>
    );
  }
}