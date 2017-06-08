// CreateUserForm is a form that uses component level state
// inputs: Email, Password, ConfirmPassword (this component validates all inputs)
// buttons: Sign Up
// component expects: onCreateUser function in props, errorMessege prop if createuser sign up fails
import React, { Component } from 'react';
import { View, ActivityIndicator, Keyboard } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { createUser } from '../../actions';

class CreateUserForm extends Component {
  state = { email: '', password: '', confirmPassword: '', emailError: '', passwordError: '', confirmPasswordError: '' }
  onButtonPress = () => {
    Keyboard.dismiss();
    const { email, password, confirmPassword } = this.state;
    // validate inputs
    const emailValid = this.validateTextInput(email)
    const passwordValid = this.validateTextInput(password)
    const confirmPasswordValid = this.validateTextInput(confirmPassword)
    // set error messeges if inputs are not validated
    if (!emailValid) this.setState({ emailError: 'Valid email is required'})
    if (!passwordValid) this.setState({ passwordError: 'Valid password is required'})
    if (!confirmPasswordValid) this.setState({ confirmPasswordError: 'Please confirm password'});
    // if passwords do not match, return early and set error messeges
    if (password !== confirmPassword) return this.setState({ passwordError: 'Passwords do not match', confirmPasswordError: 'Passwords do not match'});
    // if all inputs are validated, call the createUser function from props
    if ( emailValid && passwordValid && confirmPasswordValid) {
      this.props.createUser({ email, password, navigation: this.props.navigation });
      this.setState({ emailError: '', passwordError: '', confirmPasswordError: '' });
    }
  }
  validateTextInput(text) {
    return text.length > 0;
  }
  renderButton() {
    if (this.props.loading) return <ActivityIndicator large />
    return <Button onPress={this.onButtonPress} large icon={{name: 'person-add'}} title='SIGN UP' backgroundColor='#02A8F3' style={{ marginTop: 10 }} />
  }
  render() {
    return <View>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder='your@email.com' autoCapitalize = "none" value={this.state.email} onChangeText={email => this.setState({ email, emailError: '' })} />
      <FormValidationMessage>{this.state.emailError}</FormValidationMessage>
      <FormLabel>Password</FormLabel>
      <FormInput placeholder='password' secureTextEntry value={this.state.password} onChangeText={password => this.setState({ password, passwordError: '', confirmPasswordError: '' })} />
      <FormValidationMessage>{this.state.passwordError}</FormValidationMessage>
      <FormLabel>Confirm Password</FormLabel>
      <FormInput placeholder='password' secureTextEntry value={this.state.confirmPassword} onChangeText={confirmPassword => this.setState({ confirmPassword, confirmPasswordError: '', passwordError: '' })} />
      <FormValidationMessage>{this.state.confirmPasswordError}</FormValidationMessage>
      {this.renderButton()}
      <FormValidationMessage>{this.props.errorMessage}</FormValidationMessage>
    </View>;
  }
}

const mapStateToProps = state => {
  console.log(state.auth)
  return { errorMessage: state.auth.errorMessage, loading: state.auth.loading }
};

export default connect(mapStateToProps, { createUser })(CreateUserForm);