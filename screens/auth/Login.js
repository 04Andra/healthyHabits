import {ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import KBackButton from "../../components/KBackButton";
import {useState} from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import KNavigateButton from "../../components/KNavigateButton";

export default function Login({navigation}) {

    const backgroundImage = require('C:\\Users\\Acer\\Desktop\\healthyHabits\\assets\\photos\\upBg.png');

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={loginStyles.container}>

            <ImageBackground
                source={backgroundImage}
                resizeMode={"cover"}
                style={loginStyles.background}>

                <View style={loginStyles.container1}>

                    <Text style={loginStyles.title}>Welcome back!</Text>

                </View>

                <View style={loginStyles.container2}>

                    <View style={loginStyles.iconInput}>

                        <FontAwesome
                            name={"user"}
                            size={30}
                            color={'#081F5C'}
                            paddingRight={10}
                        />

                        <TextInput
                            style={loginStyles.userInput}
                            onChangeText={setUsername}
                            value={username}
                            placeholder="Enter your username..."
                        />

                    </View>

                    <View style={loginStyles.iconInput}>

                        <FontAwesome
                            name={"lock"}
                            size={30}
                            color={'#081F5C'}
                            paddingRight={10}
                        />

                        <TextInput
                            style={loginStyles.userInput}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Enter your password..."
                            secureTextEntry={true}
                        />

                    </View>

                </View>

                <View style={loginStyles.container3}>

                    <KBackButton
                        navigation={navigation}
                    />

                    <KNavigateButton
                        navigation={navigation}
                        screen={'SelectExercices'}
                        text={'NEXT'}
                    />

                </View>

            </ImageBackground>

        </View>
    );

}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container3: {
        flex: 0.3,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    title: {
        color: '#081F5C',
        fontSize: 32,
        paddingTop: '10%'
    },
    userInput: {
        height: '100%',
        width: '50%',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#081F5C',
    },
    iconInput: {
        flexDirection: 'row',
        paddingBottom: 20,
    },
});