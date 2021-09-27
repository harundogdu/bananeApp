import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    height: deviceSize.height / 3,
  },
  modal: {
    justifyContent: 'flex-end',
  },
  input_container: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.white,
    color: colors.primary,
  },
});
