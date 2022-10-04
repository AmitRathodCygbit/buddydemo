import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native'
import React from 'react'

const Spacedlayoutthree = () => {
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
                <View style={styles.LoginBelowView}>
                    <Text style={styles.LoginBelowtext} >New user ?</Text>
                    <TouchableOpacity  onPress={() => Alert.alert("SIGN UP HERE")}><Text style={styles.LoginBelowtext}> Sign Up</Text></TouchableOpacity>
                </View>
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
        height: 120,
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
    LoginBelowView:{
        flexDirection:"row",
        color:"white",
        fontSize:18,
        marginTop:5,
        alignSelf:"center",
    },
    LoginBelowtext:{
        color:"white",
        fontSize:18,
    },

})
export default Spacedlayoutthree