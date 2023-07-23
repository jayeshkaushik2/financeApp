import React from 'react';
import {Text, View} from 'react-native';
import AuthenticatedScreenWrapper from '../Utils/AuthenticatedScreenWrapper';

const Profile = ({navigation}) => {
  return (
    <AuthenticatedScreenWrapper>
      <View>
        <Text>Profile</Text>
      </View>
    </AuthenticatedScreenWrapper>
  );
};

export default Profile;
