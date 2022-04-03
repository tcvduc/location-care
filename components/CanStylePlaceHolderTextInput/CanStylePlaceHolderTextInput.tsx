import { Component } from "react";
import { TextInput } from "react-native";

interface CanStylePlaceHolderTextInputProps {
  value: string;
  onChange: Function;
  placeholderStyle: object;
  style: object;
}

interface CanStylePlaceHolderTextInputState {
  placeholder: boolean;
}

class CanStylePlaceHolderTextInput extends Component<
  CanStylePlaceHolderTextInputProps,
  CanStylePlaceHolderTextInputState
> {
  constructor(props: CanStylePlaceHolderTextInputProps) {
    super(props);

    this.state = {
      placeholder: props.value.length === 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({
      placeholder: event.nativeEvent.text.length === 0,
    });
    this.props.onChange && this.props.onChange(event);
  }

  render() {
    const { placeholderStyle, style, onChange, ...rest } = this.props;
    return (
      <TextInput
        {...rest}
        onChange={this.handleChange}
        style={this.state.placeholder ? [style, placeholderStyle] : style}
      />
    );
  }
}

export default CanStylePlaceHolderTextInput;
