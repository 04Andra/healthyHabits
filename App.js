import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import DailyExercises from "./screens/DailyExercises";
import DoExercise from "./screens/DoExercise";
import Progress from "./screens/Progress";

export default function App() {
  const Stack = createNativeStackNavigator()
  return (

      <NavigationContainer>

        {true? <Stack.Navigator initialRouteName={Login}>
              <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
              <Stack.Screen options={{headerShown: false}} name="Register" component={Register}/>
          </Stack.Navigator>
      : <Stack.Navigator initialRouteName={DailyExercises}>
              <Stack.Screen options={{headerShown: false}} name="DailyExercices" component={DailyExercises}/>
              <Stack.Screen options={{headerShown: false}} name="DoExercise" component={DoExercise}/>
              <Stack.Screen options={{headerShown: false}} name="Progress" component={Progress}/>
          </Stack.Navigator>
      }

      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
