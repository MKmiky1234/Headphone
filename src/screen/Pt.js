import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [result, setResult] = useState(null); 
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [data,setData] = useState([])
    const arr = ['abc','def','ghi','1',6,'Muskan']
    const arr2 = ['developer',544,...arr,]
    console.log('arr2',arr2)
    useEffect(() => {
        const loadUserData = async () => {
            try {
                const storedEmail = await AsyncStorage.getItem('email');
                if (storedEmail) {
                    setEmail(storedEmail);
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        };
        loadUserData();
    }, []);

    const handleLogin = async () => {
        let formIsValid = true;
        const newErrors = { email: '', password: '' };

        if (!email) {
            formIsValid = false;
            newErrors.email = 'Input is required';
        }

        setErrors(newErrors);

        if (formIsValid) {
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${email}`)
                .then(response => {
                    console.log('res',response.data[0].meanings)
                    setData(response.data[0].meanings[0].definitions)
                    // setResult(response.data); // Store API result in state
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }; 
    console.log('data',data)

    return (
        <View style={[styles.container,{padding:20, backgroundColor:"lightblue"}]}>
            <View style={{alignItems:'center'}}>
            <Text style={styles.title}>Dictionary</Text>
            </View>
         
            <TextInput
            
                placeholder="Search here"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
       
            {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1,paddingBottom:20}}>
           {
            data.map((item,index)=>{
           return(
            <View key={index} style={{marginTop:10}}>
                <Text style={{alignSelf:'flex-start',fontSize:20}}>
                    {item.definition}
                </Text>
                </View>
           )
            })
           }
           <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <View style={{alignSelf:'center'}}>
                <Text style={styles.buttonText}>Submit</Text>
                </View>
            </TouchableOpacity>
           </ScrollView>
            

            {result && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultTitle}>Result:</Text>
                    <Text>{JSON.stringify(result)}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 20,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        marginBottom: 5,
    },
    resultContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    resultTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default Login;
