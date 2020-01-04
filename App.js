import React from 'react';
import RootNavigator from './navigation';
import {NavigationNativeContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <NavigationNativeContainer>
      <StatusBar backgroundColor="#e83e33" barStyle="light-content" />
      <RootNavigator />
    </NavigationNativeContainer>
  );
}
