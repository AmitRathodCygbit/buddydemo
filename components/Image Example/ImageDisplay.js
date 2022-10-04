import { View, Text,Image } from 'react-native'
import React from 'react'
import Cygbitlogo from "../Assets/Images/logo.png"
import Logo from "../Assets/Images/logo2.png"
const ImageDisplay = () => {
  return (
    <View style={{flexDirection:"row",justifyContent:"center",backgroundColor:"#F0EABE",flex:1}}>
      <Image  style = {{ width: 70, height: 70 ,marginTop:30,}} source={Cygbitlogo}/>
      <Image  style = {{ width: 200, height: 40 ,marginTop:50}} source={Logo}/>
    </View>
  )
}

export default ImageDisplay