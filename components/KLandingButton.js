import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function KLandingButton({text, screen, navigation}) {

    return (

            <TouchableOpacity style={buttonStyles.buttonProp}
                              onPress={() => navigation.navigate(screen)}>

                <Text style={buttonStyles.text}>{text}</Text>

            </TouchableOpacity>

    )

}

const buttonStyles = StyleSheet.create({

    buttonProp: {
        backgroundColor: '#081F5C',
        width: "40%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
    text: {
        color: '#F7F2EB',
        fontSize: 16,
    },
});