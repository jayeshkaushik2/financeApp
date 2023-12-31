import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import AuthenticatedScreenWrapper from '../Utils/AuthenticatedScreenWrapper';
import IncomeForm from '../components/forms/IncomeForm';
import DataGrid from '../components/DataGrid';

const Income = () => {
  return (
    <AuthenticatedScreenWrapper>
      <ScrollView>
        <View style={styles.container}>
          <IncomeForm />
          <DataGrid data={data} keyType="earning_type" showType={'success'} />
        </View>
      </ScrollView>
    </AuthenticatedScreenWrapper>
  );
};

let data = [
  {
    id: 1,
    earning_type: 'Income',
    amount: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135679.png',
  },
  {
    id: 1,
    earning_type: 'Stocks',
    amount: 20,
    image: 'https://cdn-icons-png.flaticon.com/128/4256/4256900.png',
  },
  {
    id: 1,
    earning_type: 'Ranting',
    amount: 10,
    image: 'https://cdn-icons-png.flaticon.com/512/4503/4503988.png',
  },
];

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Income;
