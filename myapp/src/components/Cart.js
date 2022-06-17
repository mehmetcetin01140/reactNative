import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions, TouchableHighlight, ScrollView,Button} from 'react-native';
import {useDispatch,useSelector} from "react-redux"
import Quantity from "./Quantity"
const Cart = () => {
    const {GeneralResponse} = useSelector(state=>state)
    const cartProducts = GeneralResponse.cartProducts
    const totalPriceHolder = GeneralResponse.totalPrice
    console.log(totalPriceHolder);
    const removeDollarSign = cartProducts.map(product=>product.price.replace("$",""))
   const numberPrice = removeDollarSign.map(price=>Number(price))
   const numberTotal = totalPriceHolder.map(total=>Number(total))
      const reducedTotalCost = () =>{
        const reducedPrice = numberPrice.reduce((partialSum, a) => partialSum + a, 0);
        const reducedTotalPrice = numberTotal.reduce((partialSum, a) => partialSum + a, 0);
        return  reducedPrice+reducedTotalPrice
      }
     
    return (
        <View style={{flex:1}}>
          
           <Text style={{textAlign:"center",fontWeight:"bold",fontSize:18,marginVertical:10}}>{reducedTotalCost()}</Text> 
           <View style={{marginHorizontal:20}}>
            {cartProducts.map(cartItem=>(
                <>
                <View style={{flexDirection:"row",alignItems:"center",marginBottom:15}}>
                    <Image source={{uri:cartItem.image}} style={{height:50,width:50,resizeMode:"contain"}} />
                    <Text style={{marginLeft:10,marginRight:20}} >{cartItem.desc}</Text>
                </View>
                   <View style={{marginBottom:30}}>
                   <Quantity price={cartItem.price} id={cartItem.id} total={reducedTotalCost}/>
                   </View>
                </>
            ))}
            </View>
           
        </View>
    );
}

export default Cart;
