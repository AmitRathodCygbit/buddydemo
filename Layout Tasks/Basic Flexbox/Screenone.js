import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Screenone = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, backgroundColor: '#8b0000',justifyContent:'center'}} >
                <Text style={{fontSize:25,color:"white",textAlign:"center"}} >50% using Flex</Text>
            </View>
        </View>
    )
}

export default Screenone