import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
/* pages */
import Login from '../../../pages/login';
import Sign from '../../../pages/sign';
import Home from '../../../pages/home';
import colors from '../../../styles/colors';
/* stack */
const Stack = createNativeStackNavigator();

export default () => {
  const AppNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginPage"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignPage"
          component={Sign}
        />
        <Stack.Screen
          options={{
            title: 'Muhabbet',
            headerBackVisible: false,
            headerTintColor: colors.primary,
            headerStyle: {
              backgroundColor: colors.secondary,
            },
          }}
          name="HomePage"
          component={Home}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
