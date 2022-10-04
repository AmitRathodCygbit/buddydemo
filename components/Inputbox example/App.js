import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Boxstyles from "./InputboxStyles"
const App = () => {
  const[email,setEmail]=useState()
  const[pass,setPass]=useState()
  handleEmail = (email) => {
    setEmail(email)
 }
 handlePassword = (pass) => {
    setPass(pass)
 }
 login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
 }

  return (
    <View style = {styles.container}>
             <TextInput style = {Box.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(email)=>handleEmail(email)}/>
             
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(text)=>handlePassword(text)}
                secureTextEntry
                />
              
             <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                   () =>login(email,pass)
                }>
                <Text style = {styles.submitButtonText}> Submit </Text>
             </TouchableOpacity>
          </View>
  )
}
const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white',
     justifyContent:"flex-end",
     alignItems:"center"
  }
})
export default App