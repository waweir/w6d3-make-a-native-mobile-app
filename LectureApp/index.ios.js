/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS, Image
} from 'react-native';
import Images from './components/Images'
import DayPicker from './components/Calendar'
import Map from './components/Map'

export default class LectureApp extends Component {
  static title = '<TabBarIOS>'
  static description = 'Tab-based navigaiton'
  static displayName = 'TabBar'

  state = {
    selectedTab: 'imagesTab',
  }

  _renderContent = (pageText) => {
    return (
      <View style={styles.container}>
        <View style={styles.tabContent}>{pageText}</View>
      </View>
    )
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="#5cadd0"
        barTintColor="black"
        itemPositioning="center">
        <TabBarIOS.Item
          title="Photos"
          selected={this.state.selectedTab === 'imagesTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'imagesTab',
            })
          }}>
          {this._renderContent(<Images />)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Calendar"
          selected={this.state.selectedTab === 'calendarTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'calendarTab'
            })
          }}>
          {this._renderContent(<DayPicker />)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Map"
          selected={this.state.selectedTab === 'mapTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'mapTab'
            })
          }}>
          {this._renderContent(<Map />)}
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5cadd0',
  },
  tabBar: {
    fontSize: 12,
  }
});

AppRegistry.registerComponent('LectureApp', () => LectureApp);
