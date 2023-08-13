import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const OtpField = ({
  placeholder,
  keyboardType = null,
  textContentType,
  autoFocus = false,
  onChangeText,
  onBlur,
  value,
}) => {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  const [otp, setOtp] = React.useState(Array(arr.length).fill('')); // Initialize the otp state with an array of empty strings
  const inputRefs = React.useRef([]); // Create a ref to store references of all TextInput components

  // Function to handle the focus on the next input
  const focusNextInput = index => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus(); // Move the focus to the next input
    }
  };

  // Function to handle changes in each OTP digit
  const handleOTPChange = (index, value) => {
    const newOTPArray = [...otp];
    newOTPArray[index] = value;
    let genotp = newOTPArray.join('');
    onChangeText(genotp);
    setOtp(newOTPArray);

    if (value !== '') {
      focusNextInput(index); // Move the focus to the next input if a digit is entered
    }
  };
  return (
    <>
      <View style={styles.container}>
        {arr.map((item, index) => (
          <TextInput
            key={index}
            ref={input => (inputRefs.current[index] = input)} // Store the reference of the input in the inputRefs array
            autoFocus={autoFocus && index === 0}
            placeholderTextColor="gray"
            inputMode="numeric"
            autoCapitalize="none"
            // keyboardType={keyboardType}
            textContentType={textContentType}
            onChangeText={text => handleOTPChange(index, text)}
            onBlur={onBlur}
            value={otp[index]}
            style={styles.input}
            maxLength={1} // Limit each input to a single character
            onKeyPress={({nativeEvent}) => {
              // Move to the previous input if Backspace is pressed and the current input is empty
              if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
                focusNextInput(index - 1);
              }
            }}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-evenly'},
  input: {
    backgroundColor: '#ECECEC',
    padding: 10,
    paddingLeft: 19,
    height: 60,
    width: 50,
    marginBottom: 20,
    fontSize: 20,
    borderRadius: 10,
    fontWeight: 'bold',
  },
});

export default OtpField;
