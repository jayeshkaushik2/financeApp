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
    outcome_type: 'Food & Drinks',
    amount: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/5787/5787098.png',
  },
  {
    id: 1,
    outcome_type: 'Auto & Cab',
    amount: 30,
    image: 'https://cdn-icons-png.flaticon.com/512/7804/7804371.png',
  },
];

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default Outcome;
