import React from 'react';
import {StyleSheet, Button, Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const CreationHeader = ({heading, active, setActive}) => {
  console.log('active', active);
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{heading}</Text>
      <Pressable onPress={() => setActive(!active)}>
        <Text style={styles.headingText}>Add +</Text>
      </Pressable>
      {/* <Icon
        name={active ? 'plus' : 'cross'}
        size={30}
        color="white"
        onPress={() => setActive(!active)}  
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#003E6C',
    borderRadius: 15,
    justifyContent: 'center',
    padding: 10,
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CreationHeader;
