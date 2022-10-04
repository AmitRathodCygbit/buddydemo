import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'


const window = Dimensions.get("window");

const Checkupcal = () => {
    
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<Number | null >(null);
  
    const handleNumberPress = (buttonValue) => {
      if (firstNumber.length < 10) {
        setFirstNumber(firstNumber + buttonValue);
      }
    };
  
    const handleOperationPress = (buttonValue) => {
      setOperation(buttonValue);
      setSecondNumber(firstNumber);
      setFirstNumber("");
    };
  
    const clear = () => {
      setFirstNumber("");
      setSecondNumber("");
      setOperation("");
      setResult(null);
    };
  
    const firstNumberDisplay = () => {
      if (result !== null) {
          return <Text>{result?.toString()}</Text>; 
      }
      if (firstNumber && firstNumber.length < 6) {
        return <Text>{firstNumber}</Text>;
      }
      if (firstNumber === "") {
        return <Text >{"0"}</Text>;
      }
      if (firstNumber.length > 5 && firstNumber.length < 8) {
        return (
          <Text >
            {firstNumber}
          </Text>
        );
      }
      if (firstNumber.length > 7) {
        return (
          <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
            {firstNumber}
          </Text>
        );
      }
    };
  
    const getResult = () => {
        switch (operation) {
          case "+":
              clear();
              setResult(parseInt(secondNumber) + parseInt(firstNumber));
              break;
          case "-":
              clear();
              setResult(parseInt(secondNumber) - parseInt(firstNumber));
              break;
          case "*":
              clear();
              setResult(parseInt(secondNumber) * parseInt(firstNumber));
              break;
          case "/":
              clear();
              setResult(parseInt(secondNumber) / parseInt(firstNumber));
              break;
          default:
              clear();
              setResult(0);
              break;
          }
      };
  
    
      return (
        <View style={Styles.viewBottom}>
          <View
            style={{
              height: 120,
              width: "90%",
              justifyContent: "flex-end",
              alignSelf: "center",
            }}
          >
            <Text style={Styles.screenSecondNumber}>
              {secondNumber}
              <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
            </Text>
            {firstNumberDisplay()}
          </View>
          <View style={Styles.row}>
            <Button title="C" isGray onPress={clear} />
            <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
            <Button title="％" isGray onPress={() => handleOperationPress("％")} />
            <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
          </View>
          <View style={Styles.row}>
            <Button title="7" onPress={() => handleNumberPress("7")} />
            <Button title="8" onPress={() => handleNumberPress("8")} />
            <Button title="9" onPress={() => handleNumberPress("9")} />
            <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
          </View>
          <View style={Styles.row}>
            <Button title="4" onPress={() => handleNumberPress("4")} />
            <Button title="5" onPress={() => handleNumberPress("5")} />
            <Button title="6" onPress={() => handleNumberPress("6")} />
            <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
          </View>
          <View style={Styles.row}>
            <Button title="1" onPress={() => handleNumberPress("1")} />
            <Button title="2" onPress={() => handleNumberPress("2")} />
            <Button title="3" onPress={() => handleNumberPress("3")} />
            <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
          </View>
          <View style={Styles.row}>
            <Button title="." onPress={() => handleNumberPress(".")} />
            <Button title="0" onPress={() => handleNumberPress("0")} />
            <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
            <Button title="=" isBlue onPress={() => getResult()} />
          </View>
        </View>
      );
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
        justifyContent: "space-between",
        marginVertical: 15
    }
    ,
    bigCircleButtonView: {
        borderRadius: 50,
        width: window.width / 2.3,
        height: window.height / 10,
        justifyContent: "center",
    },
    circleButtonView: {
        backgroundColor: "red",
        borderRadius: 70,
        width: window.width / 5,
        height: window.height / 10,
        justifyContent: "center"
    },
    btnTextBlack: {
        color: "black",
        fontSize: 30,
        textAlign: "center"
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: "red",
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color:"red",
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})

export default Checkupcal