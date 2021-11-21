import React from 'react';
import { APP_SCREEN } from '@/configs';
import { ConfirmSignUp, Login, SignUp } from '@/screens/auth';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Navigator initialRouteName={APP_SCREEN.LOG_IN} screenOptions={{ headerShown: false }}>
      <Screen name={APP_SCREEN.CONFIRM_SIGN_UP} component={ConfirmSignUp} />
      <Screen name={APP_SCREEN.LOG_IN} component={Login} />
      <Screen name={APP_SCREEN.SIGN_UP} component={SignUp} />
    </Navigator>
  );
};

export default AuthNavigator;
