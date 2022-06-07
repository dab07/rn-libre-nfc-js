import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Button} from "react-native";

const Listitem = (props) => {
    const { item, handleDeleteItem } = props;

    return (
        <TouchableOpacity style = {styles.listitem}>
            <View style = {styles.listitemview}>
                <Text onPress={() => handleDeleteItem(item.id)}>
                    {item.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create ({
    listitem : {
        padding: 15,
        borderWidth: 1,
        borderColor : 'gray',
        backgroundColor: 'white',

    },
    listitemview : {
        display: "flex",
        flexDirection: 'column',
        justifyContent : 'space-between',
        textAlign : 'center',
        backgroundColor: 'white',
    },
    txts : {
        color : 'black',
        fontSize: 20,
        padding: 20,
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'black',
    },
    btn : {

    }
});

export default Listitem;
