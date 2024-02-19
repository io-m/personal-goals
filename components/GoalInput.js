import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
  Platform,
} from 'react-native';
import React from 'react';

const GoalInput = ({
  currentGoal,
  goalInputHandler,
  addGoalHandler,
  modalVisible,
  setModalVisible,
}) => {
  const buttonColor = Platform.OS === 'android' ? '#5e0acc' : 'white';
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.input}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal"
          value={currentGoal}
        />
        <View style={styles.buttons}>
          <Button
            onPress={() => addGoalHandler(currentGoal)}
            title="Add goal"
            color={buttonColor}
          />
          <Button
            onPress={() => setModalVisible(false)}
            title="Dismiss"
            color={'#f31282'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 16,
    borderRadius: 4,
    marginRight: 8,
    width: '100%',
    color: 'white',
    backgroundColor: '#e4d0ff',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 120,
    height: 120,
  },
});
