import React from 'react';
import { Text, TouchableOpacity, TouchableHighlight } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableHighlight onPress={onPress} style={buttonStyle} underlayColor={'#fcc05f'}>
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
    borderWidth: 0,
    // borderColor: '#007aff',
    marginLeft: 50,
    marginRight: 50
  }
};

export { Button };
