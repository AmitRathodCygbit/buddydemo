import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Mapicon from '../Assets/Images/Mapicon.png'
import Mapbg from '../Assets/Images/Mapbg.png'

const Figmaone = () => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                {/* header container start */}
                <View >
                    <ImageBackground  source={Mapbg} resizeMode="cover" >
                        <View style={styles.subContainerOne}>


                            <View style={styles.TopIconContainer}>

                                <View style={styles.chevronBackIconContainer}>
                                    <Ionicons name='chevron-back-circle-sharp' style={styles.chevronBackIcon} />
                                </View>

                                <View style={styles.shareIcon}>
                                    <Text style={styles.shareIconText}>Share</Text>
                                </View>

                                <View>
                                    <MaterialCommunityIcons name='dots-horizontal-circle' style={styles.dotIcon} />
                                </View>


                            </View>
                            <View style={styles.mapConatiner}>
                                <Image source={Mapicon} style={[styles.mapIconStyle]} />
                            </View>
                            <View style={styles.corsairContainer}>

                                <View style={styles.corsairButton}>
                                    <View>
                                        <Image source={Mapicon} style={styles.mapIconStyle} />
                                    </View>
                                    <View style={styles.corsairTextContainer}>
                                        <Text style={styles.corsairText}>Corsair Wreck</Text>
                                        <Text style={styles.oahuUsaText}>Oahu, Hawaii, United States</Text>
                                    </View>
                                    <View style={styles.chevronrightContainer}>
                                        <MaterialCommunityIcons name='chevron-right-circle' style={styles.chevronRightIcon} />
                                    </View>


                                </View>
                                <View>

                                </View>
                            </View>

                        </View>
                        <View style={styles.subContainerTwo}>

                        </View>
                    </ImageBackground>
                </View>
                {/* header container end */}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor: "#00091A"
    },
    mapConatiner: {
        marginVertical: 170,
        alignSelf: "center"
    },
    subContainerOne: {
        // backgroundColor:"red"
    },
    subContainerTwo:{
        backgroundColor:"blue",
        paddingVertical:0
    
    },
    footerContainer: {

    },
    TopIconContainer: {
        flexDirection: "row",
        marginVertical: 15
        // backgroundColor: "red"
    },
    chevronBackIconContainer: {
        flex: 1,
    },
    chevronBackIcon: {
        fontSize: 32,
        marginHorizontal: 15,
        color: "white"
    },
    shareIcon: {
        flexDirection: "row",
        backgroundColor: "white",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
    },
    shareIconText: {
        color: "black",
        fontSize: 13,
        fontWeight: "400"
    },
    dotIcon: {
        marginHorizontal: 15,
        color: "white",
        fontSize: 32
    },
    corsairContainer: {
        marginVertical: 134,
    },
    corsairButton: {
        marginHorizontal: 12,
        marginVertical: 12,
        paddingVertical: 12,
        backgroundColor: "#ffffff1a",
        borderRadius: 16,
        flexDirection: "row"
    },
    mapIconStyle: {
        marginHorizontal: 13,
        marginVertical: 13,
        height: 34,
        width: 30
    },
    corsairTextContainer: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: "center"
    },
    corsairText: {
        color: "white",
        fontSize: 17
    },
    oahuUsaText: {
        color: "white",
        fontSize: 13

    },
    chevronRightIcon: {
        fontSize: 32,
        marginHorizontal: 13,
        background: "#FFFFFF",
        opacity: 0.1,
        color: "white",
    },
    chevronrightContainer: {
        justifyContent: "center"
    }

})
export default Figmaone