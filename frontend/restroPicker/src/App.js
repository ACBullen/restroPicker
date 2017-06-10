import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Router from './Router';
import { fetchYelpRestos } from './util/resto_api_util';

class App extends Component {

  render() {
    const store = configureStore();
    
    global.store = store;
    global.fetchYelpRestos = fetchYelpRestos;

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
