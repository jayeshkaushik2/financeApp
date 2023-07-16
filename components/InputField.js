import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const InputField = ({
  placeholder,
  keyboardType = null,
  textContentType,
  autoFocus = false,
  onChangeText,
  onBlur,
  value,
}) => {
  return (
    <TextInput
      placeholderTextColor="gray"
      placeholder={placeholder}
      autoCapitalize="none"
      keyboardType={keyboardType}
      textContentType={textContentType}
      autoFocus={autoFocus}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ECECEC',
    padding: 10,
    height: 60,
    marginBottom: 10,
    fontSize: 16,
  },
});

export default InputField;
