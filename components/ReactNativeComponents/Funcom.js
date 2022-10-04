import React from "react";
import {View,Text} from "react-native"

const Funcom=()=>{
    return(
        <View accessible={false} style={{
                         flexDirection:"row",
                         height:300,
                         width:300,
                         padding:5,
                         margin:50,
                         marginBottom:5
                     }}>
                        <View style={{
                            backgroundColor:"red",
                            flex:3,
                        }}>
                            <Text style={{color:"white"}}>My Color Is RED</Text>
                            <Text style={{color:"white"}}>Row flexDirection</Text>
                        </View>

                        <View style={{
                            backgroundColor:"orange",
                            flex:3,
                        }}>
                            <Text style={{color:"white"}}>My Color Is Orange</Text>
                            <Text style={{color:"white"}}>Row flexDirection</Text>

                        </View>
        
            
        </View>
    );
};
export default Funcom;