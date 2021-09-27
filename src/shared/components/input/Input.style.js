import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 5,
    width: Dimensions.get('screen').width - 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#852747',
    padding: 10,
    borderRadius: 5,
  },
});
