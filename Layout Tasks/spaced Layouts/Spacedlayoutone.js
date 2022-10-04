import { View,  StyleSheet,TouchableOpacity,Alert,Text } from 'react-native'
import React from 'react'

const Spacedlayoutone = () => {
    
    return (
        <View style={[styles.calContainers]}>
           
            <View style={styles.loginBox} >
            <TouchableOpacity
        style={styles.button}
        onPress={()=>Alert.alert("please Login")}
      >
        <Text style={{fontSize:22,fontWeight:"400",color:"black"}}>Login</Text>
      </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    calContainers: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: '#0c09bd',
        
    },
    loginBox: {
        height: 100,
        backgroundColor: '#8b0000',
        justifyContent:"center",
        
    },
    button: {
        alignItems: "center",
        backgroundColor: "#b7f714",
        borderRadius:20,
        height:60,
        width:350,
        alignSelf:"center",
        justifyContent:"center"
        
      },
})
export default Spacedlayoutone