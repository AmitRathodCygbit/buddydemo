import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Layoutcon = () => {
    return (
        <View >
          <View style={[styles.rowContainer]}>
          <Text>Layoutcon</Text>
            <View style={styles.redbox} />
            <View style={styles.bluebox} />
            <View style={styles.blackbox} />
   
          </View>
            <View style={[styles.calContainers]}>
                <Text>Layoutcon</Text>
                <View style={styles.whitebox} />
                <View style={styles.pinkbox} />
                <View style={styles.yellowBox} />


            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 0.5,
        justifyContent: "center"


    },
    calContainers: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginTop:200
    },
    redbox: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        margin: 5
    },
    bluebox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        margin: 5
    },
    blackbox: {
        width: 100,
        height: 100,
        backgroundColor: 'black',
        margin: 5
    },
    yellowBox: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        margin: 5
    },
    pinkbox: {
        width: 100,
        height: 100,
        backgroundColor: 'pink',
        margin: 5
    },
    whitebox: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        margin: 5
    },
})
export default Layoutcon