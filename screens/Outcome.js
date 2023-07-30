import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import AuthenticatedScreenWrapper from '../Utils/AuthenticatedScreenWrapper';
import OutcomeForm from '../components/forms/OutcomeForm';
import DataGrid from '../components/DataGrid';

const Outcome = () => {
  return (
    <AuthenticatedScreenWrapper>
      <ScrollView>
        <View style={styles.container}>
          <OutcomeForm />
          <DataGrid data={data} keyType="outcome_type" showType={'fail'} />
        </View>
      </ScrollView>
    </AuthenticatedScreenWrapper>
  );
};

let data = [
  {
    id: 1,
    outcome_type: 'Income',
    amount: 5,
    image:
      'https://compass1.org/wp-content/uploads/2011/06/shutterstock_144688553_clipped_rev_3.png',
  },
  {
    id: 1,
    outcome_type: 'Stocks',
    amount: 20,
    image:
      'https://compass1.org/wp-content/uploads/2011/06/shutterstock_144688553_clipped_rev_3.png',
  },
  {
    id: 1,
    outcome_type: 'Ranting',
    amount: 10,
    image:
      'https://compass1.org/wp-content/uploads/2011/06/shutterstock_144688553_clipped_rev_3.png',
  },
  {
    id: 1,
    outcome_type: 'Stocks',
    amount: 20,
    image:
      'https://compass1.org/wp-content/uploads/2011/06/shutterstock_144688553_clipped_rev_3.png',
  },
  {
    id: 1,
    outcome_type: 'Ranting',
    amount: 10,
    image:
      'https://compass1.org/wp-content/uploads/2011/06/shutterstock_144688553_clipped_rev_3.png',
  },
  {
    id: 1,
    outcome_type: 'Stocks',
    amount: 20,
    image:
      'https://compass1.org/wp-content/uploads/2011/06/shutterstock_144688553_clipped_rev_3.png',
  },
  {
    id: 1,
    outcome_type: 'Ranting',
    amount: 10,
    image:
      'https://compass1.org/wp-content/uploads/2011/06/shutterstock_144688553_clipped_rev_3.png',
  },
  {
    id: 1,
    outcome_type: 'Stocks',
    amount: 20,
    image:
      'https://compass1.org/wp-content/uploads/2011/06/shutterstock_144688553_clipped_rev_3.png',
  },
];

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default Outcome;
