import { View, Text } from 'react-native'
import React,{useState,useEffect,FlatList } from 'react'
import axios from 'axios';

const Httpreq = () => {
    const [getdata,setGetdata]=useState([]);
    
     useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res=>{
        console.log("data called",res)
        setGetdata(res.data)
       })
       .catch(err=>{
        console.log("error here",err);
       })
       
      });
  return (
    <View>
      <Text>Http req</Text>
      <FlatList 
                data={getdata}
                renderItem={
                    (element) => {
                        return <View>
                            <Text>{element.item.data}</Text>
                
                        </View>

                    }
                }
            />
    </View>
  )
}

export default Httpreq