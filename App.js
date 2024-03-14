import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import DailyExercises from "./screens/DailyExercises";
import Home from "./screens/Home";
import Rewards from "./screens/Rewards";
import SelectExercices from "./screens/SelectExercices";
import SelectExercises from "./screens/SelectExercices";

export default function App() {
    const Stack = createNativeStackNavigator()
    return (

        <NavigationContainer>


            {<Stack.Navigator initialRouteName={Home}>
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
                <Stack.Screen options={{headerShown: false}} name="Register" component={Register}/>
                <Stack.Screen options={{headerShown: false}} name="SelectExercises" component={SelectExercises}/>
                <Stack.Screen options={{headerShown: false}} name="DailyExercices" component={DailyExercises}/>
                <Stack.Screen options={{headerShown: false}} name="Rewards" component={Rewards}/>
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
