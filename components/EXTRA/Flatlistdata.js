import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Flatlistdata = () => {
    const styledataone = [
        { name: "wreck" },
        { name: "artificial reef" },
        { name: "coral reef" },
    ]
    return (
        <View style={[FigmaStyles.section3]}>
            {/* <FlatList
                        contentContainerStyle={[FigmaStyles.section3]}
                        data={[...styledataone]}
                        renderItem={
                            (element) => {
                                return <View style={[FigmaStyles.diffrentTags]}>
                                    <Text style={[FigmaStyles.TagText]}>{element.item.name}</Text>
                                </View>

                            }
                        }
                    /> */}
            {styledataone.map((item, index) => (
                <View key={index} style={[FigmaStyles.diffrentTags]} >
                    <Text style={[FigmaStyles.TagText]}>{item.name}</Text>
                </View>
            ))}

        </View>
    )
}

export default Flatlistdata