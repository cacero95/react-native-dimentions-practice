import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreens = () => {
    return (
        <View style = { styles.container }>
            <View style= { styles.violetBox }></View>
            <View style= { styles.orangeBox }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    violetBox: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '50%',
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: '#fff'
    },
    orangeBox: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        top: '50%',
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: '#fff'
    }
});