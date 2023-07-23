// AuthenticatedScreenWrapper.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomNavBar from '../components/BottomNavBar';

const AuthenticatedScreenWrapper = ({children}) => {
  const navigation = useNavigation();

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
  },
  content: {
    flex: 1,
  },
});

export default AuthenticatedScreenWrapper;
