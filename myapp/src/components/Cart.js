import React,{useEffect,useState} from 'react'
import { Text, View ,Image, ScrollView, TouchableOpacity} from 'react-native';
import {useDispatch,useSelector} from "react-redux"
import Quantity from "./Quantity"
import ConfirmCart from "./ConfirmCart"
import {useNavigation} from "@react-navigation/native"
import { setReducedTotalCost } from './redux/action';
const Cart = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {GeneralResponse} = useSelector(state=>state)
    const cartProducts = GeneralResponse.cartProducts
    const totalPriceHolder = GeneralResponse.totalPrice
    const removeDollarSign = cartProducts.map(product=>product.price.replace("$",""))
   const numberPrice = removeDollarSign.map(price=>Number(price))
   const numberTotal = totalPriceHolder.map(total=>Number(total))
      const reducedTotalCost = () =>{
        const reducedPrice = numberPrice.reduce((partialSum, a) => partialSum + a, 0);
        const reducedTotalPrice = numberTotal.reduce((partialSum, a) => partialSum + a, 0);
        return  reducedPrice + reducedTotalPrice
      }
     useEffect(() => {
       dispatch(setReducedTotalCost(reducedTotalCost()))
     }, [reducedTotalCost()]);
    return (
        <>
                <ConfirmCart totalCost={reducedTotalCost}/>
        <View style={{flex:1}}>
            <ScrollView>
           <View style={{marginHorizontal:20}}>
            {cartProducts.map(cartItem=>(
        
                <View key={cartItem.id}>
                <View style={{flexDirection:"row",alignItems:"center",marginBottom:15}} >
                    <Image source={{uri:cartItem.image}} style={{height:50,width:50,resizeMode:"contain"}} />
                    <Text style={{marginLeft:10,marginRight:20}} >{cartItem.desc}</Text>
                </View>
                   <View style={{marginBottom:30}}>
                   <Quantity price={cartItem.price} id={cartItem.id} total={reducedTotalCost}/>
                   </View>
                   </View>
              
            ))}
            </View>
        </ScrollView>
        </View>
            <View style={{justifyContent:"center",flexDirection:"row",marginBottom:5,height:30}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Pay")}
            style={{backgroundColor:"#18A558",width:"100%",height:35,justifyContent:"center",alignItems:"center",borderRadius:"5px",marginBottom:3}}>
                <Text style={{color:"white"}} >
                    Confirm
                </Text>
            </TouchableOpacity>
            </View>
        </>
        
    );
}

export default Cart;
