import 'react-native-gesture-handler';

import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {RecoilRoot} from 'recoil';

const Stack = createStackNavigator();

import Boostrap from './src/components';

import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import Settings from './src/components/views/Settings';

export interface AppProps {}

export interface AppState {}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Welcome'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    );
  }
}
