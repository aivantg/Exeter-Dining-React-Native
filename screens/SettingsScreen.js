import React from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';
import DishRow from '../views/DishRow';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Setting Screen",
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View>
        <Text>{"This is the Settings Component"}</Text>
        <DishRow title={"Khanh's favorite Dish!"} rating={3.0}/>
        <Text>Hi Khanh!</Text>
        <Button
          title="Go back to the menu"
          onPress={() => this.props.navigation.navigate("Main")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
