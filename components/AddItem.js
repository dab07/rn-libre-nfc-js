import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Button} from "react-native";

const AddItem = (props) => {
    const { handleAddItem } = props;
    const [text, setText] = useState("");
    const onChange = textValue => setText(textValue);
    return (
            <View>
                <TextInput placeholder="Add item" style={styles.inputxt}
                    onChangeText={onChange} value={text}
                />
                <TouchableOpacity style={styles.btn}>
                    <Button onPress={() => {
                        handleAddItem(text);
                        setText("");
                    }} style={styles.txt} title="Add Item" />
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create ({
    inputxt : {
        padding: 8,
        height: 60,
        fontSize: 20,
    },
    btn: {
        padding: 6,
        backgroundColor: 'lightblue'
    },
    txt: {
        fontSize: 35,
        textAlign: 'center',
    }
});

export default AddItem;
