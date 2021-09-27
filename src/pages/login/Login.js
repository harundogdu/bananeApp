import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../../shared/components/input';
import Button from '../../shared/components/button';
import styles from './Login.style';
import {Formik} from 'formik';
import authErrorCodeParser from '../../utils/authErrorCodeParser';
import auth from '@react-native-firebase/auth';
/* initial Values */
const initialValues = {
  usermail: '',
  password: '',
};
const Login = ({navigation}) => {
  /* states */
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const handleRegister = () => {
    navigation.navigate('SignPage');
  };
  const handleLoginSubmit = async values => {
    if (values.password === '' || values.usermail === '') {
      return Alert.alert('Hata!', 'İlgili Alanları Doldurunuz!');
    }
    try {
      setIsLoginLoading(true);
      await auth().signInWithEmailAndPassword(values.usermail, values.password);
      setIsLoginLoading(false);
    } catch (err) {
      setIsLoginLoading(false);
      Alert.alert('Hata!', authErrorCodeParser(err.code));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>banaNE!</Text>
      <Formik initialValues={initialValues} onSubmit={handleLoginSubmit}>
        {({values, handleChange, handleSubmit, handleBlur}) => (
          <>
            <View style={styles.input_container}>
              <Input
                value={values.usermail}
                placeholder="E-posta adresinizi giriniz..."
                onType={handleChange('usermail')}
                onBlur={handleBlur('usermail')}
                keyboardType="email-address"
              />
              <Input
                value={values.password}
                placeholder="Şifrenizi giriniz..."
                onType={handleChange('password')}
                onBlur={handleBlur('password')}
                isSecure
              />
            </View>
            <View style={styles.button_container}>
              <Button
                handlePress={handleSubmit}
                text="Giriş Yap"
                loading={isLoginLoading}
              />
              <Button
                handlePress={handleRegister}
                text="Kayıt Ol"
                theme="secondary"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
