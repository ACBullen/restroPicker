import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: 'black',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 20,
    lineHeight: 23,
    flex: 2,

  },
  labelStyle: {
    fontWeight: '600',
    color: '#3d3c3c',
    fontSize: 20,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // borderBottomWidth: 2.0,
    // borderColor: '#3d3c3c',

  }
};

export { Input };
