import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Calculator = () => {
    const [numbers, setNumbers] = useState('');
    const [total, setTotal] = useState('');

    console.log('[WINDOW] ===>', window)

    const calculate = () => {
        let result = eval(numbers);
        setTotal(result);
    }

    const clearData = () => {
        setTotal('')
        setNumbers('')
    }

    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>


            <View style={[styles.resultView]}>
                {/* answer of values here*/}
                
                <Text style={{ color: "white", fontSize: 35, alignItems: "center" }}>{numbers}</Text>

                <View style={{marginTop:5,backgroundColor:"red",justifyContent:"center",}}>
                    <Text style={{ color: "white", fontSize: 35, alignItems: "center", marginTop: 50,flexDirection:"row" }}>{total}</Text>
                </View>
            </View>


            <View style={{ flex: 1, borderWidth: 4, padding: 10, marginHorizontal: 2, marginTop: 5, }}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:15}} >

                    <TouchableOpacity onPress={() => clearData()} style={[styles.circleButtonView,{backgroundColor:"#A5A5A5"}]}>
                        <Text style={[styles.btnTextBlack]}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '+/-')} style={[styles.circleButtonView,{backgroundColor:"#A5A5A5"}]}>
                        <Text style={[styles.btnTextBlack]}>+/-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '%')} style={[styles.circleButtonView,{backgroundColor:"#A5A5A5"}]}>
                        <Text style={[styles.btnTextBlack]}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '/')} style={[styles.circleButtonView,{backgroundColor:"#EF9A37"}]}>
                        <Text style={[styles.btnTextsStyle]}>÷</Text>
                    </TouchableOpacity>
                </View>
                {/* two */}
                <View style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:15 }} >
                    <TouchableOpacity onPress={() => setNumbers(numbers + '7')} style={[styles.circleButtonView,{backgroundColor:"#454545"}]}>
                        <Text style={[styles.btnTextsStyle]}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '8')} style={[styles.circleButtonView,{backgroundColor:"#454545"}]}>
                        <Text style={[styles.btnTextsStyle]}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '9')} style={[styles.circleButtonView,{backgroundColor:"#454545"}]}>
                        <Text style={[styles.btnTextsStyle]}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '*')} style={[styles.circleButtonView,{backgroundColor:"#EF9A37"}]}>
                        <Text style={[styles.btnTextsStyle]}>X</Text>
                    </TouchableOpacity>
                </View>
                {/* three */}
                <View style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:15}} >
                    <TouchableOpacity onPress={() => setNumbers(numbers + '4')} style={[styles.circleButtonView,{backgroundColor:"#454545"}]}>
                        <Text style={[styles.btnTextsStyle]}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '5')} style={[styles.circleButtonView,{backgroundColor:"#454545"}]}>
                        <Text style={[styles.btnTextsStyle]}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '6')} style={[styles.circleButtonView,{backgroundColor:"#454545"}]}>
                        <Text style={[styles.btnTextsStyle]}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '-')} style={[styles.circleButtonView,{backgroundColor:"#EF9A37"}]}>
                        <Text style={[styles.btnTextsStyle]}>-</Text>
                    </TouchableOpacity>
                </View>
                {/* four */}
                <View style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:15}} >

                    <TouchableOpacity onPress={() => setNumbers(numbers + '1')} style={[styles.circleButtonView,{backgroundColor:"#454545"}]}>
                        <Text style={[styles.btnTextsStyle]}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '2')} style={[styles.circleButtonView,{backgroundColor:"#454545"}]}>
                        <Text style={[styles.btnTextsStyle]}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '3')} style={[styles.circleButtonView,{backgroundColor:"#454545"}]}>
                        <Text style={[styles.btnTextsStyle]}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setNumbers(numbers + '+')} style={[styles.circleButtonView,{backgroundColor:"#EF9A37"}]}>
                        <Text style={[styles.btnTextsStyle]}>+</Text>
                    </TouchableOpacity>
                </View>
                {/* five */}
                <View style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:15 }} >
                    <TouchableOpacity onPress={() => setNumbers(numbers + '0')} style={[styles.bigCircleButtonView,{backgroundColor:"#454545",paddingLeft:25}]}>
                        <Text style={[styles.numberBigText]}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setNumbers(numbers + '.')} style={[styles.circleButtonView,{backgroundColor:"#454545",marginRight:5}]}>
                        <Text style={[styles.btnTextsStyle]}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => calculate()} style={[styles.circleButtonView,{backgroundColor:"#EF9A37"}]}>
                        <Text style={[styles.btnTextsStyle]}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    resultView: {
        flexDirection: "row",
        borderColor: "#3A3A3A",
        borderWidth: 4,
        height: 200,
        borderRadius: 30,
        justifyContent: "center"
    },
    circleButtonView:{
        borderRadius: 70,
        width: window.width/5,
        height: window.height/10,
        justifyContent: "center"
    },
    bigCircleButtonView: {
        borderRadius: 50,
        width: window.width/2.3,
        height:window.height/10,
        // marginRight:15,
        justifyContent: "center",
    },
    numberBigText: {
        color: "white",
        fontSize: 30,
        marginHorizontal: 25
    
    },
    btnTextsStyle: {
        color: "white",
        fontSize: 30,
        textAlign: "center"
    },
    btnTextBlack: {
        color: "black",
        fontSize: 30,
        textAlign: "center"
    },
})

export default Calculator