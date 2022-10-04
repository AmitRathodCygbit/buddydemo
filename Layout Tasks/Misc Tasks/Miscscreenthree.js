import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Divider } from 'react-native-paper';
const Miscscreenthree = () => {
  const styledataone = [
    { name: "wreck" },
    { name: "artificial reef" },
    { name: "coral reef" },
    { name: "wall" },
  ]
  const styledatatwo = [
    { name: "cave" },
    { name: "gully" },
    { name: "swim-through" },
  ]

  return (
    <View style={styles.mainContainers}>



      <View style={{flex: 1}}>


        {/* view 1         X and scuba text */}
        <View style={[styles.firstContainer]}>
          <View style={[styles.closebuttonViews]}><Text style={[styles.closebuttonsText]}>{"X"}</Text></View>
          <View><Text style={styles.scubatext}>New{'\n'}Scuba dive</Text></View>
        </View>


        {/* view 2 icon + icon_name  + add button */}

        <View style={[styles.secondContainer]}>
          {/* box 1 */}

          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>Date</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity
                style={styles.addbutton}

                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.addTexts]}>Add</Text>
              </TouchableOpacity>
            </View>

            {/* add line here */}

          </View>
          {/* box 2 */}

          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>Time In</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity
                style={styles.addbutton}

                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.addTexts]}>Add</Text>
              </TouchableOpacity>
            </View>

            {/* add line here */}

          </View>
          {/* box 3 */}
          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>Time Out</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity
                style={styles.addbutton}

                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.addTexts]}>Add</Text>
              </TouchableOpacity>
            </View>

            {/* add line here */}

          </View>
          {/* box 4 */}
          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>Bottom Time</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity
                style={styles.addbutton}

                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.addTexts]}>Add</Text>
              </TouchableOpacity>
            </View>

            {/* add line here */}

          </View>
          {/* box 5 */}
          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>Max depth</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity
                style={styles.addbutton}

                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.addTexts]}>Add</Text>
              </TouchableOpacity>
            </View>

            {/* add line here */}

          </View>
          {/* box 6 */}
          <View style={[styles.dividerborder]}>


            <View style={styles.iconboxs}>

            </View>

            <View>
              <Text style={[styles.textviewTwo]}>Location</Text>
            </View>

            <View style={styles.viewtwoStyle} >

              <TouchableOpacity
                style={styles.arrowbutton}

                onPress={() => Alert.alert("Go to the newxt page")}
              >
                <Text style={[styles.addTexts]}>{">"}</Text>
              </TouchableOpacity>
            </View>

            {/* add line here */}

          </View>
        </View>




        {/* view 3         Add tags + tag name like button  */}
        <View style={[styles.thirdContainer]}>
          <View>
            <Text style={{ color: "black", fontSize: 18, marginLeft: 15, marginVertical: 20 }}>Add tags</Text>
          </View>
          <View>
            <FlatList
              contentContainerStyle={{ flexDirection: "row", flexWrap:"wrap" }}
              data={[...styledataone,...styledatatwo]}
              renderItem={
                (element) => {
                  return <View style={[styles.diffrentTags]}>
                    <Text style={[styles.tagsTextstyle]}>{element.item.name}</Text>

                  </View>

                }
              }
            />
          </View>
        </View>

      </View>






      {/* view 4   next button */}

      <View style={[styles.fourthContainer]} >
        <TouchableOpacity
          style={styles.button}

          onPress={() => Alert.alert("Go to the newxt page")}
        >
          <Text style={[styles.nextbuttonTexts]}>Next</Text>
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
  scubatext: {
    color: "black",
    fontSize: 40,
    marginLeft: 15,
    fontWeight:"400"
  },
  nextBox: {
    flex: 1,
    backgroundColor: "grey",
    // backgroundColor:"green",

  },
  nextbuttonTexts: {
    fontSize: 18,
    fontWeight: "400",
    color: "white"
  },
  firstContainer: {
    // flex: 1,
    // backgroundColor: "pink"

  },
  secondContainer: {
    // flex: 1,
  },
  thirdContainer: {
    flex: 1,
    // alignItems:"flex-start",
    // backgroundColor: "skyblue"

  },
  fourthContainer: {
    // flex: 1,
    // backgroundColor: "orange".
    paddingBottom: 20
  },
  viewtwoStyle: {
    // backgroundColor:"blue",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end"
    , marginTop: 5,
    marginRight: 10
  },
  textviewTwo: {
    // backgroundColor:"red",
    fontSize: 15,
    marginTop: 5,
    marginLeft: 10,
    color: "black",

  },
  dividerborder: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#dadfe6",
    paddingVertical: 15
  },
  addbutton: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#dadfe6",
    backgroundColor: "lightgrey",
    borderRadius: 50,
    height: 25,
    width: 60,

  },
  arrowbutton: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#dadfe6",
    backgroundColor: "lightgrey",
    borderRadius: 30,
    height: 25,
    width: 30,

  },
  closebuttonViews: {


    // backgroundColor: "red",
    marginLeft: 15,
    marginTop: 15
  },
  closebuttonsText: {
    fontSize: 20,
    color: "black",
    justifyContent: "flex-end",
  },
  addTexts: {
    fontSize: 15, fontWeight: "400", color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#dadfe6",
    borderRadius: 50,
    height: 40,
    width: 350,
    alignSelf: "center",
    justifyContent: "center",

  },
  iconboxs: {
    height: 20,
    width: 30,
    backgroundColor: "red",
    marginTop: 5, marginLeft: 5
  },
  diffrentTags: {
    // backgroundColor: "#732207",
    borderColor: "#dadfe6",
    borderWidth: 2,
    marginLeft: 15,
    marginTop: 10,
    borderRadius: 20,
    padding: 5
  },
  tagsTextstyle: {
    color: "#bec3cc",
    justifyContent: "flex-start",
    fontSize: 12,
    paddingHorizontal:10,
    padding: 2,
    // backgroundColor:"red"
  },
})
export default Miscscreenthree