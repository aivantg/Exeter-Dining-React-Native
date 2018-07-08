import { createStackNavigator } from 'react-navigation';

// Screen Imports
import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen';

//Defines all the sc
export const Router=createStackNavigator(
  {
    Main: MainScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Main"
  }
)
