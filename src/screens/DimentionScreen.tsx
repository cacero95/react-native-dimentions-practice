import React from 'react'
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';

// get devices dimentions but static
//const { width, height } = Dimensions.get('window');

export const DimentionScreen = () => {
    // get the devices dimentions with a hook
    const { width, height } =  useWindowDimensions();
    return (
        <View>
            <View style = { styles.container }>
                <View style = {{
                    ...styles.violetBox,
                    width: width / 2
                }}/>
                <View style = { styles.orangeBox } />
            </View>    
            <Text style = { styles.title }>
                W: { width }, H: { height }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        backgroundColor: 'red'
    },
    violetBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        height: '50%',
        width: '50%'
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    }
});