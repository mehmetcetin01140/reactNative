import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions, TouchableHighlight, ScrollView,Button} from 'react-native';
import {useDispatch,useSelector} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus'
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash'
import {setTotalPrice} from "./redux/action"
import {setDecreasePrice} from "./redux/action"
const Cart = (props) => {
    const {GeneralResponse} = useSelector(state=>state)
    const dispatch = useDispatch()

    return (
          <View style={{flexDirection:"row"}}>
          <View style={{flex:1,}}>
          <FontAwesomeIcon icon={faTrash} style={{marginLeft:15}} />
          </View>
          <View style={{flex:1,alignItems:"center",}}>
      <Text style={{fontWeight:"bold"}}>0</Text>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"flex-end"}}>
          <TouchableHighlight onPress={console.log("test")} >
              <View>
      <FontAwesomeIcon icon={faPlus} color={"green"} />
              </View>
          </TouchableHighlight>
      <Text style={{textAlign:"center",marginRight:10}}>0</Text>
      <TouchableHighlight onPress={console.log("test")} >
              <View>
      <FontAwesomeIcon icon={faMinus} color={"red"}/>
              </View>
          </TouchableHighlight>
          </View>
          </View>
      );
}

export default Cart;
