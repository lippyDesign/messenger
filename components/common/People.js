import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class extends Component {
  renderPeople() {
    const { avatarAndTextBoxStyle } = styles;
    return this.props.people.map(({ uid, displayName, photo }) => {
      return <View key={uid} style={avatarAndTextBoxStyle}>
        <Avatar
          large={this.props.large}
          medium={this.props.medium}
          small={this.props.small}
          rounded
          source={{uri: photo}}
          title={displayName.substring(0,2)}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{ width: 34, height: 34 }}
          overlayContainerStyle={{ width: 34, height:34 }}
        />
        <Text>{displayName}</Text>
      </View>
    });
  }

  render() {
    return <ScrollView style={styles.wrapperStyle} horizontal>{this.renderPeople()}</ScrollView>;
  }
}

const styles = {
  wrapperStyle: {
    borderColor: 'blue',
    borderWidth: 1,
    //height: 70 //this.props.large ? 94 : this.props.medium ? 70 : 50
  },
  avatarAndTextBoxStyle: { justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH / 4 }
};