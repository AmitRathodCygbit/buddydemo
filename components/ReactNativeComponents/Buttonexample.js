import { View, Text, Button,Alert ,StyleSheet} from 'react-native'
import React from 'react'

const Buttonexample = () => {
  return (
    <View>
    
      <Button color={"red"}  style={styles.btncolors} title='Click Me' onPress={() => Alert.alert(' Button pressed example')} accessibilityLabel="The button's accessibility label"  />
      <Text style={styles.btnsize}>Button</Text>
      <Button  title='Cancel' disabled  />
    </View>
  )
}
const styles=StyleSheet.create({
    btnsize:{
        color:"red",
        textAlign:"center",
        fontSize:50,
        opacity:0.050
    },
    btncolors:{
        backgroundColor:"orange",
        fontSize:50,
        width:14,
        height: 200
    }
    
})

export default Buttonexample