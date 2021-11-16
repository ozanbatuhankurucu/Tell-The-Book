/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import AppContainer from './src/navigation/app.navigation';

const App = (): React.ReactElement => {
  return (
    <>
      <Spinner visible={false} />
      <AppContainer />
    </>
  );
};

export default App;
