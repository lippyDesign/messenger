import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import SignInUserForm from '../components/auth/SignInUserForm';

export default class extends Component {
  // add property to the class for react navigation to use as configurations to cutomize the route
  static navigationOptions = ({ navigation }) => ({
    title: 'Sign In',
    tabBarIcon: ({ tintColor }) => <Icon name='favorite' size={30} color={tintColor} />,
    headerRight: <Button backgroundColor="rgba(0,0,0,0)" color="rgba(0, 122, 255, 1)" title="Sign Up" onPress={() => navigation.navigate('pickUsername')} />,
    headerStyle: { marginTop: Platform.OS === 'android' ? 24 : 0 } // android needs a little more margin on top than iOS
  });
  render() {
    return <View style={styles.container}>
      <SignInUserForm navigation={this.props.navigation} />
    </View>;
  }
}

styles = {
  container: { marginTop: 10 }
};