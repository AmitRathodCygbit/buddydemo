import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Transformex = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "green", justifyContent: "center" }}>

            <View style={[styles.box, {
                transform: [{ rotate: "45deg" }]
            }]}>
           <Text style={styles.text}>50% off</Text>
            </View>

            <View style={[styles.box,{backgroundColor:"white"}, {
        transform: [{ translateX: -50 }]
      }]}><Text style={styles.text}>20 % off</Text></View>


      
            <View style={[styles.box,{backgroundColor:"orange"}, {
                transform: [{ rotate: "20deg" }]
            }]
            }>
                <Text style={styles.text}>90% off</Text>
            </View>

            
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 100,
        borderRadius: 5,
        backgroundColor: "#61dafb",
        alignSelf: "center",
    marginTop:50,
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        margin: 8,
        color: "#000",
        textAlign: "center"
    },

})
export default Transformex