import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

interface Props {
    location?: 'r' | 'l',
    setAction: () => void,
    text: string
}

export const FabButton = ( { setAction, text = '', location = 'r' }: Props ) => {

    const Android = () => (
        <View
            style = {
                [
                    styles.fabLocation,
                    ( location === 'r' )
                    ? styles.rigth : styles.left 
                ]
            }
        >
            <TouchableNativeFeedback
                    onPress = { setAction }
                    background = {
                        TouchableNativeFeedback.Ripple( '#2d2d2d', true, 30 )
                    }
                >
                <View style = { styles.fab }>
                    <Text
                        style = { styles.fabText }
                    >
                        { text }
                    </Text>
                </View>
            </TouchableNativeFeedback>

        </View>
    );

    const ios = () => (
        <TouchableOpacity
            activeOpacity = { 0.8 }
            onPress = { setAction }
            style = {
            [
                styles.fabLocation,
                ( location === 'r' )
                ? styles.rigth : styles.left 
            ]
        }
            >
            <View style = { styles.fab }>
                <Text
                    style = { styles.fabText }
                >
                    { text }
                </Text>
            </View>
        </TouchableOpacity>
    )
    return Platform.OS === 'android' ? Android() : ios();
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 10,
    },
    left: {
        left: 10
    },
    rigth: {
        right: 10
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
    },
    fabText: {
        color: '#fff',
        fontSize: 25
    }
})
