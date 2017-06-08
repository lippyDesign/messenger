// SignInUserForm is a form that uses component level state
// inputs: Email, Password (this component validates all inputs)
// buttons: Sign In
// component expects: onSignInUser function in props, errorMessege prop if create user sign up fails
import React, { Component } from 'react';
import { View, ActivityIndicator,  Keyboard } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { signInUser } from '../../actions';

class SignInUserForm extends Component {
  state = { email: '', password: '', emailError: '', passwordError: '' }
  onButtonPress = () => {
    Keyboard.dismiss();
    const { email, password, confirmPassword } = this.state;
    // validate inputs
    const emailValid = this.validateTextInput(email)
    const passwordValid = this.validateTextInput(password)
    // set error messeges if inputs are not validated
    if (!emailValid) this.setState({ emailError: 'Valid email is required'})
    if (!passwordValid) this.setState({ passwordError: 'Valid password is required'})
    // if all inputs are validated, call the createUser function from props
    if ( emailValid && passwordValid) {
      this.props.signInUser({ email, password, navigation: this.props.navigation });
      this.setState({ emailError: '', passwordError: '' });
    }
  }
  validateTextInput(text) {
    return text.length > 0;
  }
  renderButton() {
    if (this.props.loading) return <ActivityIndicator large />
    return <Button onPress={this.onButtonPress} large icon={{name: 'person'}} title='SIGN IN' backgroundColor='#02A8F3' style={{ marginTop: 10 }} />
  }
  render() {
    return <View>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder='your@email.com' autoCapitalize='none' value={this.state.email} onChangeText={email => this.setState({ email, emailError: '' })} />
      <FormValidationMessage>{this.state.emailError}</FormValidationMessage>
      <FormLabel>Password</FormLabel>
      <FormInput placeholder='password' secureTextEntry value={this.state.password} onChangeText={password => this.setState({ password, passwordError: '', confirmPasswordError: '' })} />
      <FormValidationMessage>{this.state.passwordError}</FormValidationMessage>
      {this.renderButton()}
      <FormValidationMessage>{this.props.errorMessage}</FormValidationMessage>
    </View>;
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage, loading: state.auth.loading }
};

export default connect(mapStateToProps, { signInUser })(SignInUserForm);