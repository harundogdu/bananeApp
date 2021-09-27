import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
const ratio = 60;
export default StyleSheet.create({
  container: {
    width: ratio,
    height: ratio,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ratio,
    backgroundColor: colors.primary,
  },
  fab_icon: {
    color: colors.white,
    fontSize: 26,
    fontWeight: 'bold',
  },
});
