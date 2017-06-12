import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import PickUsernameForm from '../components/auth/PickUsernameForm';
import { onUsernameTextChange } from '../actions';

class PickUsernameScreen extends Component {
  // add property to the class for react navigation to use as configurations to cutomize the route
  static navigationOptions = () => ({
    title: 'Pick Username',
    headerBackTitle: 'Username',
    headerStyle: { marginTop: Platform.OS === 'android' ? 24 : 0 } // android needs a little more margin on top than iOS
  });
  onChangeText = username => {
    this.props.onUsernameTextChange(username);
  }
  render() {
    return <View style={styles.containerStyle}>
      <PickUsernameForm
        onChangeText={this.onChangeText}
        username={this.props.username}
        checkingUsername={this.props.checkingUsername}
        usernameError={this.props.usernameError}
        onNextClick={() => this.props.navigation.navigate('signup', { username: this.props.username })}
      />
    </View>;
  }
}

const styles = {
  containerStyle: { flex: 1, marginTop: 30 }, //borderColor: 'green', borderWidth: 1
};

const mapStateToProps = state => ({ username: state.auth.usernameText, checkingUsername: state.auth.checkingUsername, usernameError: state.auth.usernameError });

export default connect(mapStateToProps, { onUsernameTextChange })(PickUsernameScreen);