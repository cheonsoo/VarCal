import * as React from "react";
import { SafeAreaView, View, Text, StyleSheet, Platform } from "react-native";
import { ModalLayers } from "react-native-modal-layer";

import CalculatorScreen from "pages/CalculatorScreen";

function App() {
  return (
    <>
      <ModalLayers>
        <View style={styles.container}>
          <CalculatorScreen />
        </View>
      </ModalLayers>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40
    paddingTop: Platform.OS === "android" ? 40 : 60
  }
});

export default App;
