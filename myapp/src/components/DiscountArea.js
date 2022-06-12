import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions,Button} from 'react-native'
export default function DiscountArea() {
  return (
    <View style={{marginHorizontal:5,marginTop:10}}>
        <Image source={{uri:"https://www.parallels.com/blogs/app/uploads/2021/06/bday21-single-post-header-1140x300-1-1140x300.jpg"}} style={{height:110,width:"100%",resizeMode:"strecth",marginBottom:10,borderRadius:5}}/>
        <Image source={{uri:"https://camo.envatousercontent.com/7da738e204552841b26e6277329c89c1d6086328/68747470733a2f2f73616d612d77702e636f6d2f6d656469612f6f666665722d62616e6e65722e6a7067"}} style={{height:110,width:"100%",resizeMode:"stretch",borderRadius:5}}/>
    </View>
  )
}
