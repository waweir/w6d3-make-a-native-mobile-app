'use strict';

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import Calendar from 'react-native-day-picker/src/Calendar';


export default class DayPicker extends Component {
    render() {
        var from = new Date();
        from.setDate(from.getDate() - 16);
        var to = new Date();

        var startDate = new Date();
        startDate.setMonth(startDate.getMonth() + 1);

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Calendar</Text>
                <Calendar
                    monthsCount={24}
                    startFormMonday={true}
                    startDate={startDate}
                    selectFrom={from}
                    selectTo={to}
                    width={350}
                    onSelectionChange={(current, previous) => {
                        console.log(current, previous);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        marginBottom: 10,
        paddingTop: 10,
        textAlign: 'center',
        color: 'white',
    }
});
