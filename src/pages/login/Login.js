import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../shared/components/input';
import Button from '../../shared/components/button';
import styles from './Login.style';
const Login = () => {
  const handleLogin = () => {};
  const handleRegister = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>banaNE!</Text>
      <View style={styles.input_container}>
        <Input placeholder="E-posta adresinizi giriniz..." />
        <Input placeholder="Şifrenizi giriniz..." />
      </View>
      <View style={styles.button_container}>
        <Button
          handlePress={handleRegister}
          text="Kayıt Ol"
          theme="secondary"
        />
        <Button handlePress={handleLogin} text="Giriş Yap" />
      </View>
    </View>
  );
};

export default Login;
