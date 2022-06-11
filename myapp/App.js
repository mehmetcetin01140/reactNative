import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView,Button} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack" 
import {NavigationContainer} from "@react-navigation/native" 
import HomeScreen from "./src/components/Home"
import {useNavigation, useRoute} from "@react-navigation/native"
export default function App() {
  const stack = createNativeStackNavigator()
  return (
  
  <SafeAreaView style={styles.background}>
   <NavigationContainer>
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="Home" component={HomeScreen}/>
    </stack.Navigator>
  </NavigationContainer>
    <StatusBar style="auto" />
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    flexDirection:"column"
  },
});
