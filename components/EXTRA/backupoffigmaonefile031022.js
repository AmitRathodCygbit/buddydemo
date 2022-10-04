import { View, Text, StyleSheet, ScrollView, Image, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import Mapicon from '../Assets/Images/Mapicon.png'
import Underwater from '../Assets/Images/Underwater.png'
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
                    {/* graph */}
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
                            <Text style={[FigmaStyles.wheatherText]}>
                                Sunny, 13°C  •  Water: 8°C - 16°C</Text>
                                {/* <Text style={[FigmaStyles.wheatherText]}>? visibility  •  Low waves  •  Strong Current</Text> */}
                            <Text> 
                                aa
                            </Text>

                        </View>

                    </View>
                        </View>

            </ScrollView>
        </View>
    )
}

export default Figmaone