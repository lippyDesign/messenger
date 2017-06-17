import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FormInput, Icon } from 'react-native-elements';
import People from '../components/common/People';
import ChatMessagesDisplay from '../components/message/ChatMessagesDisplay';
import { onMessageTextChange } from '../actions';

const people = [{ uid: 1, displayName: 'Hrusha', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 2, displayName: 'Golopop', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 3, displayName: 'Telemuk', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }];

class ComposeScreen extends Component {
  render() {
    return <View style={styles.containerStyle}>
      <People people={people} small />
      <ChatMessagesDisplay />
      <FormInput
        multiline
        style={styles.inputStyle}
        placeholder='Message'
        placeholderTextColor='gray'
        value={this.props.messageText}
        onChangeText={messageText => this.props.onMessageTextChange(messageText)}
      />
      <View style={{alignItems: 'flex-end', paddingRight: 5}}>
        <Icon
          raised
          name='send'
          color='#1CA9F4'
          onPress={() => console.log('hello')}
        />
      </View>
    </View>;
  }
}

const styles = {
  containerStyle: { flex: 1, marginTop: 20, paddingBottom: 5 },
  inputStyle: { height:80, fontSize: 16, color: 'black' }
};

const mapStateToProps = state => ({ messageText: state.message.messageText });

export default connect(mapStateToProps, { onMessageTextChange })(ComposeScreen);