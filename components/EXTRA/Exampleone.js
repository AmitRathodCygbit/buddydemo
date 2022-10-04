import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exampleone = () => {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.blueContainer}>
                <Text style={styles.textStayle}>Height 300 blue container</Text>
            </View>
            <View style={styles.subContainer}>
                <View style={styles.orangeOuterContainer} >
                    <View style={styles.orangeContainer} >
                        <Text style={[styles.textStayle, { color: "black" }]}>OContainer</Text>
                    </View>
                </View>
                <View style={styles.redOuterContainer} >
                    <View style={styles.redContainer} >
                        <Text style={styles.textStayle}>RContainer</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, backgroundColor: "skyblue"
    },
    subContainer: {
        flex: 1,
        backgroundColor: "green",
        flexDirection: "row",
        padding: 20
    },
    blueContainer: {
        backgroundColor: "blue",
        height: 300,
        justifyContent: "center"
    },
    orangeOuterContainer: {
        flex: 1,
        paddingRight: 10,
        // backgroundColor:"white"
    },
    orangeContainer: {
        flex: 1,
        backgroundColor: "orange",
        justifyContent: "center"
    },
    redOuterContainer: {
        flex: 1,
        paddingLeft: 10,
        // backgroundColor:"white"
    },
    redContainer: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",

    },
    textStayle: {
        color: "white",
        fontSize: 18,
        textAlign: "center"
    }

})
export default Exampleone