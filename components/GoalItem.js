import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GoalItem = ({ goal, removeItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={() => removeItem(goal)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.text}>{goal}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  text: {
    color: 'white',
    padding: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
