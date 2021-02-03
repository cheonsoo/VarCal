import React from "react";
import { View, Text, Image } from "react-native";
import Manual from "assets/UserManual.png";
import * as CONST from "constants/index.js";
import SwipeView from './SwipeView';

import STYLE from "./style";

const UserManual = () => {
  return (
    <View
      style={{
        width: 300,
        height: 500,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "#fff"
      }}
    >
      <View
        style={{
          width: "100%",
          height: "70%",
          alignItems: "flex-start",
          justifyContent: "flex-start"
        }}
      >
        <SwipeView />
      </View>
      <View
        style={{
          width: "100%",
          height: 70,
          alignItems: "flex-start",
          justifyContent: "flex-start",
          paddingLeft: 10,
          paddingTop: 20
        }}
      >
        {/* <Text></Text>
        <Text>- Developed by {CONST.developer}</Text> */}
      </View>
      <View style={{
          width: "100%",
          height: 30,
          alignItems: "flex-end",
          justifyContent: "center",
          paddingTop: 10,
          paddingRight: 10
        }}>
        <Text>Version {CONST.version}</Text>
      </View>
    </View>
  );
};

export default UserManual;
