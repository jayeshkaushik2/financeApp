import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import NewPasswordForm from '../../components/forms/NewPasswordForm';
import LogoDisplay from '../../components/LogoDisplay';

const NewPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoDisplay />
      <NewPasswordForm navigation={navigation} />
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

export default NewPassword;
