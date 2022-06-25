import React,{useState} from 'react'
import {  ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Text, Image,  } from "react-native";
import {useDispatch,} from "react-redux"
import {useNavigation,} from "@react-navigation/native"
import {setCurrentProductId} from "./redux/action"
import data from "./data.json"
export default function Search() {
    const [searchValue,setSearchValue] = useState(null)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const filterProduct = (param) => {
      return searchValue ? data.filter(product => product.desc.toLowerCase().includes(param?.toLowerCase())) : []
    }
    const goToProduct = (id,category) =>{
     dispatch(setCurrentProductId(id,category))
      navigation.navigate("Product")
     }
        
  return (
  <View>
    <ScrollView>
  <TextInput
        style={styles.input}
        onChangeText={setSearchValue}
        placeholder="Name"
        value={searchValue}
      />  
      {filterProduct(searchValue).map(cartItem=>(
        <>
        <TouchableOpacity onPress={()=>goToProduct(cartItem.id,cartItem.productCategory)} key={cartItem.id}>
          <View style={{flexDirection:"row",alignItems:"center",marginBottom:15}}>
                    <Image source={{uri:cartItem.image}} style={{height:50,width:50,resizeMode:"contain"}} />
                    <Text style={{marginLeft:10,marginRight:20}} >{cartItem.desc}</Text>
                </View>
                
                <Text style={{textAlign:"center",fontWeight:"bold",marginBottom:15}} >{cartItem.price}</Text>
     </TouchableOpacity>
        </>
      ))}
      </ScrollView>
      </View>
  )
  
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:10
    },
  });