import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator, View} from 'react-native';
import colors from '../../../styles/colors';
import styles from './Button.style';
const Input = ({text, handlePress, theme = 'primary', loading = false}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={handlePress}
      disabled={loading}>
      {loading ? (
        <View style={styles[theme].loading}>
          <Text style={styles[theme].text}>Lütfen Bekleyiniz</Text>
          <ActivityIndicator
            style={styles[theme].indicator}
            color={colors.white}
          />
        </View>
      ) : (
        <Text style={styles[theme].text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Input;
