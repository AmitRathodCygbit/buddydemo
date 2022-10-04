import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'


const window = Dimensions.get("window");

const BackupCalculator = () => {
    
    const [preValue, setPrevalue] = useState(0);
    const [nextValue, setNextvalue] = useState('');
    const [operations, setOperations] = useState('');
    

console.log(operations,"op")
    useEffect(() => { }, [operations, nextValue, preValue]);

    const handleOperationPress = (buttonvalue) => {
        setOperations(buttonvalue)
        setNextvalue(preValue)
         setPrevalue("+00")
         
      };

    const CalculatorOperations = {
        "/": (firstValue, secondValue) => firstValue / secondValue,
        "*": (firstValue, secondValue) => firstValue * secondValue,
        "+": (firstValue, secondValue) => firstValue + secondValue,
        "-": (firstValue, secondValue) => firstValue - secondValue,
        "=": (firstValue, secondValue) => secondValue,
    };
  console.log(CalculatorOperations,"cal opreation")
    const performOperation = () => {
        let temp = CalculatorOperations[operations](
            parseFloat(preValue),
            parseFloat(nextValue)
        );
        setOperations(null);
        setNextvalue(String(temp));
        setPrevalue(null);
    };

    const handleNum = (number) => {
        setNextvalue(nextValue === "0" ? String(number) : nextValue + number);
    };

    const insertDot = () => {
        if (!/\./.test(nextValue)) {
            setNextvalue(nextValue + ".");
        }
    };
    const percentage = () => {
        setNextvalue(parseFloat(nextValue) / 100);
        if (preValue && nextValue === "") {
            setPrevalue(parseFloat(preValue) / 100);
        }
    };
    const changeSign = () => {
        setNextvalue(parseFloat(nextValue) * -1);
    };
    const clearData = () => {
        setNextvalue("0");
        setPrevalue(0);
    };
      
    const handleOperation = (value) => {
        console.log('[VAL] ===> ', value)
        if (Number.isInteger(value)) {
            handleNum(parseInt(value, 10));
        } else if (value in CalculatorOperations) {
            if (operations === null) {
                
                setOperations(value);
                console.log('[VAL 2] ===> ',setOperations)
                setPrevalue(nextValue);
                setNextvalue("");
            }
            if (operations) {
                setOperations(value);
            }
            if (preValue && operations && nextValue) {
                console.log(performOperation,"hello")
                performOperation();
            }
        } else if (value === "C") {
            clearData();
        } else if (value === "\xB1") {
            
            changeSign();
            console.log(changeSign,"sign")
        } else if (value === ".") {
            insertDot();
        } else if (value === "%") {
            percentage();
        }
    };
 
    const Button = (props) => {
        // const text = props.text;
        // const action = props.action;
        const { text, action, extraStyle, extratextstyle, extraContainerStyle } = props;
        return (
            <View style={[styles.circleButtonViewContainer, extraContainerStyle]}>
                <TouchableOpacity onPress={() => action(text)} style={[styles.circleButtonView, extraStyle]}>
                    <Text style={[styles.btnTextBlack, extratextstyle]}>{text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>


            <View style={[styles.resultView]}>

                {/* Result of values here*/}

                <Text style={{ color: "white", fontSize: 35, alignItems: "center" ,padding:30}}>{nextValue}</Text>

          
            </View>


            <View style={{ flex: 1, marginTop: 5, }}>

                <View style={styles.buttonTopview} >
                    <Button text={'C'}   action={clearData} extraStyle={{ backgroundColor: '#A5A5A5' }} />
                    <Button text={'+/-'} action={handleOperation} extraStyle={{ backgroundColor: '#A5A5A5' }} />
                    <Button text={'%'} action={percentage} extraStyle={{ backgroundColor: '#A5A5A5' }} />
                    <Button text={'/'} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#EF9A37' }} />
                </View>

                {/* two */}

                <View style={styles.buttonTopview} >
                    <Button text={7} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#454545' }} />
                    <Button text={8} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#454545' }} />
                    <Button text={9} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#454545' }} />
                    <Button text={'*'} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#EF9A37' }} />
                </View>
                {/* three */}
                <View style={styles.buttonTopview} >
                    <Button text={4} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#454545' }} />
                    <Button text={5} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#454545' }} />
                    <Button text={6} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#454545' }} />
                    <Button text={'-'} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#EF9A37' }} />
                </View>
                {/* four */}
                <View style={styles.buttonTopview} >
                    <Button text={1} action={handleNum} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#454545' }} />
                    <Button text={2} action={handleNum} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#454545' }} />
                    <Button text={3} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#454545' }} />
                    <Button text={'+'} action={handleOperationPress} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#EF9A37' }} />
                </View>


                {/* five */}
                <View style={styles.buttonTopview} >
                    <Button text={0} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#454545' }} extraContainerStyle={styles.circleButtonViewContainerDouble} />
                    <Button text={'.'} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#454545' }} />
                    <Button text={'='} action={handleOperation} extratextstyle={{ color: "white" }} extraStyle={{ backgroundColor: '#EF9A37' }} />
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    resultView: {
        // backgroundColor: "yellow",
        flexDirection: "row",
        borderColor: "#3A3A3A",
        borderWidth: 4,
        height: 200,
        borderRadius: 30,
        justifyContent: "center"
    },
    buttonTopview: {
        flexDirection: "row",
        // backgroundColor: "green",
    },
    circleButtonViewContainerDouble: {
        width: window.width / 2,
        height: window.width / 4,
        padding: 5,
        // backgroundColor: 'pink'
    },
    circleButtonViewContainer: {
        width: window.width / 4,
        height: window.width / 4,
        padding: 5,
        // backgroundColor: 'red'
    },
    circleButtonView: {
        flex: 1,
        borderRadius: window.width / 8,
        justifyContent: "center"
    },
    btnTextBlack: {
        color: "black",
        fontSize: 30,
        textAlign: "center"
    },
})

export default BackupCalculator