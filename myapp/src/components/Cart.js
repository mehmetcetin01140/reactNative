import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions, TouchableHighlight, ScrollView,Button} from 'react-native';
import {useDispatch,useSelector} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus'
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash'
import Quantity from "./Quantity"
const Cart = () => {
    const {GeneralResponse} = useSelector(state=>state)
    const cartProducts = GeneralResponse.cartProducts
    
     
    return (
        <View style={{flex:1}}>
           <Text style={{textAlign:"center",fontWeight:"bold",fontSize:18,marginVertical:10}}>Your Cart</Text> 
           <View style={{marginHorizontal:20}}>
            {cartProducts.map(cartItem=>(
                <>
                <View style={{flexDirection:"row",alignItems:"center",marginBottom:15}}>
                    <Image source={{uri:cartItem.image}} style={{height:50,width:50,resizeMode:"contain"}} />
                    <Text style={{marginLeft:10,marginRight:20}} >{cartItem.desc}</Text>
                </View>
                   <View style={{marginBottom:30}}>
                   <Quantity item={cartItem.price}/>
                   </View>
                </>
            ))}
            </View>
           
        </View>
    );
}

export default Cart;
