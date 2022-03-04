import React, { Component } from "react";
import { TextInput } from "react-native";
import { ReactNativePhoneInputProps } from "../../typescriptDeclarationFile/phone-input";
class PhoneInput<
  TextComponentType extends React.ComponentType = typeof TextInput
> extends React.Component<ReactNativePhoneInputProps> {
  static setCustomCountriesData(json) {}
  render() {
    return <div></div>;
  }
}

export default PhoneInput;
