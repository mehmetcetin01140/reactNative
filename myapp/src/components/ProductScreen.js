import React,{useEffect} from 'react'
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions, TouchableHighlight, ScrollView} from 'react-native';
import {useDispatch,useSelector} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping'
import productData from './data.json';
import cards from "./cards.png"
import {setCartProduct} from "./redux/action"
export default function ProductScreen() {
    const {GeneralResponse} = useSelector(state=>state)
    const currentProductId = GeneralResponse.currentProduct.productId
    const currentProductCategory = GeneralResponse.currentProduct.productCategory
    const laptopData = productData.filter(data=>data.productCategory==="laptopData")
    const cellphoneData = productData.filter(data=>data.productCategory==="cellphoneData")
    const tvData = productData.filter(data=>data.productCategory==="tvData")
    const hardwareData = productData.filter(data=>data.productCategory==="hardwareData")
    const dispatch = useDispatch()
    const dataFinder = () =>{
      switch (currentProductCategory) {
        case "laptopData":
              return laptopData
              case "tvData":
              return tvData
              case "cellphoneData":
              return cellphoneData
              case "hardwareData":
              return hardwareData
        default:
          break;
      }
    }
    useEffect(() => {
      dataFinder()
    }, []);
    const findData = [dataFinder().find(findId=>findId.id===currentProductId)]
    const addProductToCart = (product) =>{
      dispatch(setCartProduct(product))
      console.log(GeneralResponse.cartProducts);
    }
  return (
    <ScrollView style={{backgroundColor:"white",flex:1}}>
    <View style={styles.container}>
     {findData.map(maple=>(
        <View style={{width:"100%",height:200,marginTop:20,backgroundColor:"white"}}>
          <Text style={{marginVertical:20,marginHorizontal:20,fontWeight:"bold",textAlign:"center"}}>{maple.desc}</Text>
          <Image source={{uri:maple.image}} style={{height:"100%",width:"100%",resizeMode:"contain",marginBottom:20}}/>
          <TouchableHighlight onPress={()=> addProductToCart(maple)}>
            <View style={{height:50,backgroundColor:"whitesmoke",marginHorizontal:100,borderRadius:10,alignItems:"center",justifyContent:"center",flexDirection:"row",}}>
            <FontAwesomeIcon icon={faCartShopping} size={20} color="black"style={{marginRight:4}} />
            <Text style={{fontWeight:"bold"}}>Add to cart</Text>
            </View>
          </TouchableHighlight>
            <View style={{marginHorizontal:20,}}>
            <Image source={cards} style={{height:80,width:"100%",resizeMode:"contain",marginBottom:10}}/>
            <Text style={{fontSize:18,fontWeight:"bold"}}>About this item</Text>
            <Text>{maple.productInfo}</Text>
            </View>

        </View>
     ))}
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
  
     
  },
});
