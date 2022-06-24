import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions,Button,TouchableHighlight} from 'react-native'
import {useNavigation, useRoute} from "@react-navigation/native"
import {setSelectedCategory} from "./redux/action"
import {useDispatch,useSelector} from "react-redux"
export default function Categories() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const categories = ["Computer","Tv","Cellphone","Hardware"]
    const categoryMap = () =>{
        return(
            categories.map(category=>(
                <TouchableHighlight onPress={()=>{dispatch(setSelectedCategory(category));navigation.navigate("Category")
                }}>
                <Text style={{color:"black",fontSize:17, marginHorizontal:10,fontWeight:"bold"}} >{category}</Text>
                </TouchableHighlight>
            ))
        )
    }
  return (
    <View style={styles.header}>
    {categoryMap()}
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"whitesmoke",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:40
        }
        
  });