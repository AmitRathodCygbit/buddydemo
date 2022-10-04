import { View, Text } from 'react-native'
import React from 'react'

const Conditionalrender = () => {
  let show = false;
  return (
    <View>
      <Text>Modalnewexample</Text>
      {
        show ?
          <>
            <Text>Show is true</Text>
            <Text>Show is true</Text>
          </>

          :
          <Text style={{color:"red"}}>Show is false *</Text>
      }
    </View>
  )
}

export default Conditionalrender