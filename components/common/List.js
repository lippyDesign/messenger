import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { List, ListItem, Badge } from 'react-native-elements';

export default class extends Component {
  componentWillMount() {
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }
  createDataSource({ people }) {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(people);
  }
  renderRow (rowData) {
    return <ListItem
      roundAvatar
      key={rowData.uid}
      badge={{ element: <Badge value="2" wrapperStyle={{ position: 'absolute', right: 30, height: '100%', justifyContent: 'center' }} />}}
      title={rowData.displayName}
      avatar={{uri:rowData.photo}}
    />
  }
  render() {
    return <List containerStyle={{ marginTop: 10 }}>
      <ListView
        renderRow={this.renderRow}
        dataSource={this.dataSource}
      />
    </List>
  }
}