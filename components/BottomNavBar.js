import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';

const BottomNavBar = ({navigation}) => {
  // TODO get the activePage from navigation params
  const route = useRoute();
  const activePage = route?.name;

  const handlePageUpdate = to => {
    console.log(activePage, route?.name, to);
    if (route?.name === to) {
      return;
    }
    navigation.navigate(to);
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => handlePageUpdate('Home')}>
          {activePage === 'Home' ? (
            <Image
              style={styles.icon}
              source={require('../assets/icons/BottomNavBarIcons/home-active.png')}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require('../assets/icons/BottomNavBarIcons/home.png')}
            />
          )}
          <Text style={styles.iconText(activePage === 'Home')}>Home</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => handlePageUpdate('Income')}>
          {activePage === 'Income' ? (
            <Image
              style={styles.icon}
              source={require('../assets/icons/BottomNavBarIcons/income-active.png')}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require('../assets/icons/BottomNavBarIcons/income.png')}
            />
          )}
          <Text style={styles.iconText(activePage === 'Income')}>Income</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => handlePageUpdate('Outcome')}>
          {activePage === 'Outcome' ? (
            <Image
              style={styles.icon}
              source={require('../assets/icons/BottomNavBarIcons/outcome-active.png')}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require('../assets/icons/BottomNavBarIcons/outcome.png')}
            />
          )}
          <Text style={styles.iconText(activePage === 'Outcome')}>Outcome</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => handlePageUpdate('Profile')}>
          {activePage === 'Profile' ? (
            <Image
              style={styles.icon}
              source={require('../assets/icons/BottomNavBarIcons/user-active.png')}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require('../assets/icons/BottomNavBarIcons/user.png')}
            />
          )}
          <Text style={styles.iconText(activePage === 'Profile')}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    flexDirection: 'row',
    height: 70,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  icon: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 30,
    height: 30,
  },
  iconText: isActive => {
    if (isActive) {
      return {color: '#005DA0'};
    }
  },
});

export default BottomNavBar;
