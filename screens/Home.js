import {ImageBackground, StyleSheet, Text, View} from "react-native";
import KNavigateButton from "../components/KNavigateButton";
import KLandingButton from "../components/KLandingButton";

export default function Home({navigation}) {

    const backgroundImage = require('../assets/photos/home.png');

    return (
        <View style={homeStyles.container}>

            <ImageBackground source={backgroundImage}
                             resizeMode={"cover"}
                             style={homeStyles.background}>

                <View style={homeStyles.container1}>

                </View>

                <View style={homeStyles.container2}>

                    <KLandingButton text={"LOGIN"}
                                     screen={"Login"}
                                     navigation={navigation}/>

                    <Text>You don't have an account?</Text>

                    <KLandingButton text={"REGISTER"}
                                     screen={"Register"}
                                     navigation={navigation}/>

                </View>

            </ImageBackground>

        </View>
    );

}

const homeStyles = StyleSheet.create({
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
        marginTop: 40,
        gap: 5
    },
    text: {
        color: '#081F5C',
        fontSize: 16,
    },
});