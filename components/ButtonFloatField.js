import React from 'react';
import {StyleSheet, Button, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const RightArrowIcon = <Icon name="arrowright" size={30} color="white" />;

const ButtonFloatField = ({
  handleButtonPress,
  title,
  accessibilityLabel,
  disabled = false,
  width,
  buttonType,
}) => {
  return (
    <Pressable
      onPress={e => {
        handleButtonPress();
      }}
      style={({pressed}) => [styles.button(width, buttonType, pressed)]}>
      {({pressed}) => <Text style={styles.buttonText}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: (width, buttonType, pressed) => {
    if (buttonType === 'normal') {
      return {
        backgroundColor: pressed ? '#003E6C' : '#005DA0',
        borderRadius: 15,
        width: width,
        height: 50,
        marginBottom: 10,
      };
    } else {
      return {
        backgroundColor: pressed ? '#AD0000' : '#CB0000',
        borderRadius: 15,
        width: width,
        height: 50,
        marginBottom: 10,
      };
    }
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default ButtonFloatField;
