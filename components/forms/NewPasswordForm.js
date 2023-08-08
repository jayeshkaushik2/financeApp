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

const NewPasswordForm = ({navigation}) => {
  const NewPasswordFormSchema = Yup.object().shape({
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 6 characters'),
    confirm_password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 6 characters'),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{password: '', confirm_password: ''}}
        onSubmit={values => {
          console.log('post submitted', values);
          navigation.navigate('Login');
        }}
        validationSchema={NewPasswordFormSchema}
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
                placeholder="password"
                keyboardType="Password"
                autoFocus={false}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values?.password}
              />
              <InputField
                placeholder="Confirm password"
                keyboardType="Password"
                autoFocus={false}
                onChangeText={handleChange('confirm_password')}
                onBlur={handleBlur('confirm_password')}
                value={values?.confirm_password}
              />
            </View>
            <View style={{marginTop: 'auto', marginBottom: 100}}>
              <ButtonField
                accessibilityLabel={'Update'}
                handleButtonPress={handleSubmit}
                title={'Update'}
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
    marginBottom: 150,
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

export default NewPasswordForm;
