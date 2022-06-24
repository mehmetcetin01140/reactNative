import React,{useState} from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import {useDispatch,useSelector} from "react-redux"
import {useNavigation, useRoute} from "@react-navigation/native"
const Pay = () => {
    const {GeneralResponse} = useSelector(state=>state)
    const navigation = useNavigation()
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [adress,setAdress] = useState(null)
  const [errorMessage,setErrorMessage] = useState()
        const checkIsEmpty = () => {
            if(!name && !surname && !adress){
                return setErrorMessage("Fill in the information")
            }
            else return navigation.navigate("Payment Complete")

            
        }
  return (
    <SafeAreaView>
        <ScrollView>
            <Text style={{textAlign:"center",marginTop:10,fontWeight:"bold"}}>Cost : {GeneralResponse.reducedTotalCost} $</Text>
            <View style={{marginTop:10}}>
            <CreditCardInput/>
            </View>
        <Text style={{color:"red",marginLeft:15,marginTop:10}}>{errorMessage}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Name"
        value={name}
      />
       <TextInput
        style={styles.input}
        onChangeText={setSurname}
        placeholder="Surname"
        value={surname}
      />
      <TextInput
        style={styles.input}
        onChangeText={setAdress}
        value={adress}
        placeholder="Adress"
      />
         <View style={{justifyContent:"center",flexDirection:"row",marginBottom:5}}>
            <TouchableOpacity onPress={checkIsEmpty}
            style={{backgroundColor:"green",width:80,height:40,justifyContent:"center",alignItems:"center",borderRadius:"5px",}}>
                <Text style={{color:"white",fontWeight:"bold"}}>
                    Confirm
                </Text>
            </TouchableOpacity>
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
});

export default Pay;