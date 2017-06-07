import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import store from './store';
import AuthScreen from './screens/AuthScreen';

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      //welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      // main: {
      //   screen: TabNavigator({
      //     map: { screen: MapScreen },
      //     deck: { screen: DeckScreen },
      //     review: {
      //       screen: StackNavigator({
      //         review: { screen: ReviewScreen },
      //         settings: { screen: SettingsScreen }
      //       })
      //     }
      //   }, {
      //     tabBarPosition: 'bottom',
      //     tabBarOptions: {
      //       labelStyle: { fontSize: 12 }
      //     }
      //   })
      // }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true // to prevent react navigation from loading all screens at once, because we only want to load facebook when going to auth screen
    });
    return <Provider store={store}><MainNavigator /></Provider>;
  }
}

Expo.registerRootComponent(App);
