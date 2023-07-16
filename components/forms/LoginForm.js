import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
// import * as Validator from 'email-validator';
import InputField from '../InputField';
import ButtonField from '../ButtonField';

const LoginForm = ({navigation}) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 8 characters'),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          console.log('post submitted', values);
          //   navigation.goBack();
        }}
        validationSchema={LoginFormSchema}
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
                placeholder="Email"
                keyboardType="email-address"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values?.email}
              />
              <InputField
                placeholder="Password"
                autoFocus={false}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values?.password}
              />
            </View>

            <View id="sign-in-with-social" style={styles.social_container}>
              <Text style={styles.social_containerText}>
                Sign in with social
              </Text>
              <View style={styles.social_sub_container}>
                <Text>Google</Text>
                <Text>Facebook</Text>
              </View>
            </View>

            <View
              style={styles.sub_container}
              id="new-account-or-forgot-password">
              <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                <Text style={styles.sub_containerText}>Create New Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.push('ForgotPassword')}>
                <Text style={styles.sub_containerText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 'auto', marginBottom: 100}}>
              <ButtonField
                accessibilityLabel={'sign in'}
                handleButtonPress={handleSubmit}
                title={'Sign In'}
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
  },
  inputField: isValid => ({
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
  }),

  social_container: {
    alignItems: 'center',
  },
  social_containerText: {
    color: 'gray',
    fontWeight: '500',
  },
  social_sub_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },

  SigupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 45,
  },
  sub_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
  },
  sub_containerText: {
    color: 'black',
    fontWeight: '500',
  },
});

export default LoginForm;
