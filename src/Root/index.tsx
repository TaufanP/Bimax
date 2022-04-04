import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CustomStatusBar} from '~components/atoms';
import {MainRoute} from '~routes';
import {BodyIndex} from '~screens';
import {RootStackParamList} from '~types';

const Stack = createStackNavigator<RootStackParamList>();

const Root = () => (
  <SafeAreaProvider>
    <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainRoute} />
        <Stack.Screen name="BodyIndex" component={BodyIndex} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default Root;
