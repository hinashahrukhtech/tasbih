import React, { useState } from 'react';
import {
    TextInput,
    TouchableOpacity,
    ImageBackground,
    View,
    Text
} from 'react-native';
import logo from './images/logo.png';
import StyleSheet from './Style';
import AsyncStorage from '@react-native-community/async-storage';

const Register = async (props) => {


    const [name, setname] = useState('');
    const [country, setcountry] = useState('');
    const [password, setpassword] = useState('')

    const sendCred = async (props) => {
        fetch("http://192.168.100.13:3000/Register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "country": country,
                "password": password
            })
        })
            .then(res => res.json())
            .then(async (data) => {
                try {
                    await AsyncStorage.setItem('token', data.token)
                    props.navigation.replace("Home")
                } catch (e) {
                    console.log("error hai", e)
                }
            })
    }
    return (
        <ImageBackground source={logo} style={StyleSheet.bgcontainer} >
            <View style={StyleSheet.Container}  >
                <Text style={StyleSheet.text}>REGISTER</Text>
                <TextInput Label='name' value={name} style={StyleSheet.Input} placeholder="Your Name" underlineColorAndroid={'transparent'} onChangeText={(text) => setname(text)} />

                <TextInput Label='country' value={country} style={StyleSheet.Input} placeholder="Country" underlineColorAndroid={'transparent'} onChangeText={(text) => setcountry(text)} />

                <TextInput Label='password' value={password} style={StyleSheet.Input} placeholder="pasword" underlineColorAndroid={'transparent'} secureTextEntry={true} onChangeText={(text) => setpassword(text)} />
            </View>
            <TouchableOpacity style={StyleSheet.btn} onPress={() => sendCred()}>
                <Text style={StyleSheet.text}>CONTINUE</Text>
            </TouchableOpacity>

        </ImageBackground>
    );

};
export default Register;