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

const ProfileForm = ({navigation}) => {
  const ProfileFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          username: 'Jayesh kaushik',
          email: 'jayeshkaushik2@gmail.com',
        }}
        onSubmit={values => {
          console.log('post submitted', values);
          navigation.navigate('VerifyOtp', {page: 'ForgotPassword'});
        }}
        validationSchema={ProfileFormSchema}
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
                placeholder="username"
                autoFocus={false}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values?.username}
              />
              <InputField
                placeholder="email"
                keyboardType="email-address"
                autoFocus={false}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values?.email}
              />
            </View>
            {/* <View>
              <ButtonField
                accessibilityLabel={'Send OTP'}
                handleButtonPress={handleSubmit}
                title={'Send OTP'}
              />
            </View> */}
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {marginTop: 20},
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
});

export default ProfileForm;
