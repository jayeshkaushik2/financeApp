import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
// import * as Validator from 'otp-validator';
import OtpField from '../OtpField';
import ButtonField from '../ButtonField';
import AuthCtx from '../../Utils/context/AuthCtx';

const VerifyOtpForm = ({route, navigation}) => {
  const authCtx = useContext(AuthCtx);
  const VerifyOtpFormSchema = Yup.object().shape({
    otp: Yup.string().min(5, '').max(5, '').required('An otp is required'),
  });
  // const {page} = route.params;
  const prevPage = 'ForgotPassword';
  // console.log('page', page);
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{otp: ''}}
        onSubmit={values => {
          console.log('post submitted', values);
          authCtx.verifyOtp(values, prevPage);
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
                  fontSize: 15,
                  color: '#484848',
                  marginLeft: 20,
                  marginBottom: 25,
                }}>
                OTP is sent no your email {authCtx.user?.email}
              </Text>
              <OtpField
                placeholder="Enter OTP"
                autoFocus={false}
                onChangeText={handleChange('otp')}
                onBlur={handleBlur('otp')}
                value={values?.otp}
              />
            </View>
            <View
              style={styles.sub_container}
              id="new-account-or-forgot-password">
              <TouchableOpacity onPress={() => navigation.push('Login')}>
                <Text style={styles.sub_containerText}>Rsend OTP ?</Text>
              </TouchableOpacity>
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
  sub_container: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
  },
  sub_containerText: {
    color: 'black',
    fontWeight: '500',
  },
});

export default VerifyOtpForm;
