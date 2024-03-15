import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SelectList} from "react-native-dropdown-select-list/index";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function KSelectListObject({setSelected, data, placeHolder, iconName}) {

    return (

        <View style={selectListStyles.container}>

            <SelectList
                setSelected={setSelected}
                data={data}
                save="value"
                placeholder={placeHolder}
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
                    <MaterialCommunityIcons
                        name={iconName}
                        size={30}
                        color={'#081F5C'}
                        marginRight={10}
                    />
                }

            />

        </View>

    )

}

const selectListStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});