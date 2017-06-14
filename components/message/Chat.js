import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Tile } from 'react-native-elements';

export default class extends Component {
  render() {
    return <View style={styles.container}>
      <Tile
        imageSrc={{require: ('https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg')}}
        title="Lorem ipsum dolor sit amet, consectetur"
        contentContainerStyle={{height: 70}}
      >
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Caption</Text>
          <Text>Caption</Text>
        </View>
      </Tile>
    </View>;
  }
}

styles = {
  container: { flex: 1, borderWidth: 1, borderColor: 'red' }
};