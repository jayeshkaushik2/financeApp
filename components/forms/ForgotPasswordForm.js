import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
// import * as Validator from 'email-validator';
import InputField from '../InputField';
import ButtonField from '../ButtonField';

const ForgotPasswordForm = ({navigation}) => {
  const ForgotPasswordFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: ''}}
        onSubmit={values => {
          console.log('post submitted', values);
          navigation.navigate('VerifyOtp', {page: 'ForgotPassword'});
        }}
        validationSchema={ForgotPasswordFormSchema}
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
              <InputField
                placeholder="Enter your email"
                keyboardType="email-address"
                autoFocus={false}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values?.email}
              />
            </View>
            <View style={{marginTop: 'auto', marginBottom: 100}}>
              <ButtonField
                accessibilityLabel={'Send OTP'}
                handleButtonPress={handleSubmit}
                title={'Send OTP'}
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

export default ForgotPasswordForm;
