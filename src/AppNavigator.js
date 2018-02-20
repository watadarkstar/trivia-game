import React from 'react';
import { Subtitle, View } from '@shoutem/ui';
import { StackNavigator } from 'react-navigation';
import { Home, Quiz, Results } from './components/views';

const appNavigatorConfig = {
  Home: {
    screen: Home,
    navigationOptions: () => {
      return {
          headerTitle: <Subtitle>HOME</Subtitle>,
          headerLeft: <View />
      };
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: () => {
      return {
          headerTitle: <Subtitle>QUIZ</Subtitle>,
          headerLeft: <View />
      };
    }
  },
  Results: {
    screen: Results,
    navigationOptions: () => {
      return {
          headerTitle: <Subtitle>RESULTS</Subtitle>,
          headerLeft: <View />
      };
    }
  },
};
const AppNavigator = StackNavigator(appNavigatorConfig);

export default AppNavigator;
