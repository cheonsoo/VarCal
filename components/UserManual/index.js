import React from "react";
import { View, Text, Image } from "react-native";
import Manual from "assets/UserManual.png";
import * as CONST from "constants/index.js";

const UserManual = () => {
  return (
    <View
      style={{
        width: 300,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "#fff"
      }}
    >
      <View
        style={{
          width: "100%",
          height: 200,
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
          height: 50,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Developed by Chance</Text>
        <Text>Version {CONST.version}</Text>
        <Text>Donation</Text>
        <Text>{CONST.donation}</Text>
      </View>
    </View>
  );
};

export default UserManual;
