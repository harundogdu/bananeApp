import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_container: {
    width: Dimensions.get('screen').width / 1.2,
  },
  button_container: {
    width: Dimensions.get('screen').width / 1.2,
  },
  title: {
    textAlign: 'center',
    fontSize: 56,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 25,
  },
});
