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
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 5,
    borderWidth: 1,
    // borderColor: '#007aff',
    marginLeft: 50,
    marginRight: 50
  }
};

export { Button };
