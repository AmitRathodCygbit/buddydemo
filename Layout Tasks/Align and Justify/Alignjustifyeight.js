import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Alignjustifyeight = () => {
    return (
        <View style={[styles.calContainers]}>
           
            <View style={styles.greyBox} /> 
            <View style={styles.darkredbox} />
        </View>
    )
}
const styles = StyleSheet.create({

    calContainers: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: 'white'
    },
    greyBox: {
        width:100,
        height: 100,
        backgroundColor: 'lightgrey',
        alignSelf: "center"
    },
    darkredbox: {
        height: 100,
        // width:100,
        backgroundColor: '#8b0000',
        
    },
})
export default Alignjustifyeight