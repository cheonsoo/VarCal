import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import { ModalLayerFactory } from "react-native-modal-layer";

import UselessTextInput from "components/Calculator/UselessTextInput";
import Buttons from "components/Calculator/Buttons";
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
  const resultAreaRef = useRef();

  useEffect(() => {
    layer = ModalLayerFactory.create({
      component: <UserManual />
    });
  });

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  useEffect(() => {
    handleParse();
  }, [value]);

  useEffect(() => {
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

  const handleClickVariable = (item) => {
    const left = value.substring(0, selection.start);
    const right = value.substring(selection.end);
    const _text = `${left}${item.name}${right}`;

    setText(_text);
  };

  const renderItems = () => {
    const items = [];

    for (let i = 0; i < parsed.length; i++) {
      const item = parsed[i];

      if (item.type === "blank") continue;

      items.push(
        <View key={item.idx} style={{ width: "100%", flexDirection: "row", paddingLeft: 10, paddingRight: 10, marginBottom: 5 }}>
          <View style={{ width: "70%" }} key={`name_${item.idx}`}>
            <TouchableOpacity
              style={{
                alignSelf: "flex-start",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 2,
                paddingBottom: 2,
                backgroundColor: item.type === "variable" ? "#B5DF5A" : "#0E61EB",
                borderRadius: 4
              }}
              onPress={() => handleClickVariable(item)}
            >
              <Text style={{ color: item.type === "variable" ? "#2471A3" : "#fff", fontSize: FONT_SIZE, fontWeight: "bold" }}>{item.name}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: "30%" }}key={`val_${item.idx}`}>
            <Text
              key={`val_${item.idx}`}
              style={{
                color: "#2471A3",
                fontSize: FONT_SIZE,
                fontWeight: "bold",
                textAlign: "right"
              }}
            >
              {UTILS.getNumberFormat(item.value)}
            </Text>
          </View>
        </View>
      );
    }

    return items;
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={50}>
      <View style={STYLES.calculatorContainer}>
        {/* <View style={STYLES.buttonArea}> */}
        <Buttons handleInputOperator={handleInputOperator} handleSumAll={handleSumAll} handleClear={handleClear} />
        {/* </View> */}

        <View style={STYLES.resultArea}>
          <ScrollView
            ref={resultAreaRef}
            onContentSizeChange={() => {
              resultAreaRef.current.scrollToEnd({ animated: true });
            }}
            keyboardShouldPersistTaps={'always'}
          >{renderItems()}</ScrollView>
        </View>

        <View style={STYLES.contentArea}>
          <UselessTextInput
            ref={textAreaRef}
            style={STYLES.textInput}
            multiline
            numberOfLines={20}
            onChangeText={handleChangeText}
            onSelectionChange={handleSelection}
            value={value}
            keyboardDismissMode="on-drag"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default React.memo(Calculator);
