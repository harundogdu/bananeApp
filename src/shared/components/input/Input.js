import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';
import colors from '../../../styles/colors';
const Input = ({placeholder, value, onType, onBlur}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.primary}
        onChangeText={onType}
        onBlur={onBlur}
      />
    </View>
  );
};

export default Input;
