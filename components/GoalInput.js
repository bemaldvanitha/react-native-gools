import React,{useState} from 'react';
import {Button, TextInput, View,StyleSheet,Modal} from "react-native";

const GoalInput = (props) => {
    const [enterGoal,setEnterGoal] = useState('');
    const goalInputHandler = (text)  => {
        setEnterGoal(text)
    };

    return(
        <Modal visible={props.isShowModel} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="course goal" style={styles.input} onChangeText={goalInputHandler}/>
                <Button title="Add" onPress={() => props.onAddGoal(enterGoal)}/>
                <Button onPress={props.onCancel} title="cancel" color="red"/>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        width: 200
    },
});

export default GoalInput;