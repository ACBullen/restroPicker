import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import SplashContainer from './components/SplashContainer';
import RestoList from './components/restos/RestoList';


class App extends Component {

  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <SplashContainer />
        <RestoList />
      </Provider>
    );
  }
}

export default App;
