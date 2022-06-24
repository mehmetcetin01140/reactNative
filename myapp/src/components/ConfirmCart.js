import React from 'react'
import {View,Text} from "react-native"
export default function ConfirmCart(props) {
  return (
    <View>
          <Text style={{textAlign:"center",fontWeight:"bold",fontSize:18,marginVertical:10}}>Cost : {props.totalCost()} $</Text> 
    </View>
  )
}
