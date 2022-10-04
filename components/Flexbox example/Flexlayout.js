import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const Flexlayout = () => {
  return (
    <View style={[styles.container]}>
      <Text >container 1</Text>

      <View style={[styles.calContainer]}>
         <Text>conainer 2</Text>
         <View style={[styles.thirdContainer]}>
         <Text>conainer 3</Text>
      </View>
      </View>
      
    </View>

  )
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FFD8A9',
        padding:5
    },
    calContainer: {
        backgroundColor: '#F1A661',
        flex: 1,
        marginTop: 30,
      
        
    },
    thirdContainer:{
        backgroundColor: 'red',
        flex: 1,
        marginTop: 50,
    }
    
 })

export default Flexlayout