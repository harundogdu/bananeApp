import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF1E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_container: {
    width: Dimensions.get('screen').width / 1.2,
  },
  button_container: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width / 1.2,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '700',
    color: '#852747',
  },
});
