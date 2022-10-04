import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Divider } from 'react-native-paper';
const Miscscreenfour = () => {


  return (
    <View style={styles.mainContainers}>



      <View style={{ flex: 1 }}>


        {/* view 1       depth time FRC */}
        <View style={[styles.firstContainer]}>
          {/* box 1 */}

          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>Depth</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity


                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.timetexts]}>10m</Text>
              </TouchableOpacity>
            </View>



          </View>
          {/* box 2 */}

          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>Time</Text>
            </View>
            <View>
              <Text style={[styles.timeformatText]}>{"(mm:ss)"}</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity
                style={styles.addbutton}

                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.addTexts]}>Add</Text>
              </TouchableOpacity>
            </View>

          </View>
          {/* box 3 */}
          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>FRC</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <View style={styles.iconboxs}>

              </View>

            </View>



          </View>




        </View>


        {/* view 2 depth alarms 1 2 3 4 5 6 and buttons */}

        <View style={[styles.secondContainer]}>
          {/* box 1 */}
          <View style={{}}>
          <Text style={{ color: "black", fontSize: 13, marginLeft: 5, marginVertical: 15 }}>Depth alarms</Text>
          </View>
          
          <View style={[styles.dividerborder]}>
        

            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>1</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity


                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.timetexts]}>10m</Text>
              </TouchableOpacity>
            </View>



          </View>
          {/* box 2 */}

          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>2</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity
                style={styles.addbutton}

                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.addTexts]}>Add</Text>
              </TouchableOpacity>
            </View>



          </View>
          {/* box 3 */}
          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>3</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity
                style={styles.addbutton}

                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.addTexts]}>Add</Text>
              </TouchableOpacity>
            </View>



          </View>
          {/* box 4 */}
          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>4</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity
                style={styles.addbutton}

                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.addTexts]}>Add</Text>
              </TouchableOpacity>
            </View>



          </View>
          {/* box 5 */}
          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>5</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity
                style={styles.addbutton}

                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.addTexts]}>Add</Text>
              </TouchableOpacity>
            </View>



          </View>
          {/* box 6 */}

        </View>
      </View>


      {/* view 3    next button */}

      <View style={[styles.thirdContainer]} >
        <TouchableOpacity
          style={styles.button}

          onPress={() => Alert.alert("Go to the newxt page")}
        >
          <Text style={[styles.nextbuttonTexts]}>Done</Text>
        </TouchableOpacity>
      </View>











    </View>
  )
}
const styles = StyleSheet.create({


  mainContainers: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white'

  },
  
  nextbuttonTexts: {
    fontSize: 17,
    fontWeight: "400",
    color: "white"
  },
  firstContainer: {
    // backgroundColor: "pink"

  },
  secondContainer: {
    // backgroundColor:"pink"
  },
  thirdContainer: {
  marginBottom:100
  },
  
  viewtwoStyle: {
    // backgroundColor:"blue",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
     marginTop: 3,
    marginRight: 10
  },
  textviewTwo: {
    // backgroundColor:"red",
    fontSize: 15,
    marginTop: 5,
    marginLeft: 10,
    color: "black",

  },
  timeformatText: {
    // backgroundColor:"red",
    fontSize: 14,
    marginTop: 6,
    marginLeft: 5,
    color: "lightgrey",

  },
  dividerborder: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#dadfe6",
    paddingVertical: 15
  },
  addbutton: {

    // alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical:8,
    // justifyContent: "center",
    // backgroundColor: "#dadfe6",
    backgroundColor: "#B8C0CC",
    borderRadius: 50,
    height: 32,
    width: 60,

  },
  timetexts: {
    paddingHorizontal: 8,
    paddingVertical:8,
    backgroundColor: "#4080FF",
    borderRadius: 50,
    color: "white",
    fontSize:13,
    height: 32,
    width: 60,

  },
 
  addTexts: {
    fontSize: 15, fontWeight: "400", color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FF7466",
    borderRadius: 50,
    height: 48,
    width: 327,
    alignSelf: "center",
    justifyContent: "center",

  },
  iconboxs: {
    height: 20,
    width: 30,
    backgroundColor: "red",
    marginTop: 5, marginLeft: 5
  },
})
export default Miscscreenfour