import React from 'react';
import { View } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import AppNavigator from './src/AppNavigator';
import reducers from './src/store';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  state = { loading: true }
  
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ loading: false });
  }
  
  render() {
    return (
      <Provider store={store} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.state.loading === false &&
            <AppNavigator />
          }
        </View>
      </Provider>
    );
  }
}
