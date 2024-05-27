import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Animated, PanResponder, } from 'react-native'
import React, { useRef, useState } from 'react'

const Home = () => {




 
  return (

    
        <ImageBackground style={{ flex:1}}  source={require("../assest/images/med1.jpeg")}>
    <View style={{flex:1}}>
         <Image style={{alignSelf:'center',marginTop:20}} source={require("../assest/images/medlogo.png")}/>

        
      
         <View style={{backgroundColor:"#E6E9FF",borderTopLeftRadius:50,borderTopRightRadius:50,height:400,position:'absolute',bottom:0,width:'100%'}}>
          
          <Text style={{alignSelf:'center',marginTop:50, color:"#181E5B"}}>MEDICAL AND GENERAL CARE</Text>
           <View style={{flexDirection:'row', gap:10,alignSelf:'center',marginTop:20}}>
            <Text style={{fontSize:40 ,color:"#181E5B", fontFamily:"Poppins-ExtraLight"}}>Be</Text>
            <Text style={{fontSize:40,color:"#181E5B", fontFamily:"Poppins-MediumItalic"}} >Wealthy</Text>
           </View>
           <View style={{flexDirection:'row', gap:5,alignSelf:'center', marginTop:10}}>
            <Text style={{fontSize:40 ,color:"#181E5B", fontFamily:"Poppins-ExtraLight"}}>By being </Text>
            <Text style={{fontSize:40,color:"#181E5B", fontFamily:"Poppins-MediumItalic"}} >Healthy</Text>
           </View>
            <TouchableOpacity style={{alignItems:'center', marginTop:10, backgroundColor:"#171E5B", height:60, width:"70%", alignSelf:'center', borderRadius:50, justifyContent:"center"}}>
              <Text style={{fontSize:20,color:"white"}}>GET STARTED</Text>
            </TouchableOpacity>
          

         
         </View>
         

   
    </View>
    </ImageBackground>
  )
}

export default Home