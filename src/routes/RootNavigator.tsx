import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../constants';
import TabNavigator from './TabNavigator';
import MovieDetail from '../screens/MovieDetail';
import Notifications from '../screens/Notifications';
import {colors} from '../themes/colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.Tab}>
      <Stack.Screen
        name={screenNames.Tab}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screenNames.MovieDetail}
        component={MovieDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screenNames.Notifications}
        component={Notifications}
        options={{
          headerStyle: {backgroundColor: colors.black},
          headerTitleStyle: {color: colors.white},
          headerBackTitle: 'Home',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
