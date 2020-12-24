import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { ModalLayerFactory } from "react-native-modal-layer";

import UselessTextInput from "components/Calculator/UselessTextInput";
import UserManual from "components/UserManual";

import PARSER from "libs/varCal/parser";
import * as UTILS from "utils/index";
import STYLES from "./styles";

const FONT_SIZE = 15;

let layer = null;

const Calculator = ({ data, onChange }) => {
  const [value, setText] = useState("");
  const [converted, setConverted] = useState({});
  const [parsed, setParsed] = useState([]);
  const [selection, setSelection] = useState({});
  const textAreaRef = useRef();

  useEffect(() => {
    layer = ModalLayerFactory.create({
      component: <UserManual />
    });
  });

  useEffect(() => {
    handleParse();
  }, [value]);

  useEffect(() => {
    // console.log(data);
    setText(data);
  }, [data]);

  const handleChangeText = (text) => {
    setText(text);
    onChange(text);
  };

  const handleKeyUp = (evt) => {
    // console.log("### keyUp");
    // if (evt.nativeEvent.key === "Enter") {
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

    console.log(parsed);

    setParsed(parsed);
    // }
  };

  const handleParse = () => {
    if (!value) return;

    try {
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
              try {
                item.value = eval(converted);
              } catch (e) {
                item.value = "";
              }
            }
          });
      } catch (e) {
        console.log(e);
      }

      setParsed(parsed);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputOperator = (_operator) => {
    const left = value.substring(0, selection.start);
    const right = value.substring(selection.end);
    const _text = `${left} ${_operator} ${right}`;

    setText(_text);
  };

  const handleSumAll = () => {
    const variables = PARSER.getVariables(parsed);

    let varsArr = [];
    Object.keys(variables).forEach((key) => {
      varsArr.push(variables[key].name);
    });
    let varsStr = varsArr.join(" + ");
    setText(`${value}\n${varsStr}`);
  };

  const handleClear = () => {
    setText("");
    setParsed([]);
  };

  const handleOpenInfo = (evt) => {
    layer.show();
  };

  const handleSelection = ({ nativeEvent: { selection } }) => {
    setSelection(selection);
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
        </View>
      </View>

      <View style={STYLES.contentArea}>
        <View style={STYLES.textArea}>
          <UselessTextInput
            ref={textAreaRef}
            style={STYLES.textInput}
            multiline
            numberOfLines={20}
            onChangeText={handleChangeText}
            // onKeyPress={handleKeyUp}
            onSelectionChange={handleSelection}
            value={value}
          />
        </View>

        <View style={STYLES.resultArea}>{renderItems()}</View>
      </View>
    </View>
  );
};

// export default Calculator;
export default React.memo(Calculator);
