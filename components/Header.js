import React from 'react';
import {StyleSheet, View, Text} from "react-native";

const Header = ({title}) => {

    return (
        <View style = {styles.headerstyle}>
            <Text style={styles.text}> {title} </Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    headerstyle: {
        height : 90,
        paddingTop: 14,
        backgroundColor : 'skyblue',
    },
    text : {
        fontSize: 50,
        color : 'black',
        textAlign : 'center',
    }

});
export default Header;
