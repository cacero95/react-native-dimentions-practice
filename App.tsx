import React from 'react'
import { SafeAreaView } from 'react-native';
import { FlexScreen } from './src/screens/FlexScreen';
// import { DimentionScreen } from './src/screens/DimentionScreen';
// import { HiThere } from './src/screens/HiThere';
// import { Counter } from './src/screens/Counter';
// import { BoxObejctModelScreen } from './src/screens/BoxObejctModel';
// import { PositionScreens } from './src/screens/PositionScreens';
/**
 * 
 * The SafeAreaView verify the render of the component
 * to show the component on a good way
 */
export const App = () => (
  <SafeAreaView style = {{ flex: 1 }}>
    {/* <BoxObejctModelScreen/> */}
    {/* <DimentionScreen/> */}
    {/* <PositionScreens/> */}
    <FlexScreen/>
  </SafeAreaView>
)
