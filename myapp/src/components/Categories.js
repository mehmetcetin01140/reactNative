import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import {setSelectedCategory} from "./redux/action"
import {useDispatch} from "react-redux"
export default function Categories() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const categories = ["Computer","Tv","Cellphone","Hardware"]
    const categoryMap = () =>{
        return(
            categories.map((category,i)=>(
                <TouchableOpacity key={i} onPress={()=>{dispatch(setSelectedCategory(category));navigation.navigate("Category")
                }}>
                <Text style={{color:"black",fontSize:17, marginHorizontal:10,fontWeight:"bold"}} >{category}</Text>
                </TouchableOpacity>
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