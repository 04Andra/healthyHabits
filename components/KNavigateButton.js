import {StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";

export default function KNavigateButton({text, screen, navigation}) {

    return (

        <View style={buttonStyles.container}>

            <TouchableOpacity style={buttonStyles.buttonProp}
                              onPress={() => navigation.navigate(screen)}>

                <Text style={buttonStyles.text}>{text}</Text>

            </TouchableOpacity>

        </View>

    )

}

const buttonStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonProp: {
        backgroundColor: '#081F5C',
        width: 85,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
    text: {
        color: '#F7F2EB',
        fontSize: 16,
    },
});