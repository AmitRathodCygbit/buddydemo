import React from "react"
import { View, Text, Image,StyleSheet,ImageBackground } from "react-native"
// import Rimage from "../components/reactimg.png"



const image={uri:"https://reactjs.org/logo-og.png" }
const ImageExample = () =>
    <View>
        <Text style={{ color: "pink" }}>Image Example</Text>
        {/* <Image style={styles.imgborder} source={Rimage} /> */}
    {/* <Image style={{height:450,width:350}}  source={require('../components/reactimg.png')}
 /> */}
  <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
    </View>

const styles = StyleSheet.create({
    imgborder: {
        borderWidth:10,
          borderRadius:5,
          width:390,
          height:500,
          borderStyle:'dashed',borderColor: '#FF3D00',
    },
    image:{
        height:400,
        width:500
    }
})
export default ImageExample;