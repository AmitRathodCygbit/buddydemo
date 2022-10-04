import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Miscscreentwo = () => {
    return (
        <View style={[styles.calContainers]}>


            {/* <View style={[styles.chocoblueLayout]}>
                <View style={styles.darkchocolateBox}></View>
                <View style={styles.greenBox}></View>

            </View> */}


            {
                Array(7).fill('').map((item, index) => {
                    console.log(index);
                    return (
                        <View style={[
                            styles.chocoblueLayout,
                            index % 2 == 0 ? { flexDirection: "row-reverse" } : { flexDirection: "row" }
                            // { flexDirection: "row-reverse" }
                        ]}>
                            <View style={styles.greenBox}></View>
                            <View style={[styles.darkchocolateBox]}></View>
                            
                        </View>
                    )
                })
            }


        </View>
    )
}
const styles = StyleSheet.create({

    calContainers: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column"

    },
    darkchocolateBox: {
        // width: 330
        flex: 1,
        height: 80,
        backgroundColor: "#732207",
        marginRight: 5

    },
    greenBox: {
        width: 100,
        height: 80,
        backgroundColor: "green",

    },
    chocoblueLayout: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 5

    },
})

export default Miscscreentwo