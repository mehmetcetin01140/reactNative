import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView,Button} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack" 
import {NavigationContainer} from "@react-navigation/native" 
import HomeScreen from "./src/components/Home"
import Footer from "./src/components/Footer"
import Cart from "./src/components/Cart"
import {useNavigation, useRoute} from "@react-navigation/native"
import {Provider} from "react-redux"
import {createStore} from "redux"
import reducers from "./src/components/redux"
import ProductScreen from './src/components/ProductScreen';
export default function App() {
  const stack = createNativeStackNavigator()
  const store = createStore(reducers)
  return (
    <Provider store={store}>
  <SafeAreaView style={styles.background}>
   <NavigationContainer>
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="Home" component={HomeScreen}/>
      <stack.Screen name="Product" component={ProductScreen}/>
      <stack.Screen name="Cart" component={Cart}/>
    </stack.Navigator>
   <Footer/>
  </NavigationContainer>
    <StatusBar style="auto" />
  </SafeAreaView>
  </Provider>

  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    flexDirection:"column",
  },
});
