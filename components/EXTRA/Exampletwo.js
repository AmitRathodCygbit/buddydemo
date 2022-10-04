import { View, StyleSheet, Text,Alert,Button, Animated } from 'react-native'
import React,{useEffect} from 'react'

const Fade= new Animated.Value(0)
const Exampletwo = () => {
    useEffect(()=>{
        Animated.timing(Fade,{
           toValue:1,
           duration:3000, 
           useNativeDriver: true 
         }).start()
     },[Fade])
    
    return (
        <View style={styles.mainContainer}>

            <View style={styles.subContainerone}>

                <View style={styles.blueOuter} >

                    <View style={styles.blueContainer} >
                       <Button style={styles.textStyle} color='#00008b' title='click me' onPress={()=>Alert.alert("im a blue color")} />
                    </View>
                </View>

                <View style={styles.orangeOuterContainer}>
                    <View style={styles.orangeContainer} >
                    <Button style={styles.textStyle} color='#b8860b' title='click me' onPress={()=>Alert.alert("im a Orange color")} />
                    </View>
                </View>

            </View>

                       <Animated.Text  style= { {marginTop:5,fontSize:25,height:50,width:80,opacity:Fade, }}>
                        HEllo
                       </Animated.Text>
            <View style={styles.subContainertwo}>

                <View style={styles.pinkOuter} >
                    <View style={styles.pinkContainer} >
                    <Button style={styles.textStyle} color='#e9967a' title='click me' onPress={()=>Alert.alert("im a Pink color")} />
                    </View>
                </View>

                <View style={styles.greyOuterContainer}>
                    <View style={styles.greyContainer} >
                    <Button style={styles.textStyle} color='#696969' title='click me' onPress={()=>Alert.alert("im a grey color")} />
                    </View>
                </View>

            </View>

        </View>


    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",

    },
    subContainerone: {
        flex: 1,
        flexDirection: "row",
        padding: 20,
        backgroundColor: "red"
    }
    ,
    subContainertwo: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "green",
        padding: 20
    }
    ,

    blueOuter: {
        flex: 1,
        paddingRight: 10,
    },
    blueContainer: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
    },
    orangeOuterContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    orangeContainer: {
        flex: 1,
        backgroundColor: "orange",
        justifyContent: "center",

    },
    pinkOuter: {
        flex: 1,
        paddingRight: 10,

    },
    pinkContainer: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
    },
    greyOuterContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    greyContainer: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",

    },
    textStyle: {
        color: "white",
        fontSize: 18,
        textAlign: "center"
    }

})
export default Exampletwo