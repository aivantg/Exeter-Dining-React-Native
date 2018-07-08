import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from './config/router';
import { Provider } from 'react-redux';
import { store } from './config/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
