import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import DishRow from '../views/DishRow';
import firebase  from '../config/firebase';
import { connect } from 'react-redux';
import actions from '../actions'
import moment from 'moment';

class MainScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Menu",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitle: <Button
        onPress={() => navigation.navigate('Settings')}
        title="Wetherell"
        color="#fff"
      />,
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Settings')}
          title="Settings"
          color="#fff"
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {breakfast: [], lunch: [], dinner: []};
  }

  componentDidMount() {
    this.db = firebase.firestore();
    this.dishListeners = [];
    this.loadMenuForDate("07-08-2018")
  }

  componentWillUnmount() {
    this.unmountListeners()
  }

  loadMenuForDate(dateString) {
    this.unmountListeners()
    this.menuListener = this.db.collection("menus").doc(dateString).onSnapshot((doc) => {
        this.props.saveMenu(dateString, doc.data())
        this.loadDishesForMenu(doc.data())
    });
  }

  loadDishesForMenu(menu) {
      this.loadDishes(menu.elm.breakfast)
      this.loadDishes(menu.weth.breakfast)
      this.loadDishes(menu.elm.lunch)
      this.loadDishes(menu.weth.lunch)
      this.loadDishes(menu.elm.dinner)
      this.loadDishes(menu.weth.dinner)
  }

  loadDishes(dishes) {
    for (dish of dishes) {
      this.dishListeners.push(this.db.collection("dishes").doc(dish).onSnapshot((doc) => {
        this.props.saveDish(doc.data())
      }))
    }
  }

  unmountListeners() {
    if(this.menuListener) {
      this.menuListener()
    }
    for (dishListener of this.dishListeners) {
      dishListener()
    }
  }

  _renderDish = ({ item }) => {
    return (<DishRow title={item} rating={3.0}/>);
  }

  render() {
    if(!this.state.menu) { return (<Text>EMPTY</Text>)}
    return (
      <View>
        <FlatList
          data={this.props.menus["07-08-2018"].weth.breakfast}
          renderItem={this._renderDish}
          keyExtractor={(dish) => dish}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    menus: state.menus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveMenu: (date, menu) => dispatch(actions.saveMenu(date, menu)),
    saveDish: (dish) => dispatch(actions.saveDish(dish)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
