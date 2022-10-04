import { View, Text } from 'react-native'
import React from 'react'

const ScreenFourth = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>

            <View style={{ backgroundColor: 'lightgrey', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: "black", textAlign: "center" }}>50% using Flex</Text>
            </View>

            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#d1ff29', flex: 1, justifyContent: 'center' }}><Text style={{ fontSize: 20, color: "black", textAlign: "center" }} >25% using Flex</Text></View>
                <View style={{ backgroundColor: '#8b0000', flex: 3, justifyContent: 'center' }}><Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>75% using Flex</Text></View>
            </View>

        </View>
    )
}

export default ScreenFourth