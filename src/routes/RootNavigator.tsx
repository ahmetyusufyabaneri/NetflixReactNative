import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../constants';
import TabNavigator from './TabNavigator';
import MovieDetail from '../screens/MovieDetail';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.Tab}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.Tab} component={TabNavigator} />
      <Stack.Screen name={screenNames.MovieDetail} component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
