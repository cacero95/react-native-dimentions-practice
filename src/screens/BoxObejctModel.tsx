import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObejctModelScreen = () => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.title }>
                Box of the models
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        borderWidth: 15,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 20
    }
});
