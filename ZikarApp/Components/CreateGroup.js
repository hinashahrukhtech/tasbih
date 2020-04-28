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

export default class CreateGroup extends React.Component {
  static NavigationOptions= {
    title:'Home',

}
  render() {
    const { navigate }=this.props.navigation;
    return (
        <ImageBackground source= {logo} style={StyleSheet.bgcontainer}>
        <View style={StyleSheet.Container}>
      <Text style={StyleSheet.text}>CREATE GROUP</Text>
        <View style={StyleSheet.RVIEW}>
          <Text style={StyleSheet
          .text2}>Tasbeeh Name |  </Text>
          <TextInput style={StyleSheet.Input2} placeholder="Enter tasbeeh name" underlineColorAndroid={'transparent'} />
          </View>
          <View style={StyleSheet.RVIEW}>
          <Text style={StyleSheet
          .text2}>Tasbeeh Picture |  </Text>
          <TextInput style={StyleSheet.Input2} placeholder="Select picture" underlineColorAndroid={'transparent'} />
          </View>
          <View style={StyleSheet.RVIEW}>
          <Text style={StyleSheet
          .text2}>How much time |  </Text>
          <TextInput style={StyleSheet.Input2} placeholder="Enter how much time" underlineColorAndroid={'transparent'} />
          </View>
          </View>
          <View style={StyleSheet.btnContainer}>
        <TouchableOpacity style={StyleSheet.btnT}>
        <Text style={StyleSheet
              .text}
              onPress={() => navigate(
                'SelectGroup',{ screen:'SelectGroup' }
              ) }
            >CREATE</Text>
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
