import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import HomeScreen from './screens/HomeScreen';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}
