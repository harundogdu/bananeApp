import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';
const Input = ({text, handlePress, theme = 'primary'}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={handlePress}>
      <Text style={styles[theme].text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Input;
