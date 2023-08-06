import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {View, StyleSheet, Text} from 'react-native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const DataChar = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <Text style={{fontSize: 21, fontWeight: 'bold', color: '#003E6C'}}>
          Money Status
        </Text>
        <Text style={{fontSize: 19, fontWeight: 'bold', color: '#005DA0'}}>
          Last Month
        </Text>
      </View>
      <LineChart
        data={data}
        width={screenWidth - 50}
        height={250}
        verticalLabelRotation={25}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View style={styles.income_container}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#003E6C'}}>
            Income
          </Text>
          <Text style={{fontSize: 30, fontWeight: '400', color: '#00CB76'}}>
            $ 2000
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#003E6C'}}>
            Outcome
          </Text>
          <Text style={{fontSize: 30, fontWeight: '400', color: '#CB0000'}}>
            $ 350
          </Text>
        </View>
      </View>
    </View>
  );
};

const chartConfig = {
  backgroundColor: 'black',
  backgroundGradientFrom: '#F0F0F0',
  backgroundGradientTo: '#dbdbdb',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${0})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '3',
    // circumference width and color of the the cicrle
    strokeWidth: '1',
    stroke: '#003E6C',
  },
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: 'white',
    height: 'fit-content',
    width: '100%',
    padding: 11,
  },
  sub_container: {flexDirection: 'row', justifyContent: 'space-between'},
  income_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DataChar;
