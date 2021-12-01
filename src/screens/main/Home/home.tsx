import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@/components';
import { RootStackParamList, APP_SCREEN } from '@/configs';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from './styles';

const Home = (props: StackScreenProps<RootStackParamList, APP_SCREEN.HOME>) => {
  function signOut() {}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate font combinations</Text>
      <Text style={styles.desc}>
        Click (Generate) to create a new font pairing, (Lock) to lock fonts that you want to keep,
        and (Edit) to choose a font manually. The text is editable, try replacing it with your
        company name or other copy.
      </Text>
      <Text>Welcome Ozan</Text>
      <Button title="Sign out" onPress={signOut}></Button>
    </View>
  );
};

export default Home;
