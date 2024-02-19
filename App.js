import { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [currentGoal, setCurrentGoal] = useState('');
  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const goalInputHandler = (enteredText) => {
    setCurrentGoal(enteredText);
  };
  const removeItem = (itemToDelete) => {
    setGoalList((prev) => [...prev.filter((item) => item !== itemToDelete)]);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const addGoalHandler = (goalToAdd) => {
    if (!goalToAdd) return;
    setGoalList((prev) => [...prev, goalToAdd]);
    setCurrentGoal('');
    setModalVisible(false);
  };
  return (
    <View style={styles.root}>
      <Button color={'#5e0acc'} title="Add new goal" onPress={openModal} />
      <GoalInput
        currentGoal={currentGoal}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={styles.goalsList}>
        <Text style={styles.textTitle}>My goals</Text>
        <FlatList
          keyExtractor={(item, index) => `${item}-${index}`}
          data={goalList}
          renderItem={({ item }) => (
            <GoalItem goal={item} removeItem={removeItem} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  goalsList: {
    flex: 7,
  },

  textTitle: {
    fontSize: 24,
    marginBottom: 8,
  },
});
