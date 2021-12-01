import { StyleSheet } from 'react-native';
import { FONTS } from '@/styles';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pageTitle: {
    ...FONTS.s_CinzelRegular,
    marginBottom: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  linkText: {
    ...FONTS.s_NunitoSansRegular,
    marginHorizontal: 10,
  },
});
