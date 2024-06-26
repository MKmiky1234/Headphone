import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';



const Appointment = () => {
const [selectedBox,setSelectedBox] = useState("")
  return (
    <View style={{backgroundColor:"#E6E9FF",flex:1}}>
        <View style={{ marginTop:20 ,padding:20, }}>
            
       <View style={{justifyContent:"space-between",flexDirection: 'row', alignItems: 'center ' ,}}>    
      <Text style={{fontSize:20,color:"#07113D",fontFamily:"Poppins-Regular"}}>Make an Appointment </Text>
      <View style={{flexDirection:'row',gap:10, }}>
      <View>
      <AntDesign name="message1" color={"black"} size={25}  />
      </View>
     <View>
      <Ionicons name="person-outline" color={"black"} size={25}  />
      </View>
      </View>
      
      </View>
      </View>
      <View style={{height:1,width:"100%", backgroundColor:"#07113D"}}>

      </View>
      <View style={{ marginTop:20, padding:10}}>
         <Text style={{fontSize:20, color:"#171E5B", fontFamily:"Poppins-Bold"}}>April 2020</Text>
      </View>
      <View style={{flexDirection: 'row',justifyContent:"space-between", padding:10,gap:10 }}>
        
        <TouchableOpacity style={{ height:100, flexGrow:1, backgroundColor:"#FFFFFF", alignItems:'center', borderRadius:10, gap:10, padding:10}}>
       
         <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>MON</Text>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height:100, flexGrow:1, backgroundColor:"#FFFFFF",alignItems:'center',borderRadius:10,gap:10, padding:10 }}>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>MON</Text>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height:100, flexGrow:1, backgroundColor:"#FFFFFF",alignItems:'center',borderRadius:10,gap:10, padding:10 }}>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>MON</Text>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height:100, flexGrow:1, backgroundColor:"#FFFFFF", alignItems:'center',borderRadius:10,gap:10, padding:10  }}>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>MON</Text>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>21</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={{ height:100, flexGrow:1, backgroundColor:"#FFFFFF", alignItems:'center',borderRadius:10,gap:10, padding:10 }}>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>MON</Text>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>21</Text>
        </TouchableOpacity>  
        </View>
       {/* Morning */}
       <View style={{ marginTop:20, padding:10}}>
         <Text style={{fontSize:20, color:"#171E5B", fontFamily:"Poppins-Bold"}}>April 2020</Text>
      </View>
      <View style={{flexDirection: 'row',justifyContent:"space-between", padding:10,gap:10 }}>
        
        <TouchableOpacity style={{ height:50, width:150, flexGrow:1, backgroundColor:"#FFFFFF", alignItems:'center', borderRadius:10, gap:10, padding:10}}>
       
         <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>MON</Text>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{  height:50, width:150, flexGrow:1, backgroundColor:"#FFFFFF",alignItems:'center',borderRadius:10,gap:10, padding:10 }}>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>MON</Text>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height:50, width:150, flexGrow:1, backgroundColor:"#FFFFFF",alignItems:'center',borderRadius:10,gap:10, padding:10 }}>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>MON</Text>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height:50, width:150, flexGrow:1, backgroundColor:"#FFFFFF", alignItems:'center',borderRadius:10,gap:10, padding:10  }}>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>MON</Text>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>21</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={{ height:100, flexGrow:1, backgroundColor:"#FFFFFF", alignItems:'center',borderRadius:10,gap:10, padding:10 }}>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>MON</Text>
        <Text style={{fontSize:20,fontFamily:"Poppins-Bold"}}>21</Text>
        </TouchableOpacity>  
        </View>
      

      </View>
  )
}

export default Appointment
