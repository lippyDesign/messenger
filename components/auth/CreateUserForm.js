// CreateUserForm is a form that uses component level state
// inputs: Email, Password, Confirm Password
// buttons: Login
import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

export default class extends Component {
  state = { email: '', password: '', confirmPassword: '' }
  onButtonPress = () => {
    const { email, password, confirmPassword } = this.state;
    this.props.onCreateUser({ email, password, confirmPassword });
  }
  render() {
    return <View>
      <FormLabel>Email</FormLabel>
      <FormInput value={this.state.email} onChangeText={email => this.setState({ email })} />
      <FormValidationMessage>Error message</FormValidationMessage>
      <FormLabel>Password</FormLabel>
      <FormInput value={this.state.password} onChangeText={password => this.setState({ password })} />
      <FormValidationMessage>Error message</FormValidationMessage>
      <FormLabel>Confirm Password</FormLabel>
      <FormInput value={this.state.confirmPassword} onChangeText={confirmPassword => this.setState({ confirmPassword })} />
      <FormValidationMessage>Error message</FormValidationMessage>
      <Button onPress={this.onButtonPress} large icon={{name: 'person-add'}} title='SIGN UP' backgroundColor='#02A8F3' style={{ marginTop: 10 }} />
      <FormValidationMessage>{this.props.errorMessege}</FormValidationMessage>
    </View>;
  }
}