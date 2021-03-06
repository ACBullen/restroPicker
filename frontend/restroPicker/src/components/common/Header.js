import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: 'rgba(30, 30, 30, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingTop: 15,
    paddingBottom: 15,
    // shadowColor: 'white',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    borderBottomWidth: 2.0,
    // borderColor: '#ffc654',
    borderColor: 'white',
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  }
};

export { Header };
