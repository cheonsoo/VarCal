import React, { useState, useEffect, useRef, useMemo } from "react";
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

import MultiLineTextInput from "components/common/MultiLineTextInput";
import Buttons from "components/Calculator/Buttons";
import UserManual from "components/UserManual";

import PARSER from "libs/varCal/parser";
import * as UTILS from "utils/index";
import STYLE from "./style";

const FONT_SIZE = 15;

let layer = null;

const Calculator = ({ tabId, data, onChange }) => {
  const [text, setText] = useState("");
  const [converted, setConverted] = useState({});
  const [parsed, setParsed] = useState([]);
  const [selection, setSelection] = useState({});
  const [showKeyboard, setShowKeyboard] = useState(true);
  const textAreaRef = useRef();
  const resultAreaRef = useRef();

  useEffect(() => {
    layer = ModalLayerFactory.create({
      component: <UserManual />
    });
  }, []);

  useEffect(() => {
    handleParse();
    onChange(text);
  }, [text]);

  useEffect(() => {
    setText(data);
  }, [data]);

  useEffect(() => {
    if (showKeyboard) textAreaRef.current.blur();
    else textAreaRef.current.focus();
  }, [showKeyboard]);

  const handleChangeText = (text) => {
    setText(text);
  };

  const handleParse = () => {
    if (!text) {
      setParsed({});
    };

    try {
      const arr = text.split("\n");
      let _parsed = PARSER.parse(arr);
      const variables = PARSER.getVariables(_parsed);
      try {
        _parsed
          .filter((item) => item.type === "equation")
          .forEach((item) => {
            const converted = PARSER.getEquation(variables, item.name);
            console.log('converted', converted);

            if (converted !== "") {
              item.converted = converted ? converted : "";
              try {
                item.value = eval(item.converted).toFixed(2);
              } catch (e) {
                item.value = "";
              }

              console.log('value', item.value);
            }
          });
      } catch (e) {
        console.log(e);
      }

      setParsed(_parsed);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputOperator = (_operator) => {
    const left = text.substring(0, selection.start);
    const right = text.substring(selection.end);
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
    setText(`${text}\n${varsStr}`);
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
    const left = text.substring(0, selection.start);
    const right = text.substring(selection.end);
    const _text = `${left}${item.name}${right}`;

    setText(_text);
  };

  const handleKeyboard = evt => {
    setShowKeyboard(!showKeyboard);
  };

  const renderResult = () => {
    const items = [];

    for (let i = 0; i < parsed.length; i++) {
      const item = parsed[i];

      if (item.type === "blank") continue;

      if (item.type === "comments") {
        items.push(
          <View key={item.idx} style={{ width: "100%", flexDirection: "row", paddingLeft: 10, paddingRight: 10, marginBottom: 5 }}>
            <Text style={{ color: "#6A9955", fontSize: FONT_SIZE, fontWeight: "bold" }}>{item.value}</Text>
          </View>
        );
      } else {
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
    }

    return items;
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={50}>
      <View style={STYLE.calculatorContainer}>
        <Buttons handleInputOperator={handleInputOperator} handleSumAll={handleSumAll} handleClear={handleClear} handleKeyboard={handleKeyboard} />

        <View style={STYLE.resultArea}>
          <ScrollView
            ref={resultAreaRef}
            onContentSizeChange={() => resultAreaRef.current.scrollToEnd({ animated: true })}
            keyboardShouldPersistTaps={'always'}
          >{renderResult()}</ScrollView>
        </View>

        <View style={STYLE.contentArea}>
          <MultiLineTextInput
            ref={textAreaRef}
            style={STYLE.textInput}
            multiline
            numberOfLines={20}
            onChangeText={handleChangeText}
            onSelectionChange={handleSelection}
            value={text}
            keyboardDismissMode="on-drag"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default React.memo(Calculator);
