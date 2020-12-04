import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Card } from "react-native-material-ui";
import { ModalLayerFactory } from "react-native-modal-layer";

import UselessTextInput from "components/Calculator/UselessTextInput";
import UserManual from "components/UserManual";

import PARSER from "libs/varCal/parser";
import * as UTILS from "utils/index";

const FONT_SIZE = 15;

const layer = ModalLayerFactory.create({
  component: <UserManual />
});

const Calculator = () => {
  const [value, setText] = useState("");
  const [converted, setConverted] = useState({});
  const [parsed, setParsed] = useState([]);

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
    <View style={{ flex: 1, width: "100%" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            flex: 10,
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 10
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#A9DFBF",
              width: 150,
              height: 30,
              borderColor: "#A9DFBF",
              borderWidth: 2,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={handleClear}
          >
            <Text
              style={{
                color: "#F2F4F4",
                fontSize: 20,
                fontWeight: "bold"
              }}
            >
              CLEAR
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 10
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: 30,
              height: 30,
              borderColor: "#736E6D",
              borderWidth: 2,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: "#736E6D",
                fontSize: 20,
                fontWeight: "bold"
              }}
              onPress={handleOpenInfo}
            >
              ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 15, flexDirection: "row" }}>
        <View
          style={{
            flex: 2,
            paddingTop: 20,
            paddingLeft: 20
          }}
        >
          <UselessTextInput
            style={{
              width: "100%",
              height: "100%",
              fontSize: FONT_SIZE,
              fontWeight: "bold"
            }}
            multiline
            numberOfLines={20}
            onChangeText={handleChangeText}
            onKeyPress={handleKeyUp}
            value={value}
          />
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#f5f5f5",
            paddingTop: 20,
            paddingRight: 20
          }}
        >
          {renderItems()}
        </View>
      </View>
    </View>
  );
};

export default Calculator;
