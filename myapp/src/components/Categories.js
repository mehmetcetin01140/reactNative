import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions,Button,TouchableHighlight} from 'react-native'
import {useNavigation, useRoute} from "@react-navigation/native"
export default function Categories() {
    const navigation = useNavigation()
    const categories = [
        {
            name:"Computer",routePath:"Laptop"
        },
        {
            name:"TV",routePath:"Tv"
        },
        {
            name:"Cell Phone",routePath:"CellPhone"
        },
        {
            name:"Hardware",routePath:"Hardware"
        },
        
    
    ,]
    const categoryMap = () =>{
        return(
            categories.map(category=>(
                <TouchableHighlight onPress={()=>navigation.navigate("Laptop")}>
                <Text style={{color:"white",fontSize:17, marginHorizontal:10}} >{category.name}</Text>
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
        backgroundColor:"#3A3432",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:40
        }
        
  });