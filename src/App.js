import React from 'react';
import { View, Text } from 'react-native';
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

export default () => {
  return (
    <View>
      <Text>To Do List</Text>
      <AddToDo />
      <ToDoList />
    </View>
  );
}