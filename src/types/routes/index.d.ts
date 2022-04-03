import {NavigatorScreenParams} from '@react-navigation/native';

type RootStackParamList = {
  Home: NavigatorScreenParams<TopTabStackParamList>;
};

type TopTabStackParamList = {
  Calculator: undefined;
  NumberFinder: undefined;
};

export type {RootStackParamList, TopTabStackParamList};
