import React, { forwardRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';
import STYLE from "./style";

const Buttons = ({ handleInputOperator, handleSumAll, handleClear }) => {
  return (
    <View style={STYLE.buttonArea}>
      <TouchableOpacity
        style={STYLE.button.operator.touch}
        onPress={() => handleInputOperator("+")}
      >
        <Text style={STYLE.button.operator.text}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={STYLE.button.operator.touch}
        onPress={() => handleInputOperator("-")}
      >
        <Text style={STYLE.button.operator.text}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={STYLE.button.operator.touch}
        onPress={() => handleInputOperator("*")}
      >
        <Text style={STYLE.button.operator.text}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={STYLE.button.operator.touch}
        onPress={() => handleInputOperator("/")}
      >
        <Text style={STYLE.button.operator.text}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={STYLE.button.operator.touch}
        onPress={() => handleInputOperator("=")}
      >
        <Text style={STYLE.button.operator.text}>=</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          STYLE.button.operator.touch,
          STYLE.button.operator.sumAll
        ]}
        onPress={handleSumAll}
      >
        <Text
          style={[
            STYLE.button.operator.text,
            STYLE.button.operator.textSumAll
          ]}
        >
          SUMALL
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={STYLE.button.clear.touch}
        onPress={handleClear}
      >
        <Text style={STYLE.button.clear.text}>CLEAR</Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ marginLeft: 10 }}>
          <Icon name="keyboard" size={20} color="#000" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Buttons;
