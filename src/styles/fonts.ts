import { StyleSheet } from 'react-native';

export const CINZEL_REGULAR = 'Cinzel-Regular';
export const CINZEL_BLACK = 'Cinzel-Black';
export const CINZEL_BOLD = 'Cinzel-Bold';
export const CINZEL_EXTRA_BOLD = 'Cinzel-ExtraBold';
export const CINZEL_MEDIUM = 'Cinzel-Medium';
export const CINZEL_SEMI_BOLD = 'Cinzel-SemiBold';
export const NUNITO_SANS_REGULAR = 'NunitoSans-Regular';
export const NUNITO_SANS_BLACK = 'NunitoSans-Black';
export const NUNITO_SANS_BOLD = 'NunitoSans-Bold';
export const NUNITO_SANS_EXTRA_BOLD = 'NunitoSans-ExtraBold';
export const NUNITO_SANS_LIGHT = 'NunitoSans-Light';
export const NUNITO_SANS_SEMI_BOLD = 'NunitoSans-SemiBold';

export const FONTS = StyleSheet.create({
  s_CinzelRegular: {
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'normal',
    fontFamily: CINZEL_BOLD,
  },
  s_NunitoSansRegular: {
    fontSize: 17,
    fontStyle: 'normal',
    fontFamily: NUNITO_SANS_REGULAR,
  },
  s_NunitoSansRegular_Center: {
    fontSize: 17,
    textAlign: 'center',
    fontStyle: 'normal',
    fontFamily: NUNITO_SANS_REGULAR,
  },
});
