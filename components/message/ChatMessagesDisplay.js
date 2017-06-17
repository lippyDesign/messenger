import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { FormInput } from 'react-native-elements';
import { connect } from 'react-redux';
import { onMessageTextChange } from '../../actions';

class ChatMessagesDisplay extends Component {
  render() {
    return <ScrollView style={styles.container}>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
    </ScrollView>;
  }
}

const mapStateToProps = state => ({ messageText: state.message.messageText });

const styles = {
  container: { flex: 1, borderWidth: 1, borderColor: 'orange' }
};

export default connect(null, null)(ChatMessagesDisplay);