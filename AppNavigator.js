import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Subtitle, View } from '@shoutem/ui';
import { Home, Quiz } from './components/views';

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
};
const AppNavigator = StackNavigator(appNavigatorConfig);

export default AppNavigator;
