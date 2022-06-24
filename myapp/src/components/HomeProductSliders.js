
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions, TouchableWithoutFeedback} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native"
import {useDispatch,useSelector} from "react-redux"
import Carousel from 'react-native-snap-carousel';
import productData from './data.json';
import {setCurrentProductId} from "./redux/action"

export default function Laptop() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
  const laptopData = productData.filter(data=>data.productCategory==="laptopData")
  const cellphoneData = productData.filter(data=>data.productCategory==="cellphoneData")
  const tvData = productData.filter(data=>data.productCategory==="tvData")
  const hardwareData = productData.filter(data=>data.productCategory==="hardwareData")
  const data = [
    {
        name:laptopData,
        category:"Laptop"
    },
    {
        name:cellphoneData,
        category:"Cell Phone"
    },
    {
        name:tvData,
        category:"Tv"
    },
    {
        name:hardwareData,
        category:"Hardware"
    }
]
    
   const goToProduct = (id,category) =>{
       dispatch(setCurrentProductId(id,category))
    navigation.navigate("Product")
  }
  const categories = ["Laptop","Cellphone","Tv","Hardware"]
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

    const _renderItem = ({item, index}) => {
        return (
            <TouchableWithoutFeedback onPress={()=>goToProduct(item.id,item.productCategory)}>
            <View>
                <Image source={{uri:item.image}} style={{height:200,width:220,resizeMode:"contain"}}></Image>
                <Text>{item.desc}</Text>
            </View>
            </TouchableWithoutFeedback>
        )}
  return (
    <View style={{marginTop:20}}>
        {
            data.map(data=>(
                <View>
                <Text style={{fontSize:18, fontWeight:"bold",marginLeft:5,marginVertical:30,}}>{data.category}</Text>
           <Carousel
           data={data.name}
           renderItem={_renderItem}
           sliderWidth={SLIDER_WIDTH}
           itemWidth={ITEM_WIDTH}
           />
           </View>
          ))    
        }
   
    </View>
  )
}
