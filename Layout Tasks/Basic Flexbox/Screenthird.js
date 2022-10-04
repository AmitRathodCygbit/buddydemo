import { View, Text } from 'react-native'
import React from 'react'

const Screenthird = () => {
    return (


        <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'lightgrey', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, color: "black", textAlign: "center" }}>
                    50% using Flex
                </Text>
            </View>
            <View style={{ backgroundColor: '#8b0000', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>
                    50% using Flex
                </Text>
            </View>
        </View>
    )
}

export default Screenthird