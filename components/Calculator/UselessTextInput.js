import React from "react";
import { TextInput } from "react-native";

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={200}
    />
  );
};

export default UselessTextInput;
