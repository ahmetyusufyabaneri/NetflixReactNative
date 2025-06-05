import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {screenNames} from '../constants';
import Home from '../screens/Home';
import Games from '../screens/Games';
import NewHot from '../screens/NewHot';
import FastLoughts from '../screens/FastLoughts';
import Downloads from '../screens/Downloads';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../themes/colors';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.Home}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.black,
        },
        tabBarActiveTintColor: colors.softGrey,
        tabBarInactiveTintColor: colors.grey,
      }}>
      <Tab.Screen
        name={screenNames.Home}
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.Games}
        component={Games}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="game-controller-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.NewHot}
        component={NewHot}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="youtube" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.FastLoughts}
        component={FastLoughts}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="smile-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.Downloads}
        component={Downloads}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="download" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
