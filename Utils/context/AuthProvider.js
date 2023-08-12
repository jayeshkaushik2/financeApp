import AuthCtx from './AuthCtx';
import {useState, useEffect} from 'react';
import {getItemValue, setItemValue, removeItem} from '../Storage';
import {useNavigation} from '@react-navigation/native';
import {createApi} from '../apis';

const AuthProivder = ({children}) => {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState(null);

  const login = async credentials => {
    const resp = await createApi('login', {}, credentials);
    console.log('login data', resp && resp?.tokens);
    if (resp && resp?.tokens) {
      // setItem to storage and state
      setItemValue('user', resp);
      setItemValue('tokens', resp.tokens);
      setUser(resp);
      setTokens(resp.tokens);
      navigation.navigate('Home');
    } else {
      console.log('Unable to login');
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
      // redirect to verify otp page
    } else {
      console.log('Unable to signup');
    }
  };

  const forgotPassword = async credentials => {
    const resp = await createApi('forgot-password', {}, credentials);
    if (resp && resp?.success) {
      // throw the success message and redirect to verifyOtp
    } else {
      console.log('Unable to forgot password');
    }
  };

  const verifyOtp = async credentials => {
    const resp = await createApi('verify-otp', {}, credentials);
    if (resp && resp?.success) {
      // throw success message and redirect to home page
    } else {
      console.log('Unable to signup');
    }
  };

  const resendOtp = async credentials => {
    const resp = await createApi('resend-otp', {}, credentials);
    if (resp && resp?.success) {
      // throw success message
    } else {
      console.log('Unable to signup');
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
        console.log('user already logged in');
        navigation.navigate('Home');
      }
    }
    setUserAndToken();
  }, []);

  return <AuthCtx.Provider value={authFunctions}>{children}</AuthCtx.Provider>;
};

export default AuthProivder;
