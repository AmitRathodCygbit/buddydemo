import React from "react";
import {View,Text,Button,Alert} from "react-native";

const Onpressevent = () =>

      <View >
        <Text>On Button Click</Text>
        <Button color="orange" title="onclick" onPress={()=>Alert.alert("please Leave")} />
      </View>


export default Onpressevent;