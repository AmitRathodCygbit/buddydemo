import { View, Text, Modal, TouchableOpacity, StyleSheet ,TextInput} from 'react-native'
import React, { useState } from 'react'

const Modalnewexample = () => {
  const [showdata, setShowdata] = useState(false);
  const [num1,setNum1]=useState(0);
  const [num2,setNum2]=useState(0);
  const abc = () => {
    // alert("Its Working Well")
    console.log("done")
    setShowdata(true)
  }
  const addition =() =>{
    setTotal(num1+num2)
  } 
  const [total,setTotal]=useState(0);

  const renderModal = () =>{
    return(
      <Modal
        visible={showdata}
        transparent={true}
        animationType='slide'
      >
        <View style={styles.centeredView}>

          <View style={styles.modalView}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowdata(!showdata)}
            >
              <Text style={styles.textStyle}>X</Text>
            </TouchableOpacity>

               <Text style={{marginTop:50}}>
                Addition Of Two Number 
               </Text>
            <TextInput style={styles.input} onChangeText={(text) =>{
              setNum1(parseInt(text))
            }} value={num1} placeholder={"Enter Value 1"} />
            <Text style={{fontSize:40}}>+</Text>
            <TextInput style={styles.input} onChangeText={(text)=>{
              setNum2(parseInt(text))
            }} value={num2} placeholder={"Enter Value 2"} />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() =>addition()}
            >
              <Text style={styles.textStyle}>Submit</Text>

            </TouchableOpacity>
             
            <Text style={{fontSize:20,marginTop:20,fontWeight:"bold"}}>Total= {total}</Text>
          </View>
        </View>
      </Modal>
    )
  }

  return (
    <View >
      {renderModal()}
      <TouchableOpacity
        onPress={() => abc()}
        style={{
          padding: 15,
          backgroundColor: '#7FB77E',
          height: 100,
          width: 250,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 300,
          marginLeft: 70
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>open modal</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    justifyContent: 'flex-end',
    // marginTop: 22
  },
  modalView: {
    // margin: 50,
    backgroundColor: "#4FD3C4",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 55,
    color: "black",
    height: 500,
    width: '100%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 50,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",

  },
  input: {
    height: 50,
    margin: 18,
    padding: 15,
    borderWidth: 2,
    fontWeight:"light",
    
},
});
export default Modalnewexample