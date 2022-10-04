import React,{useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";


const Textinputexample = () => {
    const [fname, Onchangefname] = useState(null);
    const [lname, Onchangelname] = useState(null);
    const [comment, Onchangecomment] = useState(null);
    const [contact, Onchangecontact] = useState(null);
    

    return (
        <View>
            <Text>text input Example</Text>
            <TextInput style={styles.input} onChangeText={Onchangefname} value={fname} placeholder={"first name"} autoCapitalize="characters"/>
            <TextInput style={styles.input} onChangeText={Onchangelname} value={lname}  placeholder={"last name"} autoCapitalize="words"    />
            <TextInput style={styles.input2} onChangeText={Onchangecomment} value={comment} multiline={true} numberOfLines={10} placeholder={"enter Your Message"}  />
            <TextInput style={styles.input} onChangeText={Onchangecontact} value={contact} placeholder={"Contact Start From +91"}  keyboardType='numeric' maxLength={10} autoFocus={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 18,
        padding: 15,
        borderWidth: 3,
        fontWeight:"light",
        
    },
    input2: {
        height: 50,
        margin: 18,
        padding: 15,
        borderWidth: 3,
        fontWeight:"light",
        padding:10,
        borderBottomColor:"red",
        borderLeftWidth:20,
        borderLeftColor:"#97D2EC",
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        

        
    }
    

})
export default Textinputexample;