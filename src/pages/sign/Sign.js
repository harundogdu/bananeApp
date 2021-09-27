import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../shared/components/input';
import Button from '../../shared/components/button';
import styles from './Sign.style';
import {Formik} from 'formik';
const initialValues = {
  usermail: '',
  password: '',
  repassword: '',
};
const Login = ({navigation}) => {
  const handleLogin = () => {
    navigation.goBack();
  };
  const handleRegisterSubmit = values => {
    console.log(values);
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
              />
              <Input
                value={values.password}
                placeholder="Şifrenizi giriniz..."
                onType={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              <Input
                value={values.repassword}
                placeholder="Şifrenizi tekrar giriniz..."
                onType={handleChange('repassword')}
                onBlur={handleBlur('repassword')}
              />
            </View>
            <View style={styles.button_container}>
              <Button handlePress={handleSubmit} text="Kayıt Ol" />
              <Button handlePress={handleLogin} text="Geri" theme="secondary" />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
