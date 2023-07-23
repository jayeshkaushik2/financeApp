import React from 'react';
import {Text, View} from 'react-native';
import AuthenticatedScreenWrapper from '../Utils/AuthenticatedScreenWrapper';

const Outcome = () => {
  return (
    <AuthenticatedScreenWrapper>
      <View>
        <Text>Outcome</Text>
      </View>
    </AuthenticatedScreenWrapper>
  );
};

export default Outcome;
