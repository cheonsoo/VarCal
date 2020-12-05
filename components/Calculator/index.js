import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Card } from "react-native-material-ui";
import { ModalLayerFactory } from "react-native-modal-layer";

import UselessTextInput from "components/Calculator/UselessTextInput";
import UserManual from "components/UserManual";

import PARSER from "libs/varCal/parser";
import * as UTILS from "utils/index";
import STYLES from "./styles";

const FONT_SIZE = 15;

let layer = null;

const Calculator = () => {
  const [value, setText] = useState("");
  const [converted, setConverted] = useState({});
  const [parsed, setParsed] = useState([]);

  useEffect(() => {
    layer = ModalLayerFactory.create({
      component: <UserManual />
    });
  });

  const handleChangeText = (text) => {
    setText(text);
  };

  const handleKeyUp = (evt) => {
    if (evt.nativeEvent.key === "Enter") {
      const arr = value.split("\n");

      const parsed = PARSER.parse(arr);
      const variables = PARSER.getVariables(parsed);

      try {
        parsed
          .filter((item) => item.type === "equation")
          .forEach((item) => {
            const converted = PARSER.getEquation(variables, item.name);

            if (converted !== "") {
              item.converted = converted;
              item.value = eval(converted);
            }
          });
      } catch (e) {
        console.log(e);
      }

      setParsed(parsed);
    }
  };

  const handleClear = (evt) => {
    setText("");
    setParsed([]);
  };

  const handleOpenInfo = (evt) => {
    layer.show();
  };

  const renderItems = () => {
    const items = [];

    for (let i = 0; i < parsed.length; i++) {
      const item = parsed[i];

      items.push(
        <View
          key={item.idx}
          style={{
            height: 18
          }}
        >
          <Text
            key={item.idx}
            style={{
              width: "100%",
              height: "100%",
              color: "#2471A3",
              fontSize: FONT_SIZE,
              fontWeight: "bold",
              textAlign: "right"
            }}
          >
            {UTILS.getNumberFormat(item.value)}
          </Text>
        </View>
      );
    }

    return items;
  };

  return (
    <View style={STYLES.calculatorContainer}>
      <View style={STYLES.buttonArea}>
        <View style={STYLES.buttonArea1}>
          <TouchableOpacity
            style={STYLES.button.clear.touch}
            onPress={handleClear}
          >
            <Text style={STYLES.button.clear.text}>CLEAR</Text>
          </TouchableOpacity>
        </View>
        <View style={STYLES.buttonArea2}>
          <TouchableOpacity
            style={STYLES.button.info.touch}
            onPress={handleOpenInfo}
          >
            <Text style={STYLES.button.info.text}>?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={STYLES.contentArea}>
        <View style={STYLES.textArea}>
          <UselessTextInput
            style={STYLES.textInput}
            multiline
            numberOfLines={20}
            onChangeText={handleChangeText}
            onKeyPress={handleKeyUp}
            value={value}
          />
        </View>

        <View style={STYLES.resultArea}>{renderItems()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    width: "100%"
  }
});

export default Calculator;
