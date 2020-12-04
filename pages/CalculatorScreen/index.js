import React from "react";
import { SafeAreaView } from "react-native";
import Calculator from "components/Calculator";

const CalculatorScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Calculator />
    </SafeAreaView>
  );
};

export default CalculatorScreen;
