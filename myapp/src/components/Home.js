import React, { useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions, ScrollView} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native"
import Carousel from 'react-native-snap-carousel';
import Categories from "./Categories"
import Laptop from "./Laptop"
import DiscountArea from './DiscountArea';
import CellPhone from "./CellPhone"
import Tv from "./Tv"
import Hardware from "./Hardware"
export default Home = () => {
   
    return (
      <ScrollView>
        <View style={styles.backgroundColor}>
        <View style={styles.header}>
         <Image style={styles.headerImage} source={require("myapp/assets/as.png")}  resizeMode="cover"
  resizeMethod="resize"></Image>
         </View>
       <Categories/>
       <DiscountArea/>
            <Laptop/>
            <CellPhone/>
            <Tv/>
            <Hardware/>
         </View>
         </ScrollView>
    );
}

const styles = StyleSheet.create({
    backgroundColor:{
        backgroundColor:"white",
        flex:1,
    },
    header: {
        height:150, 
    },
    headerImage:{
       maxWidth:"100%",
       maxHeight:"100%",
    },

  });
