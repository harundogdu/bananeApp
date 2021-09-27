import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './FAB.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
const FAB = ({icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.fab_icon}>
        <Icon name={icon} size={30} />
      </Text>
    </TouchableOpacity>
  );
};

export default FAB;
