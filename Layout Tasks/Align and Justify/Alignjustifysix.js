import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const Alignjustifysix = () => {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
        
    <View style={[styles.calContainers]}>
        <View style={styles.greyBox} />
        <View style={styles.darkredbox} />


    </View>
</View>

  )
}
const styles = StyleSheet.create({
    
    calContainers: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
    },
    greyBox: {
        width: 100,
        height: 100,
        backgroundColor: 'lightgrey',
        
    },
    darkredbox: {
        width: 100,
        height: 100,
        backgroundColor: '#8b0000',
        
    },
})
export default Alignjustifysix