import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Appointment = () => {
  return (
    <View style={{backgroundColor:"#E6E9FF", height:"100%"}}>
        <View style={{flexDirection: 'row', alignItems: 'center ' , marginTop:20 }}>
      <Text  style={{fontSize:20, marginLeft:20 , flex:1, padding:20}}>Make an Appointment </Text>
      <AntDesign name="message1" color={"black"} size={25}  />
      <Ionicons name="person-outline" color={"black"} size={25}  style={{backgroundColor:"white",}}/>
      </View>



      </View>
  )
}

export default Appointment
