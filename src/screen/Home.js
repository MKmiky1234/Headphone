import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';



const Home = () => {
  const arr = ['abc', 'def', 'xyz', 'musddfdfdfdkan', 'plzd', 'jhfjg', 'jgfg']
  const token = useSelector(state => state.user)
  console.log('token', token)
  


  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [button1Color, setButton1Color] = useState();
  const [button2Color, setButton2Color] = useState();

  const handleButton1Click = () => {
    setIsButton1Clicked(true);
    setButton2Color('green');
  };

  const handleButton2Click = () => {
    setIsButton1Clicked(true);
    setButton1Color('yellow');

  };








  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={{ backgroundColor: button1Color ? button1Color : 'pink' }} onPress={handleButton1Click} >
        <Text>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor: button2Color ? button2Color : 'black', borderRadius: 20, height: 50,
        width: 200
      }} onPress={handleButton2Click}  >
        <Text style={{ fontSize: 30, alignSelf: 'center', color: "white" }}>Button2</Text>
      </TouchableOpacity>

    </View>
  );


}

export default Home