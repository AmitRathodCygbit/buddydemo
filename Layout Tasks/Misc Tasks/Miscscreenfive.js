import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput, ScrollView, SectionList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
const Miscscreenfive = () => {
  const [showdata, setShowdata] = useState(false);
  const imagesData = [
    { title: "title1", url: "" },
    { title: "title2", url: "" },
    { title: "title3", url: "" },
    { title: "title4", url: "" },
    { title: "title5", url: "" },
  ]
  const dataA = [
    {
      title: "A",
      data: ["Abalonea", "Albacore Rings", "Anchovya"]
    },
    {
      title: "B",
      data: ["Abalonea", "Albacore Rings", "Anchovya"]
    },
    {
      title: "C",
      data: ["Abalonea", "Albacore Rings", "Anchovya"]
    },
    {
      title: "C",
      data: ["Abalonea", "Albacore Rings", "Anchovya"]
    },
  ]
  const abc = () => {
    setShowdata(true)
  }

  const renderHeader = () => {
    return (
      <View style={{ flexDirection: "row" }} >

        <TouchableOpacity
          onPress={() => setShowdata(!showdata)}
          style={[{ fontSize: 30, color: "black", marginHorizontal: 10, marginTop: 10 }]}>
          <Text
            style={[{ fontSize: 17, color: "black", marginTop: 5, marginHorizontal: 15 }]}
          >
            X
          </Text>
        </TouchableOpacity>
        <Text style={[{ fontSize: 17, color: "black", marginHorizontal: 70, marginTop: 15, marginBottom: 20 }]}>Marine Encounters</Text>
      </View>
    )
  }

  const renderSearch = () => {
    return (
      <View style={{
        backgroundColor: "#EAEDF0",
        borderRadius: 25,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',

      }}>
        <View style={[styles.iconboxSearch]} />
        <Text style={{ marginLeft: 10 }}>marinelife</Text>
      </View>
    )
  }

  const renderImage = ({ title, url }) => {
    return (
      <View >
      
          
          <View style={{
            flexDirection: "column",
            position: "relative",
            marginHorizontal: 10,
            backgroundColor: "gray",
            height: 140,
            width: 100,


          }} >


            <View >
              <Text style={styles.blueCloseimgbtn}>X</Text>
              <View style={{ marginTop: 10, backgroundColor: "red" }}>
                <Text
                >{title}
                </Text>
              </View>
            </View>
          </View>


        </View>

     

    )
  }

  const renderAcontainer = (item) => {
    // console.log("item", JSON.stringify(item, null, 2));
    return (
      <View style={{
        // flexDirection: "row",
        // flex: 1,

        // height: 80,
        // width: 80,
      }}>

        <View style={[styles.dividerborder, {}]} >
          <View style={styles.iconboxs} >

          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{ marginLeft: 5, marginTop: 15 }}
            >{item}
            </Text>
          </View>

          <View style={styles.addbutton}>

          </View>

        </View>
      </View>

    )
  }
  const renderModal = () => {
    return (
      <Modal
        visible={showdata}
        transparent={true}
        animationType='slide'

      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {renderHeader()}
            {renderSearch()}

            <Text style={{ marginTop: 12, marginHorizontal: 15, color: "black", fontSize: 15, marginLeft: 30 }}>Selected</Text>

            <ScrollView
              horizontal={true}
              contentContainerStyle={{ flexDirection: "row", marginVertical: 15, }}>
              {
                imagesData.map((item) => renderImage(item))
              }
            </ScrollView>

            <SectionList
              sections={dataA}
              style={{ marginBottom: 260 }}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => renderAcontainer(item)}
              renderSectionHeader={({ section: { title } }) => {
                return (
                  <Text style={styles.header}>{title}</Text>
                )
              }}
            />

          </View>
        </View>
      </Modal >
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white", flex: 1, justifyContent: "flex-end", padding: 15 }}>
        {renderModal()}
        <TouchableOpacity
          onPress={() => abc()}
          style={{
            backgroundColor: '#4080FF',
            height: 50,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10

          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, }}>Marine Encounters</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "gray"
  },
  modalView: {
    backgroundColor: "white",
    marginTop: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'column'
  },
  button: {
    borderRadius: 20,
    alignItems: "flex-start",

  },
  viewtwoStyle: {
    // backgroundColor:"blue",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 3,
    marginRight: 60
  },
  textviewTwo: {
    // backgroundColor:"red",
    fontSize: 15,
    marginTop: 5,
    marginLeft: 10,
    color: "black",

  },
  iconboxSearch: {
    height: 20,
    width: 30,
    backgroundColor: "red",
  },
  iconboxs: {
    height: 45,
    width: 45,
    backgroundColor: "red",
    marginTop: 5,
    marginHorizontal: 10
  },

  imagesdata: {
    position: "absolute",
    top: -5,
    left: 2
  },
  dividerborder: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#dadfe6",
    paddingVertical: 15
  },
  addbutton: {
    backgroundColor: "#EAEDF0",
    borderRadius: 24,
    height: 24,
    width: 24,
    borderWidth: 1,
    borderColor: "#B8C0CC",
    marginRight: 20,
    marginTop: 15

  },
  blueCloseimgbtn: {
    backgroundColor: "#4080FF",
    borderRadius: 28,
    height: 28,
    width: 28,
    color: "white",

  },
});
export default Miscscreenfive