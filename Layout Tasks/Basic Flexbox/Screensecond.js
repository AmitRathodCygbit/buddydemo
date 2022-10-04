import { View, Text } from 'react-native'
import React from 'react'

const Screensecond = () => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center' }} >
                <Text style={{ fontSize: 25, color: "black", textAlign: "center" }} >25% using Flex</Text>
            </View>

            <View style={{ flex: 3, backgroundColor: '#8b0000', justifyContent: 'center' }} >
                <Text style={{ fontSize: 25, color: "white", textAlign: "center" }} >75% using Flex</Text>
            </View>

        </View>
    )
}

export default Screensecond