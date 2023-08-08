import React, {useState} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const DropDown = ({
  placeholder,
  items,
  setItems,
  value,
  setValue,
  style = {},
}) => {
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: item?.image
              ? item?.image
              : 'https://cdn-icons-png.flaticon.com/512/1101/1101587.png',
          }}
        />
        <Text style={styles.item_text}>{item.label}</Text>
      </View>
    );
  };

  const renderLeftIcon = item => {
    return (
      <View style={{marginRight: 10}}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: item?.image
              ? item?.image
              : 'https://cdn-icons-png.flaticon.com/512/4503/4503988.png',
          }}
        />
      </View>
    );
  };

  return (
    <View style={style}>
      <Dropdown
        data={items}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        style={styles.dropDown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        imageStyle={styles.imageStyle}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={renderLeftIcon}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  dropDown: {
    marginTop: 20,
    borderRadius: 15,
    borderColor: 'white',
    backgroundColor: '#ECECEC',
    height: 60,
    paddingLeft: 15,
    paddingRight: 15,
  },
  placeholderStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#005DA0',
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.2,
    borderTopColor: 'gray',
  },
  item_text: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#005DA0',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default DropDown;
