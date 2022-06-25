import React from 'react';
import { StyleSheet, View , TouchableWithoutFeedback} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import {useNavigation,} from "@react-navigation/native"
const Footer = () => {
    const navigation = useNavigation()
    return (
       <View style={styles.footerContainer}>
         <TouchableWithoutFeedback onPress={()=>navigation.navigate("Home")}>
        <View style={{flex:1,alignItems:"center"}}>
       <FontAwesomeIcon icon={faHouse} size={25}/>
        </View>
         </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate("Cart")}>
        <View style={{flex:1,alignItems:"center"}}>
       <FontAwesomeIcon icon={faCartShopping} size={25} />
       </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate("Search")}>
       <View style={{flex:1,alignItems:"center"}}>
       <FontAwesomeIcon icon={faMagnifyingGlass} size={25}/>
       </View>
        </TouchableWithoutFeedback>
       </View>
    );
}
const styles = StyleSheet.create({
   footerContainer:{
    height:50,    
    backgroundColor:"whitesmoke",
    alignItems:"center",
    flexDirection:"row",
   }

  });


export default Footer;
