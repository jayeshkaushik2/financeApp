// AuthenticatedScreenWrapper.js
import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomNavBar from '../components/BottomNavBar';
import AuthCtx from './context/AuthCtx';

const AuthenticatedScreenWrapper = ({children}) => {
  const navigation = useNavigation();
  const authCtx = useContext(AuthCtx);

  useEffect(() => {
    if (!authCtx.user || !authCtx.tokens) {
      navigation.navigate('Login');
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      {/* Render the BottomNavBar */}
      <BottomNavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
});

export default AuthenticatedScreenWrapper;
