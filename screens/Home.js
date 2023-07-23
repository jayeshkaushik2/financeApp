import React from 'react';
import {Text, View} from 'react-native';
import AuthenticatedScreenWrapper from '../Utils/AuthenticatedScreenWrapper';

const Home = () => {
  return (
    <AuthenticatedScreenWrapper>
      <View>
        <Text>Home</Text>
      </View>
    </AuthenticatedScreenWrapper>
  );
};

export default Home;
