// App.js 
// App Navigator https://www.geeksforgeeks.org/how-to-use-routing-with-react-navigation-in-react-native/?ref=gcse
// No Header https://stackoverflow.com/questions/48441620/hide-header-on-stacknavigator-with-react-navigation-in-react-native

import React from 'react';
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import NavigationService from './src/NavigationService';

import Homepage from './src/main-content/TabNavigation';
import Login from './src/login/Login';
import Register from './src/login/Register';
import MyBooks from './src/main-content/MyBooks'
import ReadScreen from './src/main-content/ReadScreen'
import BookScreen from './src/main-content/BookScreen'
import Store from './src/main-content/Store'

// Tests

//import Test from './src/Test/...'

const AppNavigator = createStackNavigator(
  {
    // Test: Test,
    Log: Login,
    ReadScreen: ReadScreen,
    Home: Homepage,
    Store: Store,
    Res: Register,
    MyBooks: MyBooks,
    BookScreen: BookScreen,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#ffffff' },
    },
  }
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Navigator
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
}
