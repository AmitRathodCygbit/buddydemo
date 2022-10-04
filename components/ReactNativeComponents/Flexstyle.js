import { View, Text } from 'react-native'
import React from 'react'

const Flexstyle = () => {
    return (
        <View >


            {/* FlowDirection Column Example */}
            <Text>Flef Direction</Text>
            <View style={{
                flexDirection: "column",
                height: 100,
                padding: 15,
            }}>

                <View style={{ backgroundColor: "#B1B2FF", flex: 1 }} />
                <View style={{ backgroundColor: "red", flex: 2 }} />
            </View>
            <View>

              


                {/* FlowDirection row Example */}

                
                <View style={{
                    flexDirection: "row",
                    height: 100,
                    padding: 15,
                }}>

                    <View style={{ backgroundColor: "#8B8000", flex: 1 }} />
                    <View style={{ backgroundColor: "silver", flex: 2 }} />
                </View>

            </View>
        </View>

    )
}

export default Flexstyle