import React from 'react';
import { Text, View } from 'native-base';
import { StackNavigator } from 'react-navigation';
import { Home, Quiz, Results } from './components/screens';

const appNavigatorConfig = {
  Home: {
    screen: Home,
    navigationOptions: () => {
      return {
          header: null
      };
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: () => {
      return {
          headerTitle: <Text>QUIZ</Text>,
      };
    }
  },
  Results: {
    screen: Results,
    navigationOptions: () => {
      return {
          headerTitle: <Text>RESULTS</Text>,
          headerLeft: <View />
      };
    }
  },
};
const AppNavigator = StackNavigator(appNavigatorConfig);

export default AppNavigator;
