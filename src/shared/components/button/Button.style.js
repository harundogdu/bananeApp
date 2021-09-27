import {Dimensions, StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    width: Dimensions.get('screen').width / 2.6,
    borderRadius: 10,
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
      backgroundColor: '#852747',
      borderWidth: 1,
      borderColor: '#852747',
    },
    text: {
      ...base_style.text,
      color: '#fff',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      borderColor: '#852747',
      borderWidth: 1,
    },
    text: {
      ...base_style.text,
      color: '#852747',
    },
  }),
};
