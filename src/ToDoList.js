import React from "react";
import { FlatList } from "react-native";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <FlatList data={props.items} />
  );
}

export default ToDoList;