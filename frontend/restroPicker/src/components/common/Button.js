import React from 'react';
import { Text, TouchableOpacity, TouchableHighlight } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableHighlight onPress={onPress} style={buttonStyle} underlayColor={'#c0c0c0'}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableHighlight>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  }
};

export { Button };
