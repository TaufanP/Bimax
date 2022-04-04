import {MaterialTopTabNavigationOptions} from '@react-navigation/material-top-tabs';
import colors from '~constants/colors';

const screenOptions: MaterialTopTabNavigationOptions = {
  lazy: true,
  tabBarIndicatorStyle: {backgroundColor: colors.primary},
  tabBarLabelStyle: {fontWeight: 'bold'},
};

const options: MaterialTopTabNavigationOptions = {title: 'Number Finder'};

export {screenOptions, options};
