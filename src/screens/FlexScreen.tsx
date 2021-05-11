import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.box1 } >Box 1</Text>
            <Text style = { styles.box2 } >Box 2</Text>
            <Text style = { styles.box3 } >Box 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        flex: 1
    },
    box1: {
        flex: 3,
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 20
    },
    box2: {
        flex: 2,
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 20
    },
    box3: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 20
    }
});
