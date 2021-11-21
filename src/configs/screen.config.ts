// declaring a set of named constants
export enum APP_SCREEN {
  // Root navigators
  AUTH = 'Auth',
  MAIN = 'Main',
  // Auth Screens
  LOG_IN = 'Login',
  SIGN_UP = 'SignUp',
  CONFIRM_SIGN_UP = 'ConfirmSignUp',

  // Main Screens
  HOME = 'Home',
}

export type RootStackParamList = {
  [APP_SCREEN.AUTH]: undefined;
  [APP_SCREEN.MAIN]: undefined;

  [APP_SCREEN.LOG_IN]: undefined;
  [APP_SCREEN.SIGN_UP]: undefined;
  [APP_SCREEN.CONFIRM_SIGN_UP]: undefined;
  [APP_SCREEN.HOME]: undefined;
};
