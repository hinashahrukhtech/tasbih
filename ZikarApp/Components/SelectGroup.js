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
    const { navigate }=this.props.navigation;
    return (
      <ImageBackground source= {logo} style={StyleSheet.bgcontainer} >
              <View style={StyleSheet.Container}  >
      <Text style={StyleSheet.text}>CHOOSE GROUP</Text>
    <TouchableOpacity style={StyleSheet.btnRound}  
    onPress={() => navigate(
              'CreateGroup',{ screen:'CreateGroup' }
            ) }>
        <Text style={StyleSheet.text}>FAMILY ZIKAR GROUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.btnRound}
         onPress={() => navigate(
          'CreateGroup',{ screen:'CreateGroup' }
        ) }>
        <Text style={StyleSheet.text}>OVERALL ZIKAR GROUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.btnRound}
         onPress={() => navigate(
          'AlreadyCreatedGroup',{ screen:'AlreadyCreatedGroup' }
        ) }>
        <Text style={StyleSheet.text}>ALREADY CREATED</Text>
       </TouchableOpacity> 
       </View>
        <TouchableOpacity style={StyleSheet.btn}
        onPress={() => navigate(
          'Home',{ screen:'Home' })}>
        <Text style={StyleSheet.text}>BACK</Text>
        </TouchableOpacity>
     </ImageBackground>
    );
  }
}