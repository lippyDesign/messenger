import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Divider } from 'react-native-elements';
import People from '../components/common/People';
import Chat from '../components/message/Chat';

const people = [{ uid: 1, displayName: 'Hrusha', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 2, displayName: 'Golopop', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 3, displayName: 'Telemuk', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }];

class ComposeScreen extends Component {
  render() {
    return <View style={styles.containerStyle}>
      <View style={{ flex: 1 }}>
        <People people={people} small />
      </View>
      <View style={{ flex: 6 }}>
        <Chat />
      </View>
    </View>;
  }
}

const styles = {
  containerStyle: { flex: 1, marginTop: 10 }
};

export default connect(null, null)(ComposeScreen);