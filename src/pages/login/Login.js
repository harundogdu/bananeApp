import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../shared/components/input/Input';
import styles from './Login.style';
const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>banaNE!</Text>
      <View style={styles.input_container}>
        <Input placeholder="E-posta adresinizi giriniz..." />
        <Input placeholder="Şifrenizi giriniz..." />
      </View>
    </View>
  );
};

export default Login;
