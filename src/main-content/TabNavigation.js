// TabNavigation.js
// Top tabs: https://www.geeksforgeeks.org/react-native-top-tab-navigator/
// Icons: https://ionic.io/ionicons
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { View, Text } from 'react-native';

import Home from './Home';
import Store from './Store';
import Profile from './Profile';

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      tabBarOptions: { backgroundColor: '#ffffff' },
      screen: Home,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="home"
            size={tabInfo.focused ? 50 : 40}
            color={tabInfo.tintColor}
            style={{
              height: 100,
              width: 100,
              right: tabInfo.focused ? 12 : 8,
              bottom: tabInfo.focused ? 14 : 8,
            }}
          />
        ),
      },
    },
    Store: {
      screen: Store,
      navigationOptions: {
        tabBarLabel: (tabInfo) => (
          <Text
            style={{
              fontSize: 20,
              color: '#ffffff',
              top: -5,
              fontWeight: tabInfo.focused ? 'bold' : 'normal',
              width: 100,
              textAlign: 'center',
            }}>
            Store
          </Text>
        ),
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="cart"
            size={tabInfo.focused ? 40 : 35}
            style={{
              height: 100,
              width: 100,
              right: tabInfo.focused ? 8 : 6,
              bottom: tabInfo.focused ? 12 : 10,
            }}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="person-circle-outline"
            size={tabInfo.focused ? 50 : 40}
            color={tabInfo.tintColor}
            style={{
              height: 100,
              width: 100,
              right: tabInfo.focused ? 12 : 8,
              bottom: tabInfo.focused ? 14 : 8,
            }}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      style: {
        backgroundColor: '#007f00',
        marginTop: 35,
        height: 60,
      },
    },
  }
);

const Navigator = createAppContainer(TabNavigator);
const Homepage = () => {
  return (
    <Navigator>
        <Home/>
    </Navigator>
  );
};

export default Homepage;
