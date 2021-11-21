/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button, Link, ErrorText } from '@/components';
import { RootStackParamList, APP_SCREEN } from '@/configs';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from './styles';
import type { userInformationType } from './types';

const Login = (
  props: StackScreenProps<RootStackParamList, APP_SCREEN.LOG_IN>,
): React.ReactElement => {
  const { navigation } = props;
  const [logInInformation, setLogInInformation] = useState<userInformationType>({
    username: '',
    password: '',
  });
  const [logInError, setLogInError] = useState<string>('');
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);

  const handleOnChange = (name: string, text: string): void => {
    setLogInInformation((prev) => {
      return {
        ...prev,
        [name]: text,
      };
    });
  };

  const handleLogIn = () => {};

  const handleFocus = () => {
    setLogInError('');
  };

  const handleBlur = () => {
    const { username, password } = logInInformation;
    if (username && password) {
      setButtonEnabled(true);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>Log in Screen</Text>
        <Input
          name="username"
          placeHolder="Username"
          onChange={handleOnChange}
          handleOnFocus={handleFocus}
          handleOnBlur={handleBlur}
        />
        <Input
          name="password"
          placeHolder="Password"
          onChange={handleOnChange}
          handleOnFocus={handleFocus}
          handleOnBlur={handleBlur}
          secureTextEntry
        />
        <ErrorText>{logInError}</ErrorText>
        <Button title="Log in" disabled={!buttonEnabled} onPress={handleLogIn}></Button>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Don&apos;t have an account?</Text>
          <Link text="Sign up" onPress={(): void => navigation.navigate(APP_SCREEN.SIGN_UP)} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
