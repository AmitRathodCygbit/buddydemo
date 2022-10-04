import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const TouchableOpacityExample = () => {
    const abc = () => {
        alert("Its Working Well")
        console.log("done")
    }
  return (
    <View>
      <Text>TouchableOpacityExample</Text>
      <TouchableOpacity
                onPress={() => abc()}
                style={{
                    padding: 5,
                    backgroundColor:'#7FB77E',
                    height:100,
                    width:250,
                    justifyContent:"center",
                    alignItems:"center",
                    margin:50,
                    
                    
                }}
            >
                <Text style={{color:"white",fontWeight:"bold",fontSize:25}}>TouchableOpacity</Text>
            </TouchableOpacity>
    </View>
  )
}

export default TouchableOpacityExample