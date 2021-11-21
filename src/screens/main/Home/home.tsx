import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@/components';
import { RootStackParamList, APP_SCREEN } from '@/configs';
import { StackScreenProps } from '@react-navigation/stack';

const Home = (props: StackScreenProps<RootStackParamList, APP_SCREEN.HOME>) => {
  function signOut() {}

  return (
    <View style={styles.container}>
      <Text>Welcome Ozan</Text>
      <Button title="Sign out" onPress={signOut}></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
