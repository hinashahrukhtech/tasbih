import React from 'react';
import { 
     StyleSheet,
     Text,
     TouchableOpacity,
     ImageBackground,
     View
     } from 'react-native';
     import Screen from './images/Screen.png';

export default class SelfCounter extends React.Component {
  render() {
    return (
      <ImageBackground source= {Screen} style={styles.bgcontainer}>
        
        <View style={styles.home}>
        <Text style={styles
          .text}>0</Text>
        </View>
        <View style={styles.btnC}>
       
        <TouchableOpacity  style={styles.btn}>
        <Text style={styles
          .text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
        <Text style={styles
          .text}>   </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.btn2C}>
        <TouchableOpacity style={styles.btn2}>
        <Text style={styles
          .text}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
        <Text style={styles
          .text}>Continue</Text>
        </TouchableOpacity>
        
        </View>
        </ImageBackground>

      
    );
  }
}
const styles = StyleSheet.create({
  
    bgcontainer:{
      flex:1,
      height:null,
      justifyContent:"center",
      alignItems:"center",
    },
     home:{
      marginTop:"20%",
    },
    btnC:{
        marginTop:"65%",
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      btn2C:{
        marginTop:"2%",
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
     btn:{
         flex:1,
      borderRadius:50,
      fontSize:20,
      backgroundColor:'#0E061C',
      color:'#F9FDF0',
      borderWidth:2,
      borderColor:'#F9FDF0',
      justifyContent:"center",
      margin:0,
      height:20,
     },
    text:{
      fontSize:20,
      color:'#F9FDF0',
      textAlign:"center",
    },
   
    btn2:{
     flex:1,
      backgroundColor:'#0E061C',
      borderWidth:2,
      borderColor:'#F9FDF0',
      justifyContent:"center",
      height:45,
      borderRadius:10,
    }
  });