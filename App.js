import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,FlatList,ScrollView } from 'react-native';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals,setGoals] = useState([]);
  const [isAddMode,setIsAddMode] = useState(false);
  const addGoalHandler = (goal) => {
      setGoals(prevState => {
        return [...prevState,{id: Math.random().toString(),value: goal}]
      })
      setIsAddMode(false)
  };

  const deleteHandler = (id) => {
      setGoals(prevState => {
          return prevState.filter((item) => id !== item.id)
      })
  };
  const cancelHandler = () => {
      setIsAddMode(false);
  };
  return (
      <View style={styles.screen}>
          <Button title="add new goal" onPress={() => setIsAddMode(true)} />
          <GoalInput onAddGoal={addGoalHandler} isShowModel={isAddMode} onCancel={cancelHandler}/>
            <View>
                <FlatList data={courseGoals} keyExtractor={(item) => item.id} renderItem={itemData => {
                    return(
                        <GoalItem item={itemData.item} onDelete={deleteHandler}/>
                    )
                }}/>
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
});
