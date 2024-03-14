import React, {useState} from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import KBackButton from "../components/KBackButton";
import KNavigateButton from "../components/KNavigateButton";
import {SelectList} from "react-native-dropdown-select-list/index";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function SelectExercises({navigation}) {

    const backgroundImage = require('../assets/photos/chooseExercice.png');

    const [selected, setSelected] = React.useState("");

    const data = [
        {key: '1', value: 'Mobiles'},
        {key: '2', value: 'Appliances'},
        {key: '3', value: 'Cameras'},
        {key: '4', value: 'Computers'},
        {key: '5', value: 'Vegetables'},
        {key: '6', value: 'Diary Products'},
        {key: '7', value: 'Drinks'},
    ]

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

                    <SelectList
                        setSelected={setSelected}
                        data={data}
                        save="value"
                        placeholder={"Choose a type..."}
                        inputStyles={{
                            fontSize: 16
                        }}
                        boxStyles={{
                            width: '80%',
                            borderColor: '#081F5C',
                            marginBottom: 10,
                        }}
                        dropdownStyles={{backgroundColor: '#D0E3FF'}}
                        searchicon={
                            <MaterialIcons
                                name="sports-gymnastics"
                                size={30}
                                color={'#081F5C'}
                                marginRight={10}
                            />
                        }

                    />

                    <SelectList
                        setSelected={setSelected}
                        data={data}
                        save="value"
                        placeholder={"Choose a muscle..."}
                        inputStyles={{
                            fontSize: 16
                        }}
                        boxStyles={{
                            width: '80%',
                            borderColor: '#081F5C',
                            marginBottom: 10
                        }}
                        dropdownStyles={{backgroundColor: '#D0E3FF'}}
                        searchicon={
                            <MaterialCommunityIcons
                                name="arm-flex"
                                size={30}
                                color={'#081F5C'}
                                marginRight={10}
                            />}

                    />

                    <SelectList
                        setSelected={setSelected}
                        data={data}
                        save="value"
                        placeholder={"Choose dificulty..."} az
                        inputStyles={{
                            fontSize: 16
                        }}
                        boxStyles={{
                            width: '80%',
                            borderColor: '#081F5C'
                        }}
                        dropdownStyles={{backgroundColor: '#D0E3FF'}}
                        searchicon={
                            <FontAwesome5
                                name="sort-amount-up"
                                size={30}
                                color={'#081F5C'}
                                marginRight={10}
                            />}

                    />

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
        flex: 1.5,
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
    iconInput: {
        flexDirection: 'row',
        paddingBottom: 20,
    },
});
