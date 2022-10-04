import { View, Text, StyleSheet,TouchableOpacity,Alert } from 'react-native'
import React from 'react'

const Spacedlayoutfour = () => {
    return (
        <View style={[styles.calContainers]}>
           
            <View style={styles.topMenu} >
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <TouchableOpacity
                    style={[styles.button,{alignItems:"flex-start",marginLeft:5}]}
                    onPress={() => Alert.alert("Are u Sure!...")}
                >
                    <Text style={styles.textStyles}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button,]}
                    onPress={() => Alert.alert("Welcome To Home Page")}
                >
                    <Text style={styles.textStyles}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button,{alignItems:"flex-end",marginRight:5}]}
                    onPress={() => Alert.alert("Welcome To Notification Page")}
                >
                    <Text style={styles.textStyles}>notifs</Text>
                </TouchableOpacity>
                
                </View>
                 </View>


            <View style={styles.buttomMenu} >
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <TouchableOpacity
                    style={[styles.button,{backgroundColor:"#b7f714"}]}
                    onPress={() => Alert.alert("Welcome To Home Page")}
                >
                    <Text style={styles.textStyles}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button,{backgroundColor:"#36eef5"}]}
                    onPress={() => Alert.alert("Welcome To Map Page")}
                >
                    <Text style={styles.textStyles}>Map</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button,{backgroundColor:"#ff05d1"}]}
                    onPress={() => Alert.alert("Welcome To Profile Page")}
                >
                    <Text style={styles.textStyles}>Profile</Text>
                </TouchableOpacity>
                
                </View>
                
            
               
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    calContainers: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: '#0c09bd'
    },
    topMenu: {
        // width:100,
        height: 50,
        backgroundColor: '#b0acaf'

    },
    buttomMenu: {
        height: 50,
        // width:100,
        backgroundColor: '#8b0000',
        
    },
    button: {
        flexGrow:1,
        borderRadius: 1,
        height: 60,
        justifyContent:"center"
        ,alignItems:"center",
        marginRight:1,
        marginLeft:1
          
    },
    textStyles:{
        fontSize: 18,
         fontWeight: "400",
          color: "black" 
          ,
          marginBottom:10,
          
    }
})
export default Spacedlayoutfour