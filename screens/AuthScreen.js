// 
import React, { Component } from 'react';
import { View } from 'react-native';
import CreateUserForm from '../components/auth/CreateUserForm';

export default class extends Component {
  onEmailAndPasswordSignUp = ({ email, password, confirmPassword }) => {
    console.log({ email, password, confirmPassword });
  }
  render() {
    return <View style={styles.container}>
      <CreateUserForm onCreateUser={this.onEmailAndPasswordSignUp} errorMessege='Error message signing up' />
    </View>;
  }
}

styles = {
  container: { marginTop: 10 }
};