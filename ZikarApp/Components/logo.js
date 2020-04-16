import React from 'react';
import { 
    Image,
     StyleSheet,
     TouchableOpacity
     } from 'react-native';

export default class logo extends React.Component {
  render() {
    return (

      <View style={styles.RegterForm}>
           <Image source={require('logo2.png')} style={{ width: 305, height: 159 }} />
      </View>
    );
}
}
