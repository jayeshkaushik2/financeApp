import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LogoDisplay from '../../components/LogoDisplay';
import VerifyOtpForm from '../../components/forms/VerifyOtpForm';

const VerifyOtp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoDisplay />
      <VerifyOtpForm navigation={navigation} />
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
export default VerifyOtp;
