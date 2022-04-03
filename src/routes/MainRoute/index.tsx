import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Calculator, NumberFinder} from '~screens';
import {TopTabStackParamList} from '~types';
import {options, screenOptions} from './utilities';

const Tab = createMaterialTopTabNavigator<TopTabStackParamList>();

const MainRoute = () => {
  return (
    <Tab.Navigator initialRouteName="Calculator" screenOptions={screenOptions}>
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen
        name="NumberFinder"
        component={NumberFinder}
        options={options}
      />
    </Tab.Navigator>
  );
};

export default MainRoute;
