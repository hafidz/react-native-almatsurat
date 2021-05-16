import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, GetStarted, Register, Login, Setting} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerTitle: 'Al Matsurat Pagi', headerShown: true}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: 'Al Matsurat Sore',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerTitle: 'Setting', headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default Router;
