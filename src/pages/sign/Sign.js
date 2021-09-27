import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../../shared/components/input';
import Button from '../../shared/components/button';
import styles from './Sign.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import authErrorCodeParser from '../../utils/authErrorCodeParser';
/* initialValues  */
const initialValues = {
  usermail: '',
  password: '',
  repassword: '',
};
const Login = ({navigation}) => {
  /* state */
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const handleLogin = () => {
    navigation.goBack();
  };
  const handleRegisterSubmit = async values => {
    if (
      values.password === '' ||
      values.repassword === '' ||
      values.usermail === ''
    ) {
      return Alert.alert('Hata!', 'İlgili Alanları Doldurunuz!');
    }
    if (values.password !== values.repassword) {
      return;
    }
    try {
      setIsLoginLoading(true);
      await auth().createUserWithEmailAndPassword(
        values.usermail,
        values.password,
      );
      setIsLoginLoading(false);
      Alert.alert('Başarılı!', 'Kayıt Başarılı, Yönlendiriliyorsunuz!');
      navigation.navigate('LoginPage');
    } catch (err) {
      setIsLoginLoading(false);
      Alert.alert('Hata!', authErrorCodeParser(err.code));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>banaNE!</Text>
      <Formik initialValues={initialValues} onSubmit={handleRegisterSubmit}>
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
              <Input
                value={values.repassword}
                placeholder="Şifrenizi tekrar giriniz..."
                onType={handleChange('repassword')}
                onBlur={handleBlur('repassword')}
                isSecure
              />
            </View>
            <View style={styles.button_container}>
              <Button
                handlePress={handleSubmit}
                text="Kayıt Ol"
                loading={isLoginLoading}
              />
              <Button handlePress={handleLogin} text="Geri" theme="secondary" />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
