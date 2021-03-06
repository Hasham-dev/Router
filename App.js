/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import { View, Text } from 'react-native';
import Navigation from './Resourse/Components/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
  );
};


export default App;
