import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export class Buttoncolor extends Component {
  render() {
    return (
        <LinearGradient colors={[ '#21D4FD','#B721FF']} style={{flex:1,backgroundColor:"#21D4FD"}}>
         
         <LinearGradient colors={[ '#FBDA61','#FF5ACD']} 
         style={[styles.buttonGradient]}
         >
         <Text style={{fontSize:20}}>
            Login
         </Text>
      </LinearGradient>

      </LinearGradient>
    )
  }
}
const styles = StyleSheet.create({
    buttonGradient:{
        padding:20,
         borderRadius:10,
         marginHorizontal:10,
         marginVertical:10,
         alignItems:"center",
          
         },
       }
       
)
export default Buttoncolor
