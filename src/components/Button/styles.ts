import { StyleSheet } from 'react-native';
import { FONTS } from '@/styles';

const commonStyles = StyleSheet.create({
  commonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export const styles = StyleSheet.create({
  container: {
    ...commonStyles.commonContainer,
    backgroundColor: '#000',
  },
  disabledContainer: {
    ...commonStyles.commonContainer,
    backgroundColor: '#cccccc',
  },
  text: {
    ...FONTS.s_NunitoSansRegular_Center,
    color: '#fff',
  },
  disabledText: {
    ...FONTS.s_NunitoSansRegular_Center,
    color: '#666666',
  },
});
