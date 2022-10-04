import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Alignjustifyseven = () => {
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
        height: 100,
        backgroundColor: 'lightgrey',
    },
    darkredbox: {
        width: 100,
        height: 100,
        backgroundColor: '#8b0000',
        alignSelf: "flex-end"
    },
})
export default Alignjustifyseven