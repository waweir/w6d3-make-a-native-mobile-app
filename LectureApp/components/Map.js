import React, { Component } from 'react';
import { MapView, View, Text, StyleSheet } from 'react-native';

export default class Map extends Component {
  render() {
    return <View style={styles.container}>
      <Text style={styles.text}>Map</Text>
      <MapView
        style={{height: 600, width: 400}}
        showsUserLocation={true}
      />
    </View>

  }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        marginBottom: 10,
        paddingTop: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
