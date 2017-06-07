import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Splash from './components/Splash';

class App extends Component {

  render() {
    // const store = configureStore();
    return (
      // <Provider store={store}>
        <Splash />
      // </Provider>
    );
  }
}

export default App;
