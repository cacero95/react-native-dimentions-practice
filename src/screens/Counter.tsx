import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FabButton } from '../components/FabButton';

export const Counter = () => {

    const [ count, setCount ] = useState(10);
    return (
        <View style = { styles.container }>
            <Text style = { styles.counterText  }>
                Counter: { count }
            </Text>
            <FabButton
                location = "r"
                setAction = {
                    () => setCount( count + 1 )
                }
                text = "+1"
            />
            <FabButton
                setAction = {
                    () => setCount( count - 1 )
                }
                text = "-1"
                location = 'l'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    counterText: {
        textAlign: 'center',
        fontSize: 40,
        position: 'relative', // by default all the components have the position relative
        top: -15
    },
    counterButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fabLocation: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    fabLocationMinus: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fabText: {
        color: '#fff',
        fontSize: 25
    }
})