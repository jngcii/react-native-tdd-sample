import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";

function AddToDo({ onAdd }) {
  const [value, setValue] = useState("");

  const onAddItem = () => {
    onAdd(value);
  }

  return (
    <View>
      <TextInput testID="textInput" value={value} onChangeText={setValue} />
      <Button testID="addButton" onPress={onAddItem} title="A" />
    </View>
  );
}

export default AddToDo;