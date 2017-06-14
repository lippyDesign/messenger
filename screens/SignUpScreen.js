import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import CreateUserForm from '../components/auth/CreateUserForm';

export default class extends Component {
  // add property to the class for react navigation to use as configurations to cutomize the route
  static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.username })
  render() {
    return <View style={styles.container}>
      <CreateUserForm navigation={this.props.navigation} />
    </View>;
  }
}

styles = {
  container: { marginTop: 10 }
};