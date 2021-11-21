import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button, Link, ErrorText } from '@/components';
import { RootStackParamList, APP_SCREEN } from '@/configs';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from './styles';
import type { confirmSignUpInformationType } from './types';

const ConfirmSignUp = (
  props: StackScreenProps<RootStackParamList, APP_SCREEN.CONFIRM_SIGN_UP>,
): React.ReactElement => {
  const { navigation } = props;
  const [confirmSignUpInformation, setConfirmSignUpInformation] =
    useState<confirmSignUpInformationType>({
      username: '',
      confirmationCode: '',
    });
  const [confirmationError, setConfirmationError] = useState<string>('');
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);

  const handleOnChange = (name: string, text: string): void => {
    setConfirmSignUpInformation((prev) => {
      return {
        ...prev,
        [name]: text,
      };
    });
  };

  const handleConfirmation = () => {
    const { username, confirmationCode } = confirmSignUpInformation;
  };

  const handleFocus = () => {
    setConfirmationError('');
  };

  const handleBlur = () => {
    const { username, confirmationCode } = confirmSignUpInformation;
    if (username && confirmationCode) {
      setButtonEnabled(true);
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>Confirmation Screen</Text>
        <Input
          name="username"
          placeHolder="Username"
          onChange={handleOnChange}
          handleOnFocus={handleFocus}
          handleOnBlur={handleBlur}
        />
        <Input
          name="confirmationCode"
          placeHolder="Confirmation Code"
          onChange={handleOnChange}
          handleOnFocus={handleFocus}
          handleOnBlur={handleBlur}
        />
        <ErrorText>{confirmationError}</ErrorText>
        <Button title="Confirm" disabled={!buttonEnabled} onPress={handleConfirmation}></Button>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Don&apos;t have an account?</Text>
          <Link text="Sign up" onPress={(): void => navigation.navigate(APP_SCREEN.SIGN_UP)} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ConfirmSignUp;
