import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function ToDoItem({ item, onComplete, onDelete }) {
  const onPressComplete = function() {
    onComplete(item.id);
  }

  const onPressDelete = function() {
    onDelete(item.id);
  }

  return (
    <View style={item.completed ? styles.completed : styles.default}>
      <Text></Text>
      <Button onPress={onPressComplete}></Button>
      <Button onPress={onPressDelete}></Button>
    </View>
  )
}

export const styles = StyleSheet.create({
  default: {
    backgroundColor: "white",
  },
  completed: {
    backgroundColor: "red",
  }
})

export default ToDoItem;