import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useContext} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
// import * as Validator from 'email-validator';
import InputField from '../InputField';
import ButtonField from '../ButtonField';
import ButtonFloatField from '../ButtonFloatField';
import AuthCtx from '../../Utils/context/AuthCtx';

const ProfileForm = ({navigation}) => {
  const authCtx = useContext(AuthCtx);

  const ProfileFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          username: authCtx.user?.username,
          email: authCtx.user?.email,
        }}
        onSubmit={values => {
          console.log('post submitted', values);
          // navigation.navigate('VerifyOtp', {page: 'ForgotPassword'});
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
            <View
              style={{
                alignItems: 'center',
                marginTop: 30,
              }}>
              <ButtonFloatField
                accessibilityLabel={'Edit profile'}
                handleButtonPress={handleSubmit}
                title={'Edit profile'}
                width="90%"
                buttonType="normal"
              />
              <ButtonFloatField
                accessibilityLabel={'Logout'}
                handleButtonPress={() => {
                  authCtx.logout();
                }}
                title={'Logout'}
                width="90%"
                buttonType="error"
              />
            </View>
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
