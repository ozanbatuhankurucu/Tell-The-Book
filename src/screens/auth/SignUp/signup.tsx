import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button, Link, ErrorText } from '@/components';
import { RootStackParamList, APP_SCREEN } from '@/configs';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from './styles';
import type { userInformationType } from './types';

const SignUp = (
  props: StackScreenProps<RootStackParamList, APP_SCREEN.SIGN_UP>,
): React.ReactElement => {
  const { navigation } = props;
  const [signUpInformation, setSignUpInformation] = useState<userInformationType>({
    username: '',
    email: '',
    password: '',
  });
  const [signUpError, setSignUpError] = useState<string>('');
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);

  const handleOnChange = (name: string, text: string): void => {
    setSignUpInformation((prev) => {
      return {
        ...prev,
        [name]: text,
      };
    });
  };
  function signUp() {
    const { username, email, password } = signUpInformation;
  }

  const handleFocus = () => {
    setSignUpError('');
  };

  const handleBlur = () => {
    const { username, email, password } = signUpInformation;
    if (username && email && password) {
      setButtonEnabled(true);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>Sign Up Screen</Text>
        <Input
          name="username"
          placeHolder="Username"
          onChange={handleOnChange}
          handleOnFocus={handleFocus}
          handleOnBlur={handleBlur}
        />
        <Input
          name="email"
          placeHolder="Email"
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
        <ErrorText>{signUpError}</ErrorText>
        <Button title="Sign Up" disabled={!buttonEnabled} onPress={signUp}></Button>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Already have an account?</Text>
          <Link text="Log in" onPress={() => navigation.navigate(APP_SCREEN.LOG_IN)} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
