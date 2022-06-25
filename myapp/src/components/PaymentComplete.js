import React,{useState,useEffect} from 'react'
import { View , Text} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons/faThumbsUp'
import {useNavigation, useRoute} from "@react-navigation/native"
export default function PaymentComplete() {
    
    const navigation = useNavigation()
    const [timer,setTimer] = useState(5)
    
    useEffect(() => {

        setTimeout(() => {

            navigation.navigate("Home")

        }, 5000);

        setInterval(() => {

            setTimer((timer)=>timer-1)

        }, 1000);

     }, []);

  return (
    <>
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
       <FontAwesomeIcon icon={faThumbsUp} size={40} color='green'/>
        <Text style={{fontWeight:"bold",marginTop:5}}>Payment Successful</Text>
        <Text>You will redirect to Home Page in {timer} seconds.</Text>
    </View>
    </>
  )
}
