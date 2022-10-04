import {StyleSheet, View, Text,StatusBar } from 'react-native'
import React from 'react'

const CustomeStylesheet = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={"#4C0033"} />
      <Text style={styles.container}>hey</Text>
      <Text style={{backgroundColor:"red"}}>hey</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "blue",
      
    },
     });
  
export default CustomeStylesheet

