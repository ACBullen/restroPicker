import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Splash from './components/Splash';


class App extends Component {

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Splash />
      </View>
    );
  }
}

export default App;
