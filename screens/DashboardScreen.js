import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import SignInUserForm from '../components/auth/SignInUserForm';

export default class extends Component {
  render() {
    return <View style={styles.container}>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
    </View>;
  }
}

styles = {
  container: { marginTop: 10 }
};