import React from 'react';
import {Text, View, Image} from 'react-native';
import AuthenticatedScreenWrapper from '../Utils/AuthenticatedScreenWrapper';
import ProfileForm from '../components/forms/ProfileForm';

const Profile = ({navigation}) => {
  return (
    <AuthenticatedScreenWrapper>
      <View>
        <View
          style={{
            height: '50%',
            justifyContent: 'center',
            backgroundColor: '#005DA0',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 130,
              height: 130,
              borderRadius: 100,
              backgroundColor: '#D9D9D9',
              marginBottom: 10,
            }}
            source={require('../assets/icons/BottomNavBarIcons/user.png')}
          />
          <Text style={{fontSize: 28, fontWeight: '500', color: 'white'}}>
            Jayesh kaushik
          </Text>
        </View>
        <ProfileForm navigation={navigation} />
      </View>
    </AuthenticatedScreenWrapper>
  );
};

export default Profile;
