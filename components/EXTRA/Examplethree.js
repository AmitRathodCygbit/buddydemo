import { View, StyleSheet, Dimensions,StatusBar } from 'react-native'
import React from 'react'


const window = Dimensions.get("window");
const widthOfBottomCircle = (window.width - 120) / 3;
const widthOfTopCircle = (window.width - 80) / 2;
const WidthOfCircleContainerOne=window.width / 2;
const WidthOfCircleContainerTwo=window.width / 3;
const Examplethree = () => {
    return (
        
        <View style={styles.mainController}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <View style={styles.subContainerOne}>
                <View style={{ backgroundColor: "red" }}>
                    <View style={styles.CircleContainerOne}>

                        <View style={[styles.CircleViewOne, { backgroundColor: "green", }]}>
                        </View>
                    </View>
                </View>


                <View style={{ backgroundColor: "blue" }}>
                    <View style={[styles.CircleContainerOne]}>
                        <View style={[styles.CircleViewOne, { backgroundColor: "yellow", }]}>

                        </View>

                    </View>
                </View>


            </View>



            <View style={styles.subContainerTwo}>
                <View style={{ backgroundColor: "blue", justifyContent: "center" }}>
                    <View style={styles.CircleContainerTwo}>

                        <View style={[styles.CircleViewTwo, { backgroundColor: "white", }]}>
                        </View>
                    </View>
                    
                </View>


                <View style={{ backgroundColor: "orange", justifyContent: "center", }}>
                    <View style={[styles.CircleContainerTwo]}>
                        <View style={[styles.CircleViewTwo, { backgroundColor: "blue" }]}>

                        </View>

                    </View>
                </View>
                <View style={{ backgroundColor: "pink", justifyContent: "center" }}>
                    <View style={[styles.CircleContainerTwo]}>
                        <View style={[styles.CircleViewTwo, { backgroundColor: "red", }]}>

                        </View>

                    </View>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainController: {
        flex: 1,
    },
    subContainerOne: {
        flex: 1,
        backgroundColor: "pink",
        flexDirection: "row",
    },
    subContainerTwo: {
        flex: 1,
        backgroundColor: "orange",
        flexDirection: "row",

    },
    CircleContainerOne: {
        flex: 1,
        width:WidthOfCircleContainerOne,
        padding: 20,
        justifyContent: 'center',

    },
    CircleViewOne: {
        width:widthOfTopCircle,
        height:widthOfTopCircle,
        borderRadius:widthOfTopCircle / 2,
    },
    CircleContainerTwo: {
        flex: 1,
        width:WidthOfCircleContainerTwo,
        justifyContent: 'center',
        padding: 20,

    },
    CircleViewTwo: {
        width: widthOfBottomCircle,
        height: widthOfBottomCircle,
        borderRadius: widthOfBottomCircle / 2,
    },
})
export default Examplethree

