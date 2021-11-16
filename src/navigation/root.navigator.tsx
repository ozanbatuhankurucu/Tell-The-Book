import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, APP_SCREEN } from '@/configs';
import AuthNavigator from '@/navigation/auth.navigator';
import MainNavigator from '@/navigation/main.navigator';

const { Screen, Navigator } = createStackNavigator<RootStackParamList>();

interface User {
  name: string;
}

const RootNavigator = (): React.ReactElement => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <Navigator headerMode="none">
      {!user ? (
        <Screen name={APP_SCREEN.AUTH} component={AuthNavigator} />
      ) : (
        <Screen name={APP_SCREEN.MAIN} component={MainNavigator} />
      )}
    </Navigator>
  );
};

export default RootNavigator;
