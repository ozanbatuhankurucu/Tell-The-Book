import React from 'react';
import { Home } from '@/screens/main';
import { APP_SCREEN } from '@/configs';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => {
  return (
    <Navigator initialRouteName={APP_SCREEN.HOME}>
      <Screen name={APP_SCREEN.HOME} component={Home} />
    </Navigator>
  );
};

export default MainNavigator;
