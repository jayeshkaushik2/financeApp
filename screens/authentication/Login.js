import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import LoginForm from '../../components/forms/LoginForm';
import InputField from '../../components/InputField';
import ButtonField from '../../components/ButtonField';
import LogoDisplay from '../../components/LogoDisplay';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoDisplay />
      <LoginForm navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: '100%',
  },
});

export default Login;
