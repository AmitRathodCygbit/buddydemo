import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Excited from '../Assets/Images/Excited.png'
import Stress from '../Assets/Images/Stress.png'
import Happy from '../Assets/Images/Happy.png'
import Tired from '../Assets/Images/Tired.png'
import Calm from '../Assets/Images/Calm.png'
import Nervous from '../Assets/Images/Nervous.png'
import Hope from '../Assets/Images/Hope.png'
import Pain from '../Assets/Images/Pain.png'
import Sick from '../Assets/Images/Sick.png'

const window = Dimensions.get("window");
const widthOfMiddleSquare = (window.width - 80) / 3;
const WidthOfSquareContainer = window.width / 3;
const ExtraOne = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <View style={{}}>
                    <MaterialIcons name='arrow-back' style={{ fontSize: 30 }} size={30} color="white" />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={[styles.headerText]}>Daily Checkin</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.headerText, { textAlign: "right" }]}><MaterialIcons name='home' size={30} color="white" /></Text>
                </View>
            </View>
            <View style={{ justifyContent: "center", marginVertical: 15 }}>
                <Text style={styles.extraText}>How are you feeling?</Text>
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.squareOuter}>
                    <View style={styles.squareBtnContainer}>

                        <View style={[styles.squareBtnGrid]}>
                            
                                <Image source={Excited} />
                                <Text style={styles.imgTextStyle}>Excited</Text>
                            
                        </View>
                    </View>
                    <View style={styles.squareBtnContainer}>

                        <View style={[styles.squareBtnGrid,]}>
                            
                                <Image source={Stress} />
                                <Text style={styles.imgTextStyle}>Stressed</Text>
                           
                        </View>
                    </View>
                    <View style={styles.squareBtnContainer}>

                        <View style={[styles.squareBtnGrid]}>
                           
                                <Image source={Happy} />
                                <Text style={styles.imgTextStyle}>Happy</Text>
                
                        </View>
                    </View>
                </View>
                <View style={[styles.squareOuter]}>
                    <View style={styles.squareBtnContainer}>

                        <View style={[styles.squareBtnGrid]}>
                         
                                <Image source={Tired} />
                                <Text style={styles.imgTextStyle}>Tired</Text>
                          
                        </View>
                    </View>
                    <View style={styles.squareBtnContainer}>

                        <View style={[styles.squareBtnGrid]}>
                            
                                <Image source={Calm} />
                                <Text style={styles.imgTextStyle}>Calm</Text>
                            
                        </View>
                    </View>
                    <View style={[styles.squareBtnContainer]}>

                        <View style={[styles.squareBtnGrid]}>
                         
                                <Image source={Nervous} />
                                <Text style={styles.imgTextStyle}>Nervous</Text>
                       
                        </View>
                    </View>
                </View>
                <View style={[styles.squareOuter]}>
                    <View style={[styles.squareBtnContainer]}>

                        <View style={[styles.squareBtnGrid]}>
                          
                                <Image source={Hope} />
                                <Text style={styles.imgTextStyle}>Hopeful</Text>
                            
                        </View>
                    </View>
                    <View style={styles.squareBtnContainer}>

                        <View style={[styles.squareBtnGrid]}>
                         
                                <Image source={Pain} />
                                <Text style={styles.imgTextStyle}>Pain</Text>
                           
                        </View>
                    </View>
                    <View style={[styles.squareBtnContainer]}>

                        <View style={[styles.squareBtnGrid]}>
                
                                <Image source={Sick} />
                                <Text style={styles.imgTextStyle}>Sick</Text>
                         
                        </View>
                    </View>
                </View>

            </View>


            <View style={styles.btnContainer}>

                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.btntext}>Next</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#454545"

    },
    headerContainer: {
        backgroundColor: "black",
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    headerText: {
        color: "white",
        fontSize: 20,
    },
    extraText: {
        color: "white",
        fontSize: 20,
        textAlign: "center"
    },
    middleContainer: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        backgroundColor:"green"
    },
    middletext: {
        color: "white",
        fontSize: 20
    },
    squareBtnContainer: {
        flex: 1,
        width: WidthOfSquareContainer,
        padding: 10,
        backgroundColor:"red"
    },
    squareOuter: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal:10
    },
    squareBtnGrid: {
        width: widthOfMiddleSquare,
        // height: widthOfMiddleSquare + 20,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1b1b1c",

    },

    btnContainer: {
        marginVertical: 20,
        paddingHorizontal: 20,

    },
    imgTextStyle: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
        marginVertical:5

    },
    nextButton: {
        backgroundColor: "black",
        paddingVertical: 15,
        borderRadius: 10
    },
    btntext: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
    }
})

export default ExtraOne