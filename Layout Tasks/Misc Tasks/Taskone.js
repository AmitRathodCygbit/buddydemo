import { View, Text } from 'react-native'
import React from 'react'

const Taskone = () => {
    return (
        // <View style={{flex:1,backgroundColor:"blue"}}>
        //  <View style={{flex:1,backgroundColor:"green"}}></View>
        //  <View style={{backgroundColor:"blue",height:50}}>
        //     {/* <Text style={{color:"white",fontSize:20}}>Blue Box</Text> */}
        //  </View>
        //  <View style={{flex:1,backgroundColor:"red"}}></View>
        // </View>
        // <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
        //     <View style={{ backgroundColor: 'blue', flex: 1 }}>
        //         <Text style={{ fontSize: 25, color: "black", textAlign: "center" }}>
        //             1
        //         </Text>
        //     </View>
        //     <View style={{ backgroundColor: 'orange', flex: 1 }}>

        //         <View style={{ backgroundColor: 'pink', flex: 1, justifyContent: 'center' }}>
        //             <Text style={{ fontSize: 20, color: "black", textAlign: "center" }}>2</Text>
        //         </View>
        //         <View style={{ backgroundColor: 'red',height:200, justifyContent: 'center' }}>
        //             <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>4</Text>
        //         </View>
        //     </View>
        //     <View style={{ backgroundColor: 'green', flex: 1 }}>
        //         <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>
        //             3
        //         </Text>
        //     </View>
        // </View>


        //     <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
        //     <View style={{ backgroundColor: 'orange', flex: 1 }}>
        //         <Text>amvc</Text>
        //         <View style={{ backgroundColor: 'pink',flex:1, justifyContent: 'center' }}>
        //            <View style={{ backgroundColor: 'blue', height:100}} ></View>
        //            <View style={{ backgroundColor: 'yellow',height:100,  }}></View>
        //         </View>

        //     </View>

        //     <View style={{ backgroundColor: 'green', flex: 1 }}>
        //         <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>
        //             3
        //         </Text>
        //     </View>
        // </View>

        <View style={{ flex: 1, backgroundColor: "lightblue", flexDirection: 'row' }}>



            <View style={{ flex: 2, backgroundColor: "orange" }}>


                {/* blue flex */}
                <View style={{ flex: 1, backgroundColor: "blue" }}>
                    <Text style={{ color: "white", fontSize: 25 }}>1</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: "red", flexDirection: "row" }}>

                    <View style={{ flex: 1, backgroundColor: "pink" }}>
                        <Text style={{ color: "black", fontSize: 25 }}>3</Text>
                    </View>

                    <View style={{ flex: 1, backgroundColor: "green" }}>
                        <Text style={{ color: "white", fontSize: 25 }}>4</Text>
                    </View>


                </View>
            </View>

            {/* yellow flex view */}
            <View style={{ flex: 1, backgroundColor: "yellow" }}>
                <Text style={{ color: "blue", fontSize: 25 }}>2</Text>
            </View>
        </View>
    )
}

export default Taskone