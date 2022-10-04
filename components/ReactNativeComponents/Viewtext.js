import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
export class Myhome extends Component {
    render() {
        return (
            <View>
                <Text>Simple Text</Text>
                <Text style={styles.inside}>
                    I am Red
                    <Text style={styles.outside}> and im Blue</Text>
                </Text>
            </View>
        )
    }


};
const styles = StyleSheet.create({
    outside: {
        color: "blue"
    },
    inside: {
        color: "red"
    }
})
export default Myhome;
