import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,FlatList,ScrollView,TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    return(
        <TouchableOpacity activeOpacity={0.1} onPress={() => props.onDelete(props.item.id)}>
            <View style={styles.listItem}>
                <Text>
                    {props.item.value}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },
});

export default GoalItem;