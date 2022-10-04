import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class Listviews extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'neha',
            surname:'roy'
         },
         {
            id: 1,
            name: 'kiran',
            surname:'nihan'
         },
         {
            id: 2,
            name: 'hiren',
            surname:'richa'
         },
         {
            id: 3,
            name: 'milan',
            surname:'rihana'
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name +"   "+ item.surname)
   }
   render() {
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}   {item.surname}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default Listviews

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#C1D5A4',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})