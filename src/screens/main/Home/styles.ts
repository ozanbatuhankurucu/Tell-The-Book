import { StyleSheet } from 'react-native';
import { CINZEL_BOLD, NUNITO_SANS_REGULAR } from '@/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    fontStyle: 'normal',
    fontFamily: CINZEL_BOLD,
  },
  desc: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'normal',
    fontFamily: NUNITO_SANS_REGULAR,
  },
});
