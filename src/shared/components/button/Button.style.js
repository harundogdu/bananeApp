import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
const base_style = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.primary,
      borderWidth: 1,
      borderColor: colors.primary,
    },
    text: {
      ...base_style.text,
      color: colors.white,
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      borderColor: colors.primary,
      borderWidth: 1,
    },
    text: {
      ...base_style.text,
      color: colors.primary,
    },
  }),
};
