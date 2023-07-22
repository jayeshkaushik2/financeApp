import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
// import * as Validator from 'email-validator';
import InputField from '../InputField';
import ButtonField from '../ButtonField';

const SignUpForm = ({navigation}) => {
  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    username: Yup.string().email().required('A Username is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 8 characters'),
    confirm_password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 8 characters'),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
          confirm_password: '',
        }}
        onSubmit={values => {
          console.log('post submitted', values);
          //   navigation.goBack();
        }}
        validationSchema={SignUpFormSchema}
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
                placeholder="Username"
                autoFocus={false}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values?.username}
              />
              <InputField
                placeholder="Password"
                autoFocus={false}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values?.password}
              />
              <InputField
                placeholder="Confirm Password"
                autoFocus={false}
                onChangeText={handleChange('confirm_password')}
                onBlur={handleBlur('confirm_password')}
                value={values?.confirm_password}
              />
            </View>

            <View id="sign-in-with-social" style={styles.social_container}>
              <Text style={styles.social_containerText}>
                Sign in with social
              </Text>
              <View style={styles.social_sub_container}>
                <View>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('../../assets/icons/google.png')}
                    />
                    <Text style={styles.iconText}>Google</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('../../assets/icons/facebook.png')}
                    />
                    <Text style={styles.iconText}>Facebook</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={styles.sub_container}
              id="new-account-or-forgot-password">
              <TouchableOpacity onPress={() => navigation.push('Login')}>
                <Text style={styles.sub_containerText}>
                  Already have an Account?
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 'auto', marginBottom: 30}}>
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
    paddingTop: 0,
  },
  inputField: isValid => ({
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: 'gray',
  }),

  social_container: {
    alignItems: 'center',
  },
  social_containerText: {
    color: 'gray',
    fontWeight: '500',
    marginBottom: 10,
  },
  social_sub_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    marginBottom: 20,
  },
  SigupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 45,
  },
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
  icon: {
    width: 40,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  iconText: {
    color: 'gray',
  },
  finance_text: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default SignUpForm;
