import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';
const Input = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#852747"
      />
    </View>
  );
};

export default Input;
