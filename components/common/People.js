import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class extends Component {
  renderPeople() {
    const { avatarAndTextBoxStyle, avatarWrapper, textWrapper } = styles;
    return this.props.people.map(({ uid, displayName, photo }) => {
      return <View key={uid} style={avatarAndTextBoxStyle}>
        <Avatar
          large
          rounded
          source={{uri: photo}}
          title={displayName.substring(0,2)}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{ width: 34 }}
          overlayContainerStyle={{ width: 34 }}
        />
        <Text>{displayName}</Text>
      </View>
    });
  }

  render() {
    return <ScrollView horizontal style={styles.containerStyle}>{this.renderPeople()}</ScrollView>;
  }
}

const styles = {
  containerStyle: { flex: 1, marginTop: 10 },
  avatarAndTextBoxStyle: {justifyContent: 'space-between', alignItems: 'center', height: 94, width: SCREEN_WIDTH / 4 }
};