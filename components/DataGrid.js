import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {getCurrentFormattedDate} from '../Utils/getFormatedDate';

const DataGrid = ({data, keyType, showType}) => {
  today = getCurrentFormattedDate();
  console.log(today);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: '#858585', fontSize: 15, fontWeight: '600'}}>
            {today}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: `${
              showType === 'success' ? '#00CB76' : '#CB0000'
            }`,
            borderRadius: 15,
            justifyContent: 'center',
            padding: 10,
          }}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
            $ {200.24}
          </Text>
        </View>
      </View>

      {data &&
        data?.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderTopColor: '#ECECEC',
              borderTopWidth: 1,
              marginTop: 15,
              paddingTop: 15,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                style={{width: 30, height: 30, marginRight: 10}}
                source={{uri: item?.image}}
              />
              <Text
                style={{color: '#003E6C', fontSize: 18, fontWeight: 'bold'}}>
                {item[keyType]}
              </Text>
            </View>
            <Text
              style={{
                color: `${showType === 'success' ? '#00CB76' : '#CB0000'}`,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {showType === 'success' ? '' : '-'}$ {item?.amount}
            </Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 20},
  scrollView: {
    backgroundColor: 'pink',
  },
  header: {flexDirection: 'row', justifyContent: 'space-between'},
  tinyLogo: {},
  finance_text: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default DataGrid;
