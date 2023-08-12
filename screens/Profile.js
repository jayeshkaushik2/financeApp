import React, {useContext} from 'react';
import {Text, View, Image} from 'react-native';
import AuthenticatedScreenWrapper from '../Utils/AuthenticatedScreenWrapper';
import ProfileForm from '../components/forms/ProfileForm';
import AuthCtx from '../Utils/context/AuthCtx';

const Profile = ({navigation}) => {
  const authCtx = useContext(AuthCtx);

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
          {authCtx.user?.profile_image ? (
            <Image
              style={{
                width: 130,
                height: 130,
                borderRadius: 100,
                backgroundColor: '#D9D9D9',
                marginBottom: 10,
              }}
              source={{uri: authCtx.user.profile_image}}
            />
          ) : (
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
          )}
          <Text style={{fontSize: 28, fontWeight: '500', color: 'white'}}>
            {authCtx.user?.username}
          </Text>
        </View>
        <ProfileForm navigation={navigation} />
      </View>
    </AuthenticatedScreenWrapper>
  );
};

export default Profile;
