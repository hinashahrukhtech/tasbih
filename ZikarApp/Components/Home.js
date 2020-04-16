import React from 'react';
import { 
     StyleSheet,
     Text,
     TouchableOpacity,
     ImageBackground,
     View
     } from 'react-native';
     import logo from './images/logo.png';

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground source= {logo} style={styles.bgcontainer}>
        <View style={styles.home}>
       <TouchableOpacity style={styles.btn}>
        <Text style={styles
          .text}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
        <Text style={styles
          .text}>Continue</Text>
        </TouchableOpacity>
       
        
        <TouchableOpacity style={styles.btn}>
        <Text style={styles
          .text}>Continue</Text>
    
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
    marginTop:"65%",
   
  },
   btn:{
    marginTop:25,
    borderRadius:25,
    fontSize:20,
    backgroundColor:'#0E061C',
    color:'#F9FDF0',
    borderWidth:2,
    borderColor:'#F9FDF0',
    justifyContent:"center",
    margin:0,
    height:50,
    width:250,
  },
  text:{
    fontSize:20,
    color:'#F9FDF0',
    textAlign:"center",
  },
  btn2C:{
    marginTop:"30%",
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2:{
   flex:1,
    backgroundColor:'#0E061C',
    borderWidth:2,
    borderColor:'#F9FDF0',
    justifyContent:"center",
    height:50,
    borderRadius:10,
  }
});
