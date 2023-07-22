import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
// import * as Validator from 'otp-validator';
import OtpField from '../OtpField';
import ButtonField from '../ButtonField';

const VerifyOtpForm = ({route, navigation}) => {
  const VerifyOtpFormSchema = Yup.object().shape({
    otp: Yup.string().min(5, '').max(5, '').required('An otp is required'),
  });
  // const {page} = route.params;
  const page = 'ForgotPassword';
  // console.log('page', page);
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{otp: ''}}
        onSubmit={values => {
          console.log('post submitted', values);
          {
            page === 'ForgotPassword'
              ? navigation.push('NewPassword')
              : navigation.push('Home');
          }
        }}
        validationSchema={VerifyOtpFormSchema}
        validateOnMount={true}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={styles.InputFieldContainer} id="input-fields">
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: '#484848',
                  marginLeft: 20,
                  marginBottom: 25,
                }}>
                OTP is sent no your email xxshik@gmail.com
              </Text>
              <OtpField
                placeholder="Enter OTP"
                autoFocus={false}
                onChangeText={handleChange('otp')}
                onBlur={handleBlur('otp')}
                value={values?.otp}
              />
            </View>
            <View style={{marginTop: 'auto', marginBottom: 100}}>
              <ButtonField
                accessibilityLabel={'Verify OTP'}
                handleButtonPress={handleSubmit}
                title={'Verify OTP'}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {marginTop: 'auto'},
  InputFieldContainer: {
    padding: 10,
    paddingTop: 0,
    marginBottom: 200,
    marginTop: -60,
  },
  inputField: isValid => ({
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: 'gray',
  }),
});

export default VerifyOtpForm;
