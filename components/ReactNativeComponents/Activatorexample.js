import { View, Text, ActivityIndicator, StyleSheet} from 'react-native'
import React from 'react'

const Activatorexample = () => {
  
    return (
        <View style={[styles.contain, styles.horizontal]}>
            <Text>Activatorexample</Text>
            <ActivityIndicator color={"red"} size={"large"} />
            <ActivityIndicator color={"green"} size={"small"} />
            <ActivityIndicator color={"blue"} size={"large"} />
            <ActivityIndicator />
          
        </View>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1, backgroundColor: "#f3e6d8", justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },

});
export default Activatorexample