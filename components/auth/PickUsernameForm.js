import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

export default class extends Component {
  renderButton() {
    const { usernameError, checkingUsername, onNextClick } = this.props;
    if (checkingUsername) return <ActivityIndicator large style={{ marginTop: 10 }} />
    if (usernameError) return <FormValidationMessage>{usernameError}</FormValidationMessage>
    return <Button onPress={onNextClick} large icon={{name: 'navigate-next'}} title='NEXT' backgroundColor='#02A8F3' style={{ marginTop: 10 }} />
  }
  render() {
    return <View style={styles.containerStyle}>
      <FormLabel>Username</FormLabel>
      <FormInput placeholder='unique username' autoCapitalize='none' value={this.props.username} onChangeText={text => this.props.onChangeText(text)} />
      {this.renderButton()}
    </View>;
  }
}

const styles = {
  containerStyle: { flex: 1, marginTop: 10 }
};