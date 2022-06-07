import React, {useState} from 'react';
import Header from "./components/Header";
import Listitem from "./components/ListItem";
import AddItem from "./components/AddItem";


import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

const App = () => {

    const [items, setItems] = useState([
        {id: 1, text : 'i1'},
        {id: 2, text : 'i2'},
        {id: 3, text : 'i3'},
    ]);

    const handleDeleteItem = (id) => {
        setItems(prevItem => prevItem.filter(item => item.id != id));
    }
    const handleAddItem = (text) => {
        if (text)
            setItems(prevItem => [ ...prevItem, {id : prevItem.length + 1, text } ]);
    }

    return (
        <View style = {styles.ViewStyle}>
            <Header title={"My List"}/>
            <AddItem handleAddItem={handleAddItem} />
            <FlatList
                data = {items}
                renderItem = {({item}) =>
                    <Listitem item={item} handleDeleteItem={handleDeleteItem} />
                }
            />

        </View>
    )
};

const styles = StyleSheet.create ({
    ViewStyle: {
        flex: 1,
        paddingTop : 37,
    },
    texts : {
        color : 'black',
    }

});
export default App;
