import React from 'react';
import { StyleSheet, ImageBackground,resizeMode, Image ,Dimensions} from 'react-native';
import RegisterForm  from './Components/Register';
import logo from './Components/images/logo.png';
import Home  from './Components/Home';
import SelfCounter  from './Components/SelfCounter';
 
export default class App extends React.Component {
  render(){
 return(
      <ImageBackground source= {logo} style={styles.bgcontainer} >
      <RegisterForm/>
     </ImageBackground>
   // <Home/>
   //<SelfCounter/>
 );
}
}
const styles = StyleSheet.create({
  
  bgcontainer:{
    flex:2,
    justifyContent:"center",
    alignItems:"center",
  }
  
});
