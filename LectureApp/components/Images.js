import React, { Component, PropTypes } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default class Images extends Component {
    render () {
        return <ScrollView>
        <Text style={styles.text}>Images from Unsplash.com</Text>
        <Image
            style={styles.image}
            source={{uri: 'https://unsplash.it/800?random'}}
            />
        <Image
            style={styles.image}
            source={{uri: 'https://unsplash.it/800?random'}}
            />
        <Image
            style={styles.image}
            source={{uri: 'https://unsplash.it/800?random'}}
            />
        <Image
            style={styles.image}
            source={{uri: 'https://unsplash.it/800?random'}}
            />
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 300,
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        marginBottom: 10,
        paddingTop: 10,
        textAlign: 'center',
        color: 'white',
    }
});
