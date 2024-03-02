import {useState} from "react";
import {ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import KBackButton from "../../components/KBackButton";
import KNavigateButton from "../../components/KNavigateButton";

export default function Register({navigation}) {

    const backgroundImage = require('C:\\Users\\Acer\\Desktop\\healthyHabits\\assets\\photos\\upBg.png');

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={registerStyles.container}>

            <ImageBackground
                source={backgroundImage}
                resizeMode={"cover"}
                style={registerStyles.background}>

                <View style={registerStyles.container1}>

                    <Text style={registerStyles.title}>Welcome to your{'\n'}fit journey!</Text>

                </View>

                <View style={registerStyles.container2}>

                    <View style={registerStyles.iconInput}>

                        <FontAwesome
                            name={"user"}
                            size={30}
                            color={'#081F5C'}
                            paddingRight={10}
                        />

                        <TextInput
                            style={registerStyles.userInput}
                            onChangeText={setUsername}
                            value={username}
                            placeholder="Enter a new username..."
                        />

                    </View>

                    <View style={registerStyles.iconInput}>

                        <FontAwesome
                            name={"lock"}
                            size={30}
                            color={'#081F5C'}
                            paddingRight={10}
                        />

                        <TextInput
                            style={registerStyles.userInput}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Enter a new password..."
                            secureTextEntry={true}
                        />

                    </View>

                </View>

                <View style={registerStyles.container3}>

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

const registerStyles = StyleSheet.create({
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
        paddingTop: '10%',
        textAlign: 'center'
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