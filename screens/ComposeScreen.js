import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import People from '../components/common/People';

const people = [{ uid: 1, displayName: 'Hrusha', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 2, displayName: 'Golopop', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 3, displayName: 'Telemuk', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }];

class ComposeScreen extends Component {
  render() {
    return <View style={styles.containerStyle}>
      <People people={people} />
    </View>;
  }
}

const styles = {
  containerStyle: { flex: 1, marginTop: 10, borderColor: 'green', borderWidth: 1 }
};

export default connect(null, null)(ComposeScreen);