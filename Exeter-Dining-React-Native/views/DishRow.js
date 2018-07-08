import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DishRow extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.rating}>Rating: {this.props.rating}</Text>
        </View>
        <View style={{backgroundColor:'lightgrey', flex:1, height: 1}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  innerContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: 'black',
    marginBottom: 2,
  },
  rating: {
    fontSize: 14,
    color: 'gray',
  },
});
