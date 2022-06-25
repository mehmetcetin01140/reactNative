import React from 'react'
import {Text,View,TouchableOpacity,Image} from "react-native"
import { useSelector,useDispatch } from 'react-redux'
import { setCurrentProductId } from './redux/action'
import {useNavigation} from "@react-navigation/native"
import Data from "./data.json"
export default function CategoryScreen() {
    const {GeneralResponse} = useSelector(state=>state)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const selectedCategory= GeneralResponse.selectedCategory
    const listProducts = () => {
        switch (selectedCategory) {
            case "Cellphone":
                return "cellphoneData"
            case "Tv":
                return "tvData"
            case "Computer":
                return "laptopData"
            case "Hardware":
                return "hardwareData"
            default:
                break;
        }
    }
    const filteredProducts = Data.filter(category => category.productCategory.includes(listProducts()))
    const goToProduct = (id,category) =>{
        dispatch(setCurrentProductId(id,category))
         navigation.navigate("Product")
        }
  return (
  <View style={{flex:1}}>
        <Text style={{textAlign:"center",fontWeight:"bold",marginVertical:15,fontSize:16}}>{selectedCategory}</Text>
        {filteredProducts.map(cartItem=>(

        <TouchableOpacity key={cartItem.id} onPress={()=>goToProduct(cartItem.id,cartItem.productCategory)}>
       <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:15,marginBottom:8}}>
                 <Image source={{uri:cartItem.image}} style={{height:50,width:50,resizeMode:"contain"}} />
                 <Text style={{marginLeft:10,marginRight:50}} >{cartItem.desc}</Text>
             </View>
           <Text style={{textAlign:"center",marginBottom:15,fontWeight:"bold"}}>{cartItem.price}</Text>
  </TouchableOpacity>

        ))}
  </View>
  )
}
