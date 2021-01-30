import React from "react";
import { View, Text, Image } from "react-native";
import Manual from "assets/UserManual.png";
import * as CONST from "constants/index.js";
import STYLE from "./style";

const UserManual = () => {
  return (
    <View
      style={{
        width: 300,
        height: 400,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "#fff"
      }}
    >
      <View
        style={{
          width: "100%",
          height: 300,
          alignItems: "flex-start",
          justifyContent: "flex-start"
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain"
          }}
          source={require("assets/UserManual.png")}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: 80,
          alignItems: "flex-start",
          justifyContent: "flex-start",
          paddingLeft: 20
        }}
      >
        <Text>- Donation</Text>
        <Text>   {CONST.donation}</Text>
        <Text></Text>
        <Text>- Developed by {CONST.developer}</Text>
      </View>
      <View style={{
          width: "100%",
          height: 30,
          alignItems: "flex-end",
          justifyContent: "center",
          paddingRight: 10
        }}>
        <Text>Version {CONST.version}</Text>
      </View>
    </View>
  );
};

export default UserManual;
