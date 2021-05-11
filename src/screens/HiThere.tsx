import React from 'react';
import { View, Text } from 'react-native'

export const HiThere = () => {
    return (
        <View style = {{
          flex: 1,
          justifyContent: 'center',
        }}>
          <Text style = {{
            fontSize: 55,
            textAlign: 'center',
            color: 'black'
          }}>
            Hi there!!!
          </Text>
        </View>
  )
}
