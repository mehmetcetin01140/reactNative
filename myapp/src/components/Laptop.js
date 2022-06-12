
import React, { useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native"
import {useDispatch,useSelector} from "react-redux"
import Carousel from 'react-native-snap-carousel';
export default function Laptop() {
  const {GeneralResponse} = useSelector(state=>state)
    const laptopData = GeneralResponse.laptopData
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
    const _renderItem = ({item, index}) => {
        return (
            <View>
                <Text>{item.sa}</Text>
                <Image source={{uri:item.image}} style={{height:200,width:220,resizeMode:"contain"}}></Image>
                <Text>{item.desc}</Text>
            </View>
        )}
  return (
    <View style={{marginTop:20}}>
    <Text style={{fontSize:18, fontWeight:"bold",marginLeft:5,marginBottom:20,}}>Laptop</Text>
    <Carousel
    data={laptopData}
    renderItem={_renderItem}
    sliderWidth={SLIDER_WIDTH}
    itemWidth={ITEM_WIDTH}
    />
    </View>
  )
}
