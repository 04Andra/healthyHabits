import {ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import CheckBox from 'expo-checkbox';
import KBackButton from "../components/KBackButton";
import KNavigateButton from "../components/KNavigateButton";
import {MyContext} from "../context/MyContext";
import {fetchDataGetExercise} from "../fetchData/FetchExerciseData";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export default function DailyExercises({navigation}) {

    const backgroundImage = require('../assets/photos/doExercice.png');

    const [modalValue, setModalValue] = useState(false);
    const [exercises, setExercises] = useState([])

    const {selectDataMuscle, setSelectDataMuscle} = useContext(MyContext)

    useEffect(() => {
        fetchDataGetExercise().then((response) => {
            setExercises(response);
        }).catch(e => {
            alert("Api can't be accessed");
            console.log(e)
        })
    }, []);

    const checkboxText = exercises.map((item, index) => {
        if (item.muscle === selectDataMuscle) {
            return ({"key": index, "value": item.name});
        }
    }).filter(item => item !== undefined);

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={dailyExercisesStyles.container}>

            <ImageBackground
                source={backgroundImage}
                resizeMode={"cover"}
                style={dailyExercisesStyles.background}>

                <View style={dailyExercisesStyles.containerTitlu}>

                    <Text style={dailyExercisesStyles.title}>You can do it!</Text>

                </View>

                <View style={dailyExercisesStyles.bigContainer}>

                    {checkboxText.map((item, index) => {

                        return (
                            <View key={index}>

                                <TouchableOpacity style={dailyExercisesStyles.littleContainer}
                                                  onPress={() => {
                                                      exercises.map((element) => {
                                                          if (element.name === item.value) {
                                                              setModalValue(item.value)
                                                              setModalVisible(true)
                                                          }
                                                      })
                                                  }}>

                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            setModalVisible(!modalVisible);
                                        }}>
                                        <View style={dailyExercisesStyles.modalView}>

                                            <TouchableOpacity
                                                onPress={() => setModalVisible(!modalVisible)}>
                                                <SimpleLineIcons
                                                    name="arrow-down"
                                                    color="#081F5C"
                                                    size={28}
                                                    style={{marginBottom: 10}}
                                                />
                                            </TouchableOpacity>

                                            <Text style={dailyExercisesStyles.textBox}>{
                                                exercises.map((element) => {
                                                    if (element.name === modalValue) {
                                                        return element.instructions
                                                    }
                                                })
                                            }</Text>
                                        </View>
                                    </Modal>

                                    <Text style={dailyExercisesStyles.textBox}>{item.value}</Text>

                                </TouchableOpacity>

                            </View>

                        )
                    })}

                </View>

                <View style={dailyExercisesStyles.containerButoane}>

                    <KBackButton
                        navigation={navigation}
                    />

                    <KNavigateButton
                        navigation={navigation}
                        screen={'Rewards'}
                        text={'PROFILE'}
                    />

                </View>

            </ImageBackground>

        </View>
    );

}

const dailyExercisesStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
    },
    containerTitlu: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    title: {
        color: '#081F5C',
        fontSize: 32,
        paddingBottom: '20%'
    },
    bigContainer: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: "flex-start",
        marginBottom: 20,
    },
    littleContainer: {
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
        width: 300,
        height: 50,
        backgroundColor: '#7096D1',
        borderRadius: 4,
        gap: 10,
        marginBottom: 15

    },
    containerButoane: {
        flex: 0.3,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    textBox: {
        fontSize: 16,
        color: '#081F5C'
    },
    checkboxStyle: {
        backgroundColor: '#F7F2EB',
        borderColor: '#F7F2EB',
        width: 25,
        height: 25
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});