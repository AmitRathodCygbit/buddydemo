import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'


const Calculatorexample = () => {
const [numbers,setNumbers]=useState(null);

    return (
        <View style={[styles.container]}>
            <Text style={[styles.title]}>Calculator</Text>
            <View style={[styles.calContainer]}>
                <View style={styles.textContainer}><Text>Text container</Text>
                 <Text style={[styles.textColors,styles.textstyles]}>{numbers}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity style={[styles.topboxStyle1]}><Text style={styles.textstyles}>AC</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.topboxStyle1]}><Text style={styles.textstyles}>%</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.topboxStyle2]}><Text style={styles.textstyles}>X</Text></TouchableOpacity>


                </View>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={()=>setNumbers(7)}  style={[styles.boxStyle1]}><Text style={[styles.textstyles]}  >7</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setNumbers(8)} style={[styles.boxStyle1]}><Text style={styles.textstyles}>8</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setNumbers(9)} style={[styles.boxStyle1]}><Text style={styles.textstyles}>9</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setNumbers('÷')} style={[styles.boxStyle1]}><Text style={styles.textstyles}>÷</Text></TouchableOpacity>


                </View>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity style={[styles.boxStyle1]}><Text style={styles.textstyles}>4</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.boxStyle1]}><Text style={styles.textstyles}>5</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.boxStyle1]}><Text style={styles.textstyles}>6</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.boxStyle1]}><Text style={styles.textstyles}>-</Text></TouchableOpacity>


                </View>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity style={[styles.boxStyle1]}><Text style={styles.textstyles}>1</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.boxStyle1]}><Text style={styles.textstyles}>2</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.boxStyle1]}><Text style={styles.textstyles}>3</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.boxStyle1]}><Text style={styles.textstyles}>+</Text></TouchableOpacity>


                </View>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity style={[styles.bottomBoxstyle1]}><Text style={styles.textstyles}>0</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.bottomBoxstyle2]}><Text style={styles.textstyles}>.</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.bottomBoxstyle3]}><Text style={styles.textstyles}>=</Text></TouchableOpacity>



                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A1C298',
        flex: 1,
        padding: 30
    },
    title: {
        fontSize: 32,
        fontWeight: '700'
    },
    calContainer: {
        backgroundColor: '#C6EBC5',
        flex: 1,
        marginTop: 30,
        borderRadius: 20
    },
    textContainer: {
        padding: 50,
        flex: 1,
        marginTop: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 11,
        marginBottom: 12,
        marginLeft: 15,
        marginRight: 15,
        elevation: 10,
        shadowColor: '#A1C298',
        shadowOffset: { width: 150, height: 40 },
        shadowOpacity: 0.10,
        shadowRadius: 15,
    },
    boxStyle1: {
        height: 90,
        width: 80,
        backgroundColor: '#FBF2CF',
        marginRight: 1,
        marginLeft: 2,
        marginTop: 0,
        marginBottom: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomBoxstyle1: {
        height: 90,
        width: 80,
        backgroundColor: '#FBF2CF',
        marginRight: 0.5,
        marginLeft: 2,
        marginTop: 1,
        borderBottomLeftRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomBoxstyle2: {
        height: 90,
        width: 80,
        backgroundColor: '#FBF2CF',
        marginRight: 0.5,
        marginLeft: 2,
        marginTop: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    bottomBoxstyle3: {
        height: 90,
        width: 160,
        backgroundColor: '#FBF2CF',
        marginRight: 0.5,
        marginLeft: 2,
        marginTop: 1,
        borderBottomRightRadius: 20,
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center"
    },

    topboxStyle1: {
        height: 90,
        width: 80,
        backgroundColor: '#FBF2CF',
        marginRight: 1,
        marginLeft: 2,
        marginTop: 0,
        marginBottom: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    topboxStyle2: {
        height: 90,
        width: 160,
        backgroundColor: '#FBF2CF',
        marginRight: 1,
        marginLeft: 2,
        marginTop: 0,
        marginBottom: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    textstyles: {
        fontSize: 35,
    },
    textColors:{
        color:"#FA7070"
    }

});

export default Calculatorexample