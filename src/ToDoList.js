import React from 'react';
import { FlatList } from 'react-native';
import ToDoItem from './ToDoItem';

function ToDoList({ items, onComplete, onDelete }) {
  const renderItem = ({ item }) => {
    return (
      <ToDoItem
        item={item}
        onComplete={onComplete}
        onDelete={onDelete}
      />
    );
  };

  return (
    <FlatList
      testID="toDoList"
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export default ToDoList;
