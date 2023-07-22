import React from 'react';
import {StyleSheet, Button, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const RightArrowIcon = <Icon name="arrowright" size={30} color="white" />;

const ButtonField = ({
  handleButtonPress,
  title,
  accessibilityLabel,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={e => console.log('e')}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#003E6C' : '#005DA0',
        },
        styles.button,
      ]}>
      {({pressed}) => <Text style={styles.buttonText}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    color: 'black',
    height: 60,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default ButtonField;
