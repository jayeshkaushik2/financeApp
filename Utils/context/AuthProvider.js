import AuthCtx from './AuthCtx';
import {useState, useEffect} from 'react';
import {getItemValue, setItemValue, removeItem} from '../Storage';
import {useNavigation} from '@react-navigation/native';
import {createApi} from '../apis';
import {ShowNotification} from '../Notification';
import messages from '../Messages';

const AuthProivder = ({children}) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState(null);

  const login = async credentials => {
    const resp = await createApi('login', {}, credentials);
    if (resp && resp?.tokens) {
      // setItem to storage and state
      setItemValue('user', resp);
      setItemValue('tokens', resp.tokens);
      setUser(resp);
      setTokens(resp.tokens);

      if (!resp.is_verified) {
        navigation.navigate('VerifyOtp');
      } else {
        navigation.navigate('Home');
      }
    } else {
      ShowNotification(resp, messages.UNABLE_TO_LOGIN);
    }
  };

  const signUp = async credentials => {
    const resp = await createApi('signup', {}, credentials);
    if (resp && resp?.tokens) {
      // setItem to storage and state
      setItemValue('user', resp);
      setItemValue('tokens', resp.tokens);
      setUser(resp);
      setTokens(resp.tokens);
      navigation.navigate('VerifyOtp');
      // redirect to verify otp page
    } else {
      ShowNotification(resp, messages.UNABLE_TO_SIGNUP);
    }
  };

  const forgotPassword = async credentials => {
    const resp = await createApi('forgot-password', {}, credentials);
    if (resp && resp?.success) {
      ShowNotification(resp, 'Otp is sent to your registered email.');
      // throw the success message and redirect to verifyOtp
    } else {
      ShowNotification(resp, messages.SERVER_ERROR);
    }
  };

  const verifyOtp = async (credentials, prevPage) => {
    const resp = await createApi('verify-otp', {}, credentials);
    if (resp && resp?.success) {
      // throw success message and redirect to home page
      ShowNotification(resp, 'Your OTP is verified.');
      if (prevPage === 'ForgotPassword') {
        navigation.push('NewPassword');
      } else {
        navigation.push('Home');
      }
    } else {
      ShowNotification(resp, messages.UNABLE_TO_VERIF_OTP);
    }
  };

  const resendOtp = async credentials => {
    const resp = await createApi('resend-otp', {}, credentials);
    if (resp && resp?.success) {
      // throw success message
    } else {
      ShowNotification(resp, messages.UNABLE_TO_RESEND_OTP);
    }
  };

  const logout = () => {
    removeItem('user');
    removeItem('tokens');
    navigation.navigate('Login');
  };

  let authFunctions = {
    user: user,
    tokens: tokens,
    login: login,
    signUp: signUp,
    forgotPassword: forgotPassword,
    verifyOtp: verifyOtp,
    resendOtp: resendOtp,
    logout: logout,
  };

  useEffect(() => {
    async function setUserAndToken() {
      let stored_user = await getItemValue('user');
      let stored_tokens = await getItemValue('tokens');
      setUser(JSON.parse(stored_user));
      setTokens(JSON.parse(stored_tokens));

      if (stored_user && stored_tokens !== null) {
        navigation.navigate('Home');
      }
    }
    setUserAndToken();
  }, []);

  return <AuthCtx.Provider value={authFunctions}>{children}</AuthCtx.Provider>;
};

export default AuthProivder;
