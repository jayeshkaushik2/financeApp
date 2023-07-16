import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const LogoDisplay = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/icons/logo.png')}
      />
      <Text style={styles.finance_text}>FINANCE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  tinyLogo: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 85,
    height: 85,
  },
  finance_text: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default LogoDisplay;
