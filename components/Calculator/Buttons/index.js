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
import STYLES from "./styles";

const Buttons = ({ handleInputOperator, handleSumAll, handleClear }) => {
  return (
    <View style={STYLES.buttonArea}>
      {/* <View style={STYLES.buttonArea1}> */}
        <TouchableOpacity
          style={STYLES.button.operator.touch}
          onPress={() => handleInputOperator("+")}
        >
          <Text style={STYLES.button.operator.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={STYLES.button.operator.touch}
          onPress={() => handleInputOperator("-")}
        >
          <Text style={STYLES.button.operator.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={STYLES.button.operator.touch}
          onPress={() => handleInputOperator("*")}
        >
          <Text style={STYLES.button.operator.text}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={STYLES.button.operator.touch}
          onPress={() => handleInputOperator("/")}
        >
          <Text style={STYLES.button.operator.text}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={STYLES.button.operator.touch}
          onPress={() => handleInputOperator("=")}
        >
          <Text style={STYLES.button.operator.text}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            STYLES.button.operator.touch,
            STYLES.button.operator.sumAll
          ]}
          onPress={handleSumAll}
        >
          <Text
            style={[
              STYLES.button.operator.text,
              STYLES.button.operator.textSumAll
            ]}
          >
            SUMALL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={STYLES.button.clear.touch}
          onPress={handleClear}
        >
          <Text style={STYLES.button.clear.text}>CLEAR</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ marginLeft: 10 }}>
            <Icon name="keyboard" size={20} color="#000" />
          </View>
        </TouchableWithoutFeedback>
      {/* </View> */}
    </View>
  );
};

export default Buttons;
