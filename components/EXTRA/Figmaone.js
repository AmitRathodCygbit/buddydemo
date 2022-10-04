import { View, Text, StyleSheet, ScrollView, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Mapicon from '../Assets/Images/Mapicon.png'
import Underwater from '../Assets/Images/Underwater.png'
import Pufferfish from '../Assets/Images/Pufferfish.png'
import MantaRay from '../Assets/Images/MantaRay.png'
import Seaturtle from '../Assets/Images/Seaturtle.png'
import Clownfish from '../Assets/Images/Clownfish.png'
import Bitmap from '../Assets/Images/Bitmap.png'
import Graph from '../Assets/Images/Graph.png'
import Line2 from '../Assets/Images/Line2.png'
import Mapbg from '../Assets/Images/Mapbg.png'
import FigmaStyles from './FigmaStyles';

const Figmaone = () => {
    const styledataone = [
        { name: "wreck" },
        { name: "artificial reef" },
        { name: "coral reef" },
    ]
    return (
        <View style={[FigmaStyles.mainContainer]}>
            <Image source={Mapbg} style={[FigmaStyles.mapBgImage]} resizeMode="cover" />
            <ScrollView>
                {/* header container start */}
                <View style={[FigmaStyles.subContainerOne]}>

                    <View style={[FigmaStyles.TopIconContainer]}>
                        <View style={[FigmaStyles.chevronBackIconContainer]}>
                            <Ionicons name='chevron-back-circle-sharp' style={[FigmaStyles.chevronBackIcon]} />
                        </View>

                        <View style={[FigmaStyles.shareIcon]}>
                            <Text style={[FigmaStyles.shareIconText]}>Share</Text>
                        </View>

                        <View>
                            <MaterialCommunityIcons name='dots-horizontal-circle' style={[FigmaStyles.dotIcon]} />
                        </View>
                    </View>

                    <View style={[FigmaStyles.mapConatiner]}>
                        <Image source={Mapicon} style={[FigmaStyles.mapIconStyleOne]} />
                    </View>
                    <View style={[FigmaStyles.corsairContainer]}>

                        <View style={[FigmaStyles.corsairButton]}>
                            <View>
                                <Image source={Mapicon} style={[FigmaStyles.mapIconStyleTwo]} />
                            </View>
                            <View style={[FigmaStyles.corsairTextContainer]}>
                                <Text style={[FigmaStyles.corsairText]}>Corsair Wreck</Text>
                                <Text style={[FigmaStyles.oahuUsaText]}>Oahu, Hawaii, United States</Text>
                            </View>
                            <View style={[FigmaStyles.chevronrightContainer]}>
                                <MaterialCommunityIcons name='chevron-right-circle' style={[FigmaStyles.chevronRightIcon]} />
                            </View>


                        </View>
                        <View>

                        </View>
                    </View>

                </View>

                <View style={[FigmaStyles.mainContainer2]}>

                    <View style={[FigmaStyles.section1]}>
                        <View>
                            <View style={[FigmaStyles.section1SubContainer]}>
                                <View>
                                    <Image source={Underwater} style={[FigmaStyles.imageScuba]} />
                                </View>
                                <View style={[FigmaStyles.quinnTextContainer]}>
                                    <Text style={[FigmaStyles.quinnTextOne]}>Quinn Favre</Text>
                                    <Text style={[FigmaStyles.quinnTextTwo]}>PADI Open Water Diver</Text>
                                </View>

                            </View>
                            <View Style={[FigmaStyles.section2]}>
                                <Text style={[FigmaStyles.section2TextOne]}>August 17, 2020</Text>
                            </View>
                            <View style={[FigmaStyles.Section2SubContainer]}>
                                <Text style={[FigmaStyles.section2TextTwo]}>With</Text>
                                <Text style={[FigmaStyles.section2TextThree]}>Dive Center Oahu</Text>
                            </View>


                        </View>

                        <View style={[FigmaStyles.scubaSection]} >
                            <View style={[FigmaStyles.scubaIconContainer]}>
                                <View style={[FigmaStyles.scubaIconView]} >
                                    <SimpleLineIcons name='cup' style={FigmaStyles.scubaIcon} />
                                </View>
                                <Text style={{ color: "white" }}>Scuba</Text>
                            </View>
                        </View>

                    </View>
                    <FlatList
                        contentContainerStyle={[FigmaStyles.section3]}
                        data={[...styledataone]}
                        renderItem={
                            (element) => {
                                return <View style={[FigmaStyles.diffrentTags]}>
                                    <Text style={[FigmaStyles.TagText]}>{element.item.name}</Text>
                                </View>

                            }
                        }
                    />
                    <View style={[FigmaStyles.timeMainContainer]}>
                        <View style={[FigmaStyles.timeSubContainer]}>
                            <View style={[FigmaStyles.timeSection1]}>

                                <View style={[FigmaStyles.timeSubSection1]}>
                                    <Feather name='clock' style={[FigmaStyles.clockIcon]} />
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={[FigmaStyles.timeSubSection1Text]}>Time</Text>
                                    </View>

                                </View>

                                <View style={[FigmaStyles.timeSubSection2]}>
                                    <Text style={[FigmaStyles.timeSubSection2TextOne]}>In</Text>
                                    <Text style={[FigmaStyles.timeSubSection2TextTwo]}>10:01 AM</Text>
                                </View>
                                <View style={[FigmaStyles.timeSubSection3]}>
                                    <Text style={[FigmaStyles.timeSubSection2TextOne]}>Bottom</Text>
                                    <Text style={[FigmaStyles.timeSubSection2TextTwo]}>25 min</Text>
                                </View>


                            </View>
                            <View style={[FigmaStyles.timeSection2]}>

                                <View style={[FigmaStyles.timeSubSection2]}>
                                    <Text style={[FigmaStyles.timeSection2TextOne]}>Out</Text>
                                    <Text style={[FigmaStyles.timeSubSection2TextTwo]}>10:45 AM</Text>
                                </View>
                                <View style={[FigmaStyles.timeSubSection3]}>
                                    <Text style={[FigmaStyles.timeSubSection2TextOne]}>Total</Text>
                                    <Text style={[FigmaStyles.timeSubSection2TextTwo]}>44 min</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={[FigmaStyles.graphMainContainer]}>
                        <View>
                            <View style={[FigmaStyles.graphSection1]}>
                                {/* two icon in column */}
                                <View style={[FigmaStyles.graphContainer1]}>
                                    <View style={[FigmaStyles.graphSubSection1]}>
                                        <MaterialCommunityIcons name='wave' style={[FigmaStyles.WaveIcon]} />
                                        <MaterialCommunityIcons name='arrow-down' style={[FigmaStyles.WaveArrowIcon]} />
                                    </View>

                                    <View ><Text style={[FigmaStyles.graphTextDepth]}>Depth</Text></View>

                                </View>
                                { /* text in row */}

                            </View>

                            <View style={[FigmaStyles.graphSection2]}>
                                <View style={[FigmaStyles.graphContainer2]}>
                                    <ImageBackground source={Graph} style={[FigmaStyles.graphImage, {

                                    }]} >
                                        <Image source={Line2} style={[FigmaStyles.LineImage]} />
                                    </ImageBackground>
                                </View>
                            </View>

                            <View style={[FigmaStyles.graphSection3]}>
                                <View style={[FigmaStyles.graphContainer3]}>
                                    <View style={[FigmaStyles.graphTextSectionOne]}>
                                        <Text style={[FigmaStyles.graphTextOne]}>Max depth</Text>
                                        <Text style={[FigmaStyles.graphTextTwo]}>18 m</Text>
                                    </View>
                                    <View style={[FigmaStyles.graphTextSectionTwo]}>
                                        <Text style={[FigmaStyles.graphTextOne]}>Average</Text>
                                        <Text style={[FigmaStyles.graphTextTwo]}>10 m</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[FigmaStyles.weatherContainer]}>
                        <View style={[FigmaStyles.sunContainer]}>
                            <Octicons name='sun' style={[FigmaStyles.sunIcon]} />
                        </View>
                        <View>
                            <Text style={[FigmaStyles.wheatherText]}> Sunny, 13°C  •  Water: 8°C - 16°C</Text>
                            <Text style={[FigmaStyles.wheatherText]}>? visibility  •  Low waves  •  Strong Current</Text>

                        </View>

                    </View>
                    <View style={[FigmaStyles.marineContainer]}>
                        <Ionicons name='eye-outline' style={[FigmaStyles.eyeIcon]} />
                        <View style={[FigmaStyles.marineTextContainer]}>
                            <Text style={[FigmaStyles.marineText]}>Marine encounters</Text>
                        </View>

                    </View>

                    <View style={[FigmaStyles.ImageScrollContainer]}>
                        <ScrollView horizontal={true}>

                            <View>
                                <Image source={Clownfish} style={{ height: 101, width: 101, marginHorizontal: 12 }} />
                                <Text style={[FigmaStyles.marineImageText]}>Clown fish</Text>
                            </View>
                            <View>
                                <Image source={Seaturtle} style={{ height: 101, width: 101, marginHorizontal: 12 }} />
                                <Text style={[FigmaStyles.marineImageText]}>Sea turtle</Text>
                            </View>
                            <View>
                                <Image source={MantaRay} style={{ height: 101, width: 101, marginHorizontal: 12 }} />
                                <Text style={[FigmaStyles.marineImageText]}>Manta Ray</Text>
                            </View>
                            <View>
                                <Image source={Pufferfish} style={{ height: 101, width: 101, marginHorizontal: 12 }} />
                                <Text style={[FigmaStyles.marineImageText]}>Puffer fish</Text>
                            </View>



                        </ScrollView>
                    </View>
                    <View style={[FigmaStyles.airMainContainer]}>
                        <View style={[FigmaStyles.airSubContainerOne]}>
                            <FontAwesome5 name='air-freshener' style={[FigmaStyles.airIconOne]} />
                            <Text style={[FigmaStyles.airTextOne, { marginHorizontal: 17 }]}>Air</Text>
                        </View>
                        <View style={[FigmaStyles.airSubContainerTwo]}>
                            <View style={[FigmaStyles.airColumnOne]}>
                                <View style={[FigmaStyles.airSection1]}>
                                    <Text style={[FigmaStyles.airTextTwo]}>start</Text>
                                    <Text style={[FigmaStyles.airTextThree]}>300 psi</Text>
                                </View>
                                <View style={[FigmaStyles.airSection2]}>
                                    <Text style={[FigmaStyles.airTextTwo,]}>Volume</Text>
                                    <Text style={[FigmaStyles.airTextThree]}>12 L</Text>
                                </View>
                            </View>
                            <View style={[FigmaStyles.airColumnTwo]}>
                                <View style={[FigmaStyles.airSection3]}>
                                    <View style={{ flexDirection: "row" }} >
                                        <View style={{ justifyContent: "center" }}>
                                            <FontAwesome5 name='air-freshener' style={[FigmaStyles.airIconTwo]} />
                                        </View>
                                        <View>
                                            <Text style={[FigmaStyles.airTextTwo]}>Finish</Text>
                                            <Text style={[FigmaStyles.airTextThree]}>50 psi</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={[FigmaStyles.airSection4]}>
                                    <Text style={[FigmaStyles.airTextTwo]}>Nitrox mix</Text>
                                    <Text style={[FigmaStyles.airTextThree]}>18 %</Text>
                                </View>
                            </View>
                            <View style={[FigmaStyles.airColumnThree]}>
                                <View style={[FigmaStyles.airSection5]}>
                                    <FontAwesome5 name='air-freshener' style={[FigmaStyles.airIconThree]} />
                                </View>

                            </View>
                        </View>

                    </View>
                    <View style={[FigmaStyles.gearContainer]}>
                  
                        <View style={FigmaStyles.gearSubContainerOne}>
                            <View style={{ flexDirection: "row", alignItems: "center",marginTop:17 }}>
                                <MaterialCommunityIcons name='gamepad-circle-outline' style={{fontSize:30,color:"white"}} />
                                <View >
                                    <Text style={[FigmaStyles.gearTextOne]}>Gear</Text>
                                </View>

                            </View>
                            <View >
                                <TouchableOpacity style={[FigmaStyles.gearIconTouchable]}
                                >
                                    <Ionicons name='chevron-up' style={[FigmaStyles.olliChevronIcon]} />
                                    
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={FigmaStyles.gearSubContainerTwo}>
                        <View style={{ flexDirection: "row", alignItems: "center",marginTop:36 }}>
                                <MaterialCommunityIcons name='human' style={{fontSize:30,color:"white"}} />
                                <View >
                                    <Text style={[FigmaStyles.gearTextOne,]}>Suit type</Text>
                                </View>

                            </View>
                            <View style={{marginTop:19}} >
                                <View>
                                    <Text style={[FigmaStyles.gearTextThree]}>Suit type</Text>
                                    <Text style={[FigmaStyles.gearTextTwo]}>3 mm thick</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[FigmaStyles.gearBorderLine]}>
                    </View>
                        <View style={FigmaStyles.gearSubContainerThree}>
                        <View style={{ flexDirection: "row", alignItems: "center",marginTop:36 }}>
                                <MaterialCommunityIcons name='human' style={{fontSize:30,color:"white"}} />
                                <View >
                                    <Text style={[FigmaStyles.gearTextOne,]}>Suit type</Text>
                                </View>

                            </View>
                            <View style={{marginTop:19}} >
                                <View>
                                    <Text style={[FigmaStyles.gearTextThree]}>Suit type</Text>
                                    <Text style={[FigmaStyles.gearTextTwo]}>3 mm thick</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[FigmaStyles.gearBorderLine]}>
                    </View>
                        <View style={FigmaStyles.gearSubContainerFour}>
                        <View style={{ flexDirection: "row", alignItems: "center",marginTop:36 }}>
                                <MaterialCommunityIcons name='human' style={{fontSize:30,color:"white"}} />
                                <View >
                                    <Text style={[FigmaStyles.gearTextOne,]}>Suit type</Text>
                                </View>

                            </View>
                            <View style={{marginTop:23}} >
                                <View>
                                    <Text style={[FigmaStyles.gearTextThree]}>Suit type</Text>
                                    <Text style={[FigmaStyles.gearTextTwo]}>3 mm thick</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[FigmaStyles.gearBorderLine]}>
                    </View>
                        <View style={FigmaStyles.gearSubContainerFive}>
                        <View style={{ flexDirection: "row", alignItems: "center",marginTop:36 }}>
                                <MaterialCommunityIcons name='human' style={{fontSize:30,color:"white"}} />
                                <View >
                                    <Text style={[FigmaStyles.gearTextOne,]}>Suit type</Text>
                                </View>

                            </View>
                            <View style={{marginTop:23}} >
                                <View>
                                    <Text style={[FigmaStyles.gearTextThree]}>Suit type</Text>
                                    <Text style={[FigmaStyles.gearTextTwo]}>3 mm thick</Text>
                                </View>
                            </View>
                        </View>
                     
                    </View>
                    {/* <View style={FigmaStyles.verifyMainContainer}>
                        <View style={FigmaStyles.verifySubContainer}>
                            <View style={{ flexDirection: "row" }}>
                                <Ionicons name='checkmark-circle' style={[FigmaStyles.verifyIcon]} size={24} />
                                <Text style={[FigmaStyles.verifyTextOne]}>Verified</Text>
                            </View>
                            <View>
                                <Text style={[FigmaStyles.verifyTextTwo]}>Jan 17, 2020 • 12:01 AM</Text>
                            </View>
                        </View>
                    </View> */}
                    {/* <View style={[FigmaStyles.ollieMainContainer]}>
                        <View style={FigmaStyles.ollieSubContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image source={Bitmap} style={[FigmaStyles.olliImage]} />
                                <View >
                                    <Text style={[FigmaStyles.ollieTextOne]}>Ollie Bos</Text>
                                    <Text style={[FigmaStyles.ollieTextTwo]}>SSI Dive Instructor</Text>
                                </View>

                            </View>
                            <View >
                                <TouchableOpacity style={[FigmaStyles.olliIconTouchable]}
                                >
                                    <Ionicons name='md-chevron-forward-outline' style={[FigmaStyles.olliChevronIcon]} />
                                    
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> */}
                    {/* <View style={[FigmaStyles.diveshopBorderLine]}>
                    </View> */}
                    {/* <View style={[FigmaStyles.diveShopMainContainer]}>
                        <View style={[FigmaStyles.diveShopSubContainer]}>
                            <Text style={[FigmaStyles.diveShopTextOne]}>Dive Shop</Text>
                            <View>
                                <Text style={[FigmaStyles.diveShopTextThree]}>Pacific Scuba Co.</Text>
                                <Text style={[FigmaStyles.diveShopTextTwo]}>Haleiwa, Hawaii, United States</Text>
                            </View>

                        </View>
                    </View>
                    <View style={[FigmaStyles.diveshopBorderLine]}>
                    </View>
                    <View style={[FigmaStyles.editbuttonsContainer]}>
                        <View style={[FigmaStyles.editLogButton]}>
                            <Text style={[FigmaStyles.editLogButtonText]}>Edit log</Text>
                        </View>

                    </View>
                    <View style={[FigmaStyles.deletebuttonsContainer]}>
                        <View style={[FigmaStyles.delteLogButton]}>
                            <Text style={[FigmaStyles.deleteLogButtonText]}>Delete</Text>
                        </View>

                    </View> */}
                </View>



            </ScrollView>
        </View>
    )
}

export default Figmaone