import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";

function AddToDo({ onAdded }) {
  const [value, setValue] = useState("");

  const _onAdded = function() {
    onAdded(value);
  }

  return (
    <View>
      <TextInput value={value} onChangeText={setValue} />
      <Button onPress={_onAdded} />
    </View>
  );
}

export default AddToDo;