import React from "react";
import { TextInput } from "react-native";

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={200}
      placeholder='비행기표 = 1000000&#13;&#10;숙박비 = 250000&#13;&#10;여행경비 = 비행기표 + 숙박비'
    />
  );
};

export default UselessTextInput;
