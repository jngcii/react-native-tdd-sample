import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function ToDoItem({ item, onComplete, onDelete }) {
  const onPressComplete = () => {
    onComplete(item.id);
  };

  const onPressDelete = () => {
    onDelete(item.id);
  };

  return (
    <View style={item.completed ? styles.completed : styles.default}>
      <Text testID={item.completed ? "completed" : "uncompleted"}>{item.keyword}</Text>
      <Button testID="completeButton" title="B" onPress={onPressComplete} />
      <Button testID="deleteButton" title="C" onPress={onPressDelete} />
    </View>
  );
}

export const styles = StyleSheet.create({
  default: {
    backgroundColor: "white",
  },
  completed: {
    backgroundColor: "red",
  }
});

export default ToDoItem;