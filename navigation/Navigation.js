// Navigation.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/authentication/Login';
import SignUp from '../screens/authentication/SignUp';
import ForgotPassword from '../screens/authentication/ForgotPassword';
import VerifyOtp from '../screens/authentication/VerifyOtp';
import NewPassword from '../screens/authentication/NewPassword';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Income from '../screens/Income';
import Outcome from '../screens/Outcome';

// Import your screens/components

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Income">
        {/* authentication pages starts */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyOtp"
          component={VerifyOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{headerShown: false}}
        />
        {/* authentication pages ends */}

        {/* authenticated pages starts */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Income"
          component={Income}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Outcome"
          component={Outcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        {/* authenticated pages ends */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
