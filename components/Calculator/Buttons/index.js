import React, { forwardRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import STYLE from "./style";

const Buttons = ({ handleInputOperator, handleSumAll, handleClear, handleKeyboard }) => {
  return (
    <View style={STYLE.buttonArea}>
      <TouchableOpacity onPress={() => handleInputOperator("+")}>
        <IconAntDesign style={STYLE.button.icon} name="plus" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleInputOperator("-")}>
        <IconAntDesign style={STYLE.button.icon} name="minus" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleInputOperator("*")}>
        <IconAntDesign style={STYLE.button.icon} name="close" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleInputOperator("/")}>
        <IconFontAwesome5 style={STYLE.button.icon} name="divide" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleInputOperator("=")}>
        <IconMaterialCommunityIcons style={STYLE.button.icon} name="equal" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSumAll}>
        <Text style={{ color: "#000", marginRight: 15 }}>+ ALL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginRight: 20 }} onPress={handleClear}>
        <IconFontAwesome name="trash-o" size={20} />
      </TouchableOpacity>

      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ marginLeft: 10 }}>
          <IconFontAwesome name="keyboard-o" size={25} color="#000" />
        </View>
      </TouchableWithoutFeedback> */}
      {/* <TouchableWithoutFeedback onPress={handleKeyboard}>
        <View style={{ marginLeft: 10 }}>
          <IconFontAwesome name="keyboard-o" size={25} color="#000" />
        </View>
      </TouchableWithoutFeedback> */}
      <TouchableOpacity style={{ marginRight: 10 }} onPress={handleKeyboard}>
        <IconFontAwesome name="keyboard-o" size={25} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
