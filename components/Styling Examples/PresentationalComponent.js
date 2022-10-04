import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
   return (
      <View>
         <Text style = {styles.myState}>
            {props.myState}
            
         </Text>
         <Text style = {styles.myData}>
         {props.mydata}
         </Text>
         <Text style = {styles.myData1}>
         {props.mydata}
         </Text>
         <Text style = {styles.myData2}>
         {props.mydata}
         </Text>
      </View>
   )
}
export default PresentationalComponent

const styles = StyleSheet.create ({
   myState: {
      marginTop: 20,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 20
   },
   myData: {
    marginTop: 20,
    textAlign: 'justify',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
 },
 myData1: {
    marginTop: 20,
    textAlign: 'right',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
 },
 myData2: {
    marginTop: 20,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
 }
})