import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

export default () => {
  const [items, setItems] = useState([]);

  const onAdd = (text) => {
    setItems([{ id: Date.now(), keyword: text, completed: false }, ...items]);
  };

  const onComplete = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) return {...item, completed: true};
      return item;
    });
    setItems(newItems);
  };

  const onDelete = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  return (
    <View testID="testRoot">
      <Text>To Do List</Text>
      <AddToDo onAdd={onAdd} />
      <ToDoList items={items} onComplete={onComplete} onDelete={onDelete} />
    </View>
  );
};
