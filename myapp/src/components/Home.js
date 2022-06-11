import React, { useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native"
import {FlatListSlider} from 'react-native-flatlist-slider';
export default Home = () => {
    const navigation = useNavigation()

  
      
    return (
        <View style={styles.backgroundColor}>
        <View style={styles.header}>
         <Image style={styles.headerImage} source={require("myapp/assets/as.png")}></Image>
         </View>

         </View>
    );
}

const styles = StyleSheet.create({
    backgroundColor:{
        backgroundColor:"white",
        flex:1,
    },
    header: {
        flex:0.2,
        backgroundColor:"orange",
        borderBottomEndRadius:"60px",
    },
    headerImage:{
       maxWidth:"100%",
       maxHeight:"100%",
       resizeMode:"cover",
    }
  });
//   const images = [
//     {
//      image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
//      desc: 'Silent Waters in the mountains in midst of Himilayas',
//     },
//    {
//      image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
//      desc:
//        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
//    },
//    ]      
   
//    <FlatListSlider
//    data={images}
// width={275}
// timer={5000}
