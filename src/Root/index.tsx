import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Calculator} from '~screens';
import {RootStackParamList} from '~types';

const Stack = createStackNavigator<RootStackParamList>();

const Root = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Calculator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Calculator" component={Calculator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
