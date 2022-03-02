/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CongratsScreen from './screens/CongratsScreen';

import BaseParamList from './screens/BaseParamList';

const ScreenStack = createNativeStackNavigator<BaseParamList>();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <ScreenStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <ScreenStack.Screen name="Home" component={HomeScreen} />
          <ScreenStack.Screen name="Congrats" component={CongratsScreen} />
        </ScreenStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
