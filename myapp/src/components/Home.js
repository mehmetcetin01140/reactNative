import React from 'react';
import { StyleSheet, View ,Image, ScrollView} from 'react-native';

import Categories from "./Categories"
import DiscountArea from './DiscountArea';
import HomeProductSliders from "./HomeProductSliders"
export default Home = () => {
   
    return (
      <ScrollView>
        <View style={styles.backgroundColor}>
        <View style={styles.header}>
         <Image style={styles.headerImage} source={require("./images/as.png")}  resizeMode="cover"
  resizeMethod="resize"></Image>
         </View>
       <Categories/>
       <DiscountArea/>
           <HomeProductSliders/>
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
