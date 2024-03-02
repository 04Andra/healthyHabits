import {useState} from "react";
import {ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import KBackButton from "../components/KBackButton";
import KNavigateButton from "../components/KNavigateButton";

export default function SelectExercices({navigation}) {

    const backgroundImage = require('../assets/photos/chooseExercice.png');

    return (
        <View style={selectExercicesStyles.container}>

            <ImageBackground
                source={backgroundImage}
                resizeMode={"cover"}
                style={selectExercicesStyles.background}>

                <View style={selectExercicesStyles.container1}>

                    <Text style={selectExercicesStyles.title}>Let’s start!</Text>

                </View>

                <View style={selectExercicesStyles.container2}>

                    <View style={selectExercicesStyles.iconInput}>

                    </View>

                    <View style={selectExercicesStyles.iconInput}>

                    </View>

                </View>

                <View style={selectExercicesStyles.container3}>

                    <KBackButton
                        navigation={navigation}
                    />

                    <KNavigateButton
                        navigation={navigation}
                        screen={'DailyExercices'}
                        text={'NEXT'}
                    />

                </View>

            </ImageBackground>

        </View>
    );

}

const selectExercicesStyles = StyleSheet.create({
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