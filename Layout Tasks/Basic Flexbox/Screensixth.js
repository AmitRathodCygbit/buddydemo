import { View, Text } from 'react-native'
import React from 'react'

const Screensixth = () => {
    return (
        <View style={{ flex: 1 , backgroundColor:'red'}}>

            {/* <View style={{ flex: 1 , backgroundColor:'pink'}} > */}
                <View style={{ backgroundColor: 'lightgrey', flex: 1, }}><Text style={{ fontSize: 20, color: "black", textAlign: "center" }} >25% using Flex</Text></View>
            {/* </View> */}

            <View style={{ flex: 3, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#d1ff29', flex: 1,  }}><Text style={{ fontSize: 20, color: "black", textAlign: "center" }}>75% using Flex</Text></View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#8b0000', flex: 1,  }}><Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>75% using Flex</Text></View>
                </View>
            </View>

            {/* <View>

            </View> */}
        </View>
    )
}

export default Screensixth