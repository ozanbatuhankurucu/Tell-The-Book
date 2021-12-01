import { StyleSheet } from 'react-native';
import { FONTS } from '@/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#e3e3e3',
    marginVertical: 10,
  },
  input: {
    ...FONTS.s_NunitoSansRegular,
    padding: 15,
  },
});
