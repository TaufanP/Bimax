import {NavigatorScreenParams} from '@react-navigation/native';
import {IGender} from '~types/components';

type RootStackParamList = {
  BodyIndex: {gender: IGender; height: number; weight: number};

  Home: NavigatorScreenParams<TopTabStackParamList>;
};

type TopTabStackParamList = {
  Calculator: undefined;

  NumberFinder: undefined;
};

export type {RootStackParamList, TopTabStackParamList};
