import * as React from "react";
import { SafeAreaView, Text } from "react-native";
import { ModalLayers } from "react-native-modal-layer";

import CalculatorScreen from "pages/CalculatorScreen";

function App() {
  return (
    <>
      <ModalLayers>
        <SafeAreaView style={{ flex: 1 }}>
          <CalculatorScreen />
        </SafeAreaView>
      </ModalLayers>
    </>
  );
}

export default App;
