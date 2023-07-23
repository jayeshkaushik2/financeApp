import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const BottomNavBar = ({navigation}) => {
  // TODO get the activePage from navigation params
  const activePage = 'Home';
  return (
    <View style={styles.container}>
      <View>
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
      </View>

      <View>
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
      </View>

      <View>
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
      </View>

      <View>
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
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    flexDirection: 'row',
    height: 70,
    borderTopColor: 'black',
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
