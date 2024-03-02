import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function KBackButton({navigation}) {

    return (

        <View style={buttonStyles.container}>

            <TouchableOpacity style={buttonStyles.buttonProp}
                              onPress={() => navigation.goBack()}>

                <Text style={buttonStyles.text}>BACK</Text>

            </TouchableOpacity>

        </View>

    )

}

const buttonStyles = StyleSheet.create({
    container: {
        flex: 1,
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