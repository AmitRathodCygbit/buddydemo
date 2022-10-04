import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Extratwo = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.headerStyles}>
                    <AntDesign name='bars' style={{ flex: 1, marginHorizontal: 15 }} size={30} color="white" />
                    <MaterialCommunityIcons name='home' style={{ marginHorizontal: 15 }} size={30} color="white" />
                </View>
            </View>
            <View style={styles.middleContainer}><Text style={styles.containersText}>2</Text></View>
            <View style={styles.footerContainer}>
                <View style={styles.footerStyles}>
                    <View style={{flex:1}}>
                        <SimpleLineIcons name='book-open' style={{ marginHorizontal: 15 }} size={30} color="white" />
                        <Text style={{color:"white",marginHorizontal:15,marginVertical:5}}>Book</Text>
                    </View>
                    <View>
                        <AntDesign name='user' style={{ marginHorizontal: 15 }} size={30} color="white" />
                        <Text style={{color:"white",marginHorizontal:10,marginVertical:5}}>Profile</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "skyblue",
        flex: 1
    },
    headerContainer: {
        backgroundColor: "#292929",
    },
    headerStyles: {
        flexDirection: "row",
        marginVertical: 15,
    },
    footerStyles: {
        flexDirection: "row",
        marginVertical: 10,
    },
    middleContainer: {
        flex: 1,
        backgroundColor: "#454545",
    },
    footerContainer: {
        backgroundColor: "#292929",
    },
    containersText: {
        fontSize: 40,
        color: "white"
    }
})

export default Extratwo