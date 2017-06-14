import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import store from './store';
import firebaseConfig from './firebaseConfig';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import ComposeScreen from './screens/ComposeScreen';
import PickUsernameScreen from './screens/PickUsernameScreen';

class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const MainNavigator = TabNavigator({
      //welcome: { screen: WelcomeScreen },
      // auth: {
      //   screen: StackNavigator({
      //     login: { screen: SignInScreen },
      //     pickUsername: { screen: PickUsernameScreen },
      //     signup: { screen: SignUpScreen }
      //   })
      // },
      main: {
        screen: TabNavigator({
          dashboard: { screen: DashboardScreen },
          compose: { screen: ComposeScreen },
          // review: {
          //   screen: StackNavigator({
          //     review: { screen: ReviewScreen },
          //     settings: { screen: SettingsScreen }
          //   })
          // }
        }, {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        })
      }
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
