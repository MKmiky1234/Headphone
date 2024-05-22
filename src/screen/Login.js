import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import {saveToken} from '../redux/Silices';


const Login = () => {
    const [inputValue, setInputValue] = useState('kuch bhi')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(saveToken('hello miky'))
        console.log('input', inputValue)

    }, [inputValue])
    return (
        <LinearGradient colors={['#3a3837', '#1d1d1f', 'black']} style={styles.linearGradient}>
            <View style={{ marginTop: 40 }}>
                <Image source={require("../assest/images/headphonegirl.png")}
                    style={{ height: 300, width: 350, justifyContent: 'center' }}

                ></Image>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20, marginTop: 30 }}>
                <Text style={{ color: "#b57746", fontSize: 40, fontFamily: 'Poppins-ExtraBoldItalic' }}>Welcome </Text>
                <Text style={{ color: "white", fontSize: 40, fontFamily: 'Poppins-ExtraBoldItalic' }}>Back</Text>
            </View>
            <View>

                <TextInput placeholder='Enter your email' placeholderTextColor={'black'} onChangeText={changedText => setInputValue(changedText)} style={{ borderColor: "#b57746", borderWidth: 4, backgroundColor: "white", borderRadius: 30, marginTop: 30, paddingHorizontal: 20 }}></TextInput>

                <TextInput placeholder='Enter Password' placeholderTextColor={'black'} onChangeText={changedText => setInputValue(changedText)} style={{ borderColor: "#b57746", borderWidth: 4, backgroundColor: "white", borderRadius: 30, marginTop: 20, paddingHorizontal: 20 }}></TextInput>


            </View>


            <TouchableOpacity style={{ height: 50, width: 350, backgroundColor: "#b57746", borderRadius: 30, justifyContent: 'center', alignItems: "center", marginTop: 30, alignSelf: 'center' }}>
                <Text style={{ fontSize: 20, color: "white", fontWeight: 'bold' }}>Log in</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20, marginTop: 20 }}>
                <Text style={{ color: "white", fontSize: 15, fontFamily: 'Poppins-Regular' }}>Don't  have an account ?</Text>
                <Text style={{ color: "#b57746", fontSize: 15, fontFamily: 'Poppins-Regular' }}> Sign up now</Text>
            </View>

        </LinearGradient>

    )
}

export default Login

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

})