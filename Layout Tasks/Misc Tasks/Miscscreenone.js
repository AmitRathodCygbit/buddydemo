import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const Miscscreenone = () => {
    const styledataone = [
        { name: "evelyndepaz", address: "gandhinagar" },
        { name: "rajab", address: "bharuch" },
        { name: "royraia", address: "ahemdavad" },
        { name: "hirenro", address: "bharuch" },
    ]
    const styledatatwo = [
        { name: "ssss", address: "gandhinagar" },
        { name: "rajasssssa", address: "bharuch" },
        { name: "royss", address: "ahemdavad" },
        { name: "hirenaass", address: "bharuch" },
    ]
    return (
        <View style={[styles.calContainers]}>
            {/* <Text>Miscscreenone</Text> */}
            <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
                <View style={[styles.topViewone]} />
                <View style={[styles.topViewtwo]} />
            </View>

            <View style={{ flex:2}}>

                <View style={[styles.chocoblueLayout]}>

                    <View style={styles.darkchocolateBox}></View>
                    <View style={styles.darkblueBox}></View>
                </View>
                <View style={[styles.chocoblueLayout]}>
                    <View style={styles.darkchocolateBox}></View>
                    <View style={styles.darkblueBox}></View>
                </View>
                <View style={[styles.chocoblueLayout]}>

                    <View style={styles.darkchocolateBox}></View>
                    <View style={styles.darkblueBox}></View>
                </View>
                <View style={[styles.chocoblueLayout]}>
                    <View style={styles.darkchocolateBox}></View>
                    <View style={styles.darkblueBox}></View>
                </View>
                <View style={[styles.chocoblueLayout]}>

                    <View style={styles.darkchocolateBox}></View>
                    <View style={styles.darkblueBox}></View>
                </View>


            </View>



            <View style={{ flex: 1}}>

                <View>
                    <FlatList
                        contentContainerStyle={{ flexDirection: "row", justifyContent: "center" }}
                        data={styledataone}
                        renderItem={
                            (element) => {
                                return <View style={[styles.textdiffrentsize]}>
                                    <Text style={{ color: "#732207", fontSize: 20 }}>{element.item.name}</Text>

                                </View>

                            }
                        }
                    />
                </View>
                <View>
                    <FlatList
                        contentContainerStyle={{ flexDirection: "row", justifyContent: "center" }}
                        data={styledatatwo}
                        renderItem={
                            (element) => {
                                return <View style={[styles.textdiffrentsize]}>
                                    <Text style={{ color: "#732207", fontSize: 20 }}>{element.item.name}</Text>

                                </View>

                            }
                        }
                    />

                </View>





            </View>


           
            <View style={styles.bottomView}>

</View>
        </View>
    )
}
const styles = StyleSheet.create({


    calContainers: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'white',

    },
    topViewone: {
        height: 50,
        width: 350,
        backgroundColor: "#732207",
        alignSelf: "flex-start",
        margin: 5,
    },
    topViewtwo: {
        height: 50,
        width: 200,
        backgroundColor: "#732207",
        alignSelf: "flex-start",
        margin: 5,
    },
    bottomView: {
        margin:15,
        backgroundColor: "#732207",
        borderRadius: 20,
        height: 50,
        

    },
    darkblueBox: {
        width: 50,
        height: 50,
        backgroundColor: "#072e6e",
        margin: 3,
        alignSelf: "center",
        // padding:2

    },
    darkchocolateBox: {
        width: 325,
        height: 50,
        backgroundColor: "#732207",
        alignSelf: "center",


    },
    chocoblueLayout: {
        backgroundColor: "green",
        flexDirection: "row",
        justifyContent: "center",
        paddingLeft: 4,
        margin: 3,
        marginTop:3,
        justifyContent: "space-between"
    },
    textdiffrentsize: {
        backgroundColor: "#732207",
        justifyContent: "space-between",
        margin: 5,
        borderRadius: 20,
        padding: 5
    }
})
export default Miscscreenone