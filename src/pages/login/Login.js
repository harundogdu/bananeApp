import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../shared/components/input';
import Button from '../../shared/components/button';
import styles from './Login.style';
import {Formik} from 'formik';
const initialValues = {
  usermail: '',
  password: '',
};
const Login = ({navigation}) => {
  const handleRegister = () => {
    navigation.navigate('SignPage');
  };
  const handleLoginSubmit = values => {
    console.log(values);
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
              />
              <Input
                value={values.password}
                placeholder="Şifrenizi giriniz..."
                onType={handleChange('password')}
                onBlur={handleBlur('password')}
              />
            </View>
            <View style={styles.button_container}>
              <Button handlePress={handleSubmit} text="Giriş Yap" />
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
