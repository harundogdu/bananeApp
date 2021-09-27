import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';
import colors from '../../../styles/colors';
const Input = ({
  placeholder,
  value,
  onType,
  onBlur,
  isSecure = false,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.primary}
        onChangeText={onType}
        onBlur={onBlur}
        secureTextEntry={isSecure}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Input;
