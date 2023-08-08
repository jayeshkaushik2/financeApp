import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import AuthenticatedScreenWrapper from '../Utils/AuthenticatedScreenWrapper';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
// import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import DataGrid from '../components/DataGrid';
import DataChar from '../components/DataChar';

const cart_data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(0, 203, 118, ${opacity})`, // optional
    },
    {
      data: [10, 40, 1, 8, 98, 4],
      color: (opacity = 1) => `rgba(203, 0, 0, ${opacity})`, // optional
    },
  ],
  legend: [], // optional takes string eg: ["Cart data"]
};

let income_data = [
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

let outcome_data = [
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

const Home = () => {
  return (
    <AuthenticatedScreenWrapper>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#005DA0',
            alignItems: 'center',
            padding: 15,
          }}>
          <Text style={styles.finance_text}>FINANCE</Text>
          <DataChar data={cart_data} />
        </View>
        <View style={styles.container}>
          <DataGrid
            data={outcome_data}
            keyType="outcome_type"
            showType={'fail'}
          />
        </View>
        <View style={styles.container}>
          <DataGrid
            data={income_data}
            keyType="earning_type"
            showType={'success'}
          />
        </View>
      </ScrollView>
    </AuthenticatedScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  finance_text: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    padding: 13,
  },
});

export default Home;
