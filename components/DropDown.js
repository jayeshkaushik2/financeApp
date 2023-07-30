import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = ({
  placeholder,
  items,
  setItems,
  value,
  setValue,
  style = {},
}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={style}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        style={styles.dropDown}
        labelStyle={styles.dropDownLable}
        placeholderStyle={styles.dropDownLable}
        arrowIconStyle={{width: 25, height: 25}}
        dropDownStyle={{backgroundColor: 'blue', marginTop: 10}}
        selectedLabelStyle={{
          color: '#39739d',
          fontSize: 20,
        }}
        activeItemStyle={{justifyContent: 'center'}}
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
  },
  dropDownLable: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#005DA0',
  },
});

export default DropDown;
