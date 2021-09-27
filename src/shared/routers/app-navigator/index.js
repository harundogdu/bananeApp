import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default () => {
  const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginPage" component={null} />
          <Stack.Screen name="SignPage" component={null} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
