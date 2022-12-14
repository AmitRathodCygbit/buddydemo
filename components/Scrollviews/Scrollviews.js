import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { styles, scrollStyle} from "./ScrollStyle"
const Scrollviews = () => {
    const names= [
            {'name': 'Ben', 'id': 1},
            {'name': 'Susan', 'id': 2},
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
            {'name': 'John', 'id': 7},
            {'name': 'Debra', 'id': 8},
            {'name': 'Aron', 'id': 9},
            {'name': 'Ann', 'id': 10},
            {'name': 'Steve', 'id': 11},
            {'name': 'Olivia', 'id': 12}
         ]
    
  return (
    <View>
      
      <ScrollView>
               {
                  names.map((item, index) => (
                     <View key = {item.id} style = {scrollStyle.item}>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>
    </View>
  )
}

export default Scrollviews