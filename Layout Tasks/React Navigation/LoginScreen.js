import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
        <Text>Login</Text>
      <View  style={styles.circleProfile} />

      <Text style={styles.textInputstyle}>Email</Text>
      <View  style={styles.inputfiledsone} />

      <Text style={styles.textInputstyle}>Password</Text>
      <View  style={styles.inputfiledstwo} />

      <View style={{flexDirection:"row"}}>
      <View  style={styles.termConditionbox} />
      <Text style={{marginTop:30,color:"black"}}>Agree to Terms & Conditions</Text>
        </View>    
      <View  style={styles.loginButton} >
        <Text style={{color:"black",fontSize:16}}>Login</Text>
        </View>
 
    </View>
  )
}
const styles = StyleSheet.create({
 circleProfile:{
    marginHorizontal:70,
    marginTop:50,
    backgroundColor:"#C4C4C4",
    height:250,
    width:250,
    borderRadius: 250,
    borderColor: "#B8C0CC",
    
 },
 inputfiledsone:{
    height:64,
    borderColor:"#B6B6B6",
    borderWidth:1,
    marginHorizontal:20,
    marginTop:10
    
 },
 inputfiledstwo:{
    height:64,
    borderColor:"#B6B6B6",
    borderWidth:1,
    marginHorizontal:20,
    marginTop:10
    
 },
 textInputstyle:{
    marginHorizontal:20,
    marginTop:20,
    color:"black"
 },
 termConditionbox:{
    marginTop:30,
    height:32,
    width:32,
    // backgroundColor:"red",
    marginHorizontal:20,
  borderColor:"#B6B6B6",
  borderWidth:1
    
 },
 loginButton:{
    height:64,
    borderColor:"#B6B6B6",
    borderWidth:1,
    marginHorizontal:110,
    marginTop:30,
    justifyContent:"center",
    alignItems:"center"
 },
})
export default LoginScreen