import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import LogoDisplay from '../../components/LogoDisplay';
import ForgotPasswordForm from '../../components/forms/ForgotPasswordForm';

const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoDisplay />
      <ForgotPasswordForm navigation={navigation} />
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

export default ForgotPassword;
