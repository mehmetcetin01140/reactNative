import React,{useEffect} from 'react'
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions, TouchableHighlight, ScrollView} from 'react-native';
import {useDispatch,useSelector} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus'
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash'

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
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1,}}>
                    <FontAwesomeIcon icon={faTrash} style={{marginLeft:15}} />
                    </View>
                    <View style={{flex:1,alignItems:"center",}}>
                <Text style={{fontWeight:"bold"}}>1000$</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"flex-end"}}>
                    <FontAwesomeIcon icon={faPlus} color={"green"} style={{marginRight:10}}/>
                <Text style={{textAlign:"center",marginRight:10}}>1</Text>
                <FontAwesomeIcon icon={faMinus} color={"red"}/>
                    </View>
                </View>
                <View  style={{ borderBottomColor: 'black', borderBottomWidth: 2,borderRadius:5, flex:1,marginTop:10}}/>
                
                </>
            ))}
            </View>
        </View>
    );
}

export default Cart;
