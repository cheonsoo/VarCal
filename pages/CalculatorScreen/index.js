import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ModalLayerFactory } from "react-native-modal-layer";

import Calculator from "components/Calculator";
import TextInput from "components/Calculator/UselessTextInput";
import UserManual from "components/UserManual";

import STYLES from "./styles";

let layer = null;

const CalculatorScreen = () => {
  const [text, setText] = useState("");
  const [tabSize, setTabSize] = useState([1]);
  const [selectedTab, setSelectedTab] = useState(1);
  const [tabData, setTabData] = useState(["", "", "", "", ""]);

  useEffect(() => {
    layer = ModalLayerFactory.create({
      component: <UserManual />
    });
  });

  useEffect(() => {
    setSelectedTab(tabSize.length);
  }, [tabSize]);

  const handleClickTab = (tabId) => {
    setSelectedTab(tabId);
  };

  const handleAddTab = () => {
    if (tabSize.length >= 5) {
      console.log("5 tabs are maximum");
      return;
    }
    setTabSize(tabSize.concat(tabSize.length + 1));
  };

  const handleRemoveTab = (tabId) => {
    if (tabSize.length === 1) {
      console.log("you have only one tab");
      return;
    }

    const _tabSize = tabSize.slice();
    const _tabData = tabData.slice();
    const tabIdx = tabSize.findIndex((item) => item === tabId);

    _tabData.splice(tabIdx, 1);
    setTabData(_tabData);

    _tabSize.splice(tabIdx, 1);
    setTabSize(_tabSize.map((tabId, idx) => idx + 1));

    setSelectedTab(1);
  };

  const handleChangeText = (text) => {
    setText(text);
  };

  const handleOpenInfo = (evt) => {
    layer.show();
  };

  const handleData = (_tabId) => (data) => {
    const _tabData = tabData.map((item, idx) => {
      if (idx + 1 == _tabId) {
        return data;
      } else {
        return item;
      }
    });
    setTabData(_tabData);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={STYLES.tabArea}>
        <TouchableOpacity style={STYLES.addTab} onPress={handleAddTab}>
          <Text style={STYLES.addTabText}>+</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", width: 340 }}>
          {tabSize.map((tabId, idx) => (
            <TouchableOpacity
              key={idx}
              style={selectedTab === tabId ? STYLES.tabActive : STYLES.tab}
              onPress={() => handleClickTab(tabId)}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 20 }}>
                  <Text
                    style={
                      selectedTab === tabId
                        ? STYLES.tabTextActive
                        : STYLES.tabText
                    }
                  >
                    {tabId}
                  </Text>
                </View>
                <View style={STYLES.tabCloseIcon}>
                  <Text
                    style={
                      selectedTab === tabId
                        ? STYLES.tabCloseTextActive
                        : STYLES.tabCloseText
                    }
                    onPress={() => handleRemoveTab(tabId)}
                  >
                    X
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={STYLES.buttonInfo} onPress={handleOpenInfo}>
          <Text style={STYLES.buttonText}>?</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 15 }}>
        {tabSize.map((tabId, idx) => (
          <View
            key={idx}
            style={selectedTab === tabId ? STYLES.showTab : STYLES.hideTab}
          >
            <Calculator data={tabData[idx]} onChange={handleData(tabId)} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default CalculatorScreen;
