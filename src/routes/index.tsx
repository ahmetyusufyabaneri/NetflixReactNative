import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import React from 'react';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Routes;
