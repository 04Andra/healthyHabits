import React, {useContext, useEffect, useState} from "react";
import {Button, ImageBackground, StyleSheet, Text, View} from "react-native";
import KBackButton from "../components/KBackButton";
import KNavigateButton from "../components/KNavigateButton";
import {SelectList} from "react-native-dropdown-select-list/index";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {fetchDataGetExercise} from "../fetchData/FetchExerciseData";
import {MyContext} from "../context/MyContext";
import KSelectListObject from "../components/KSelectListObject";

export default function SelectExercises({navigation}) {

    const backgroundImage = require('../assets/photos/chooseExercice.png');

    const {selectDataType, setSelectDataType} = useContext(MyContext)
    const {selectDataMuscle, setSelectDataMuscle} = useContext(MyContext)
    const {selectDataDifficulty, setSelectDataDifficulty} = useContext(MyContext)

    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetchDataGetExercise().then((response) => {
            setExercises(response);
        }).catch(e => {
            alert("Api can't be accessed");
            console.log(e)
        })
    }, []);


    const uniqueValuesType = new Set();
    const uniqueValuesMuscle = new Set();
    const uniqueValuesDifficulty = new Set();

    const dataType = exercises.map((element, index) => {
        const value = element.type;
        if (!uniqueValuesType.has(value)) {
            uniqueValuesType.add(value);
            return {"key": index, "value": value};
        }
        return null;
    }).filter(element => element !== null);

    const dataMuscle = exercises.map((element, index) => {
        const value = element.muscle;
        if (!uniqueValuesMuscle.has(value)) {
            uniqueValuesMuscle.add(value);
            return {"key": index, "value": value};
        }
        return null;
    }).filter(element => element !== null);

    const dataDifficulty = exercises.map((element, index) => {
        const value = element.difficulty;
        if (!uniqueValuesDifficulty.has(value)) {
            uniqueValuesDifficulty.add(value);
            return {"key": index, "value": value};
        }
        return null;
    }).filter(element => element !== null);


    return (
        <View style={selectExercisesStyles.container}>

            <ImageBackground
                source={backgroundImage}
                resizeMode={"cover"}
                style={selectExercisesStyles.background}>

                <View style={selectExercisesStyles.container1}>

                    <Text style={selectExercisesStyles.title}>Let’s start!</Text>

                </View>

                <View style={selectExercisesStyles.container2}>

                    <KSelectListObject
                        setSelected={setSelectDataType}
                        data={dataType}
                        placeHolder={"Choose a type..."}
                        iconName={"dumbbell"}
                    />

                    <KSelectListObject
                        setSelected={setSelectDataMuscle}
                        data={dataMuscle}
                        placeHolder={"Choose a muscle..."}
                        iconName={"arm-flex"}
                    />

                    <KSelectListObject
                        setSelected={setSelectDataDifficulty}
                        data={dataDifficulty}
                        placeHolder={"Choose difficulty..."}
                        iconName={"chart-line"}
                    />

                </View>

                <View style={selectExercisesStyles.container3}>

                    <KBackButton
                        navigation={navigation}
                    />

                    <KNavigateButton
                        navigation={navigation}
                        screen={'DailyExercises'}
                        text={'NEXT'}
                    />

                </View>

            </ImageBackground>

        </View>
    );

}

const selectExercisesStyles = StyleSheet.create({
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
