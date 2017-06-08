import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Router from './Router';

class App extends Component {

  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
