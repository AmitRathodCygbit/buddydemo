import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const Flatlistexample = () => {
    const schooldata = [
        { name: "evelyn", address: "gandhinagar" },
        { name: "raj", address: "bharuch" },
        { name: "roy", address: "ahemdavad" },
        { name: "hiren", address: "bharuch" },

        { name: "amit", address: "delhi" },
        { name: "nishit", address: "surat" },
    ]
    return (
        <View>
            <FlatList 
                data={schooldata}
                renderItem={
                    (element) => {
                        return <View>
                            <Text style={styles.datastyles}>{element.item.name}   {element.item.address}</Text>
                
                        </View>

                    }
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    datastyles: {
        flex:1,
        justifyContent: "space-between",
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        width: 180,
        height: 25,
        marginTop:20,
        marginLeft:100,
        padding:5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        
        
    },
    
})
export default Flatlistexample