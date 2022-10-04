import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native'
import React from 'react'

const Spacedlayouttwo = () => {
    return (
        <View style={[styles.calContainers]}>
            <View style={{ flex: 1, justifyContent: "center" }} >
                <View style={styles.circleBox} >
                    <Text style={styles.circleTextbox}>This is at the center of blue container</Text>
                </View>
            </View>
            <Text style={{color:"white",alignSelf:"center",fontSize:22,margin:5,}}>I accept the terms and conditions</Text>

            <View style={styles.loginBox} >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert("please Login")}
                >
                    <Text style={{ fontSize: 22, fontWeight: "400", color: "black" }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    calContainers: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#0c09bd',

    },
    circleBox: {

        height: 200,
        width: 200,
        borderRadius: 200,
        backgroundColor: 'lightgrey',
        alignSelf: "center",
        justifyContent:"center",
    },
    circleTextbox: {
        
        color:"black",
        textAlign: "center",
        justifyContent:"center",
        flexDirection:"row",
        fontSize:20,
        padding:40,
        fontWeight:"400",
       
    }
    ,
    loginBox: {
        height: 100,
        backgroundColor: '#8b0000',
        justifyContent: "center",

    },
    
    button: {
        alignItems: "center",
        backgroundColor: "#b7f714",
        borderRadius: 20,
        height: 60,
        width: 350,
        alignSelf: "center",
        justifyContent: "center"

    },

})
export default Spacedlayouttwo