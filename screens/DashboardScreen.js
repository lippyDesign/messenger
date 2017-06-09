import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import People from '../components/common/People';
import List from '../components/common/List';
import SearchBar from '../components/common/SearchBar';

const people = [
  { uid: 1, displayName: 'Hrusha', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 2, displayName: 'Golopop', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 3, displayName: 'Telemuk', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' },
  { uid: 4, displayName: 'Hrusha', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 5, displayName: 'Golopop', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 6, displayName: 'Telemuk', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' },
  { uid: 7, displayName: 'Hrusha', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 8, displayName: 'Golopop', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }, { uid: 9, displayName: 'Telemuk', photo: 'http://blogthumb2.naver.net/20131209_126/zzanghaa02_13865770059818vcQq_PNG/%B8%F0%B9%DF.png?type=w2' }
];

class DashboardScreen extends Component {
  onSearchText = () => {
    console.log('hello')
  }
  render() {
    return <View style={styles.containerStyle}>
      <View>
        <SearchBar onSearchText={this.onSearchText}/>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.titleTextStyle}>Favorites</Text>
        <People people={people} />
      </View>
      <View style={{ flex: 3}}>
        <Text style={styles.titleTextStyle}>Recent</Text>
        <List people={people} title='Recent' />
      </View>
    </View>;
  }
}

const styles = {
  containerStyle: { flex: 1, marginTop: 30 }, //borderColor: 'green', borderWidth: 1
  titleTextStyle: { textAlign: 'center', fontWeight: 'bold', fontSize: 18 }
};

export default connect(null, null)(DashboardScreen);