import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from './app/reducers';
import AppWithNavigationState from './app/navigators/AppNavigator';

class friendmode extends Component{
  store = createStore(AppReducer);

  render(){
    return (
      <Provider store={this.store}>
          <AppWithNavigationState/>
      </Provider>
    );
  }
}
console.disableYellowBox = true;
AppRegistry.registerComponent('friendmode', () => friendmode);
