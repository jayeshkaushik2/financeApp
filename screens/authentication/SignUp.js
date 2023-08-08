import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import LogoDisplay from '../../components/LogoDisplay';
import SignUpForm from '../../components/forms/SignUpForm';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoDisplay />
      <SignUpForm navigation={navigation} />
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

export default SignUp;
