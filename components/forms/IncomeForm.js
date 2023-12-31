import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDown from '../DropDown';
import CreationHeader from '../CreationHeader';
import InputField from '../InputField';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ButtonFloatField from '../ButtonFloatField';

const IncomeFormSchema = Yup.object().shape({
  amount: Yup.string().email().required('Amount is required'),
  earning_type: Yup.string().required('Earning Type is required'),
});

const IncomeForm = () => {
  const [activeCreationHeader, setActiveCreationHeader] = React.useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      label: 'Income',
      value: 'Income',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135679.png',
    },
    {
      id: 1,
      label: 'Stocks',
      value: 'Stocks',
      image: 'https://cdn-icons-png.flaticon.com/128/4256/4256900.png',
    },
    {
      id: 1,
      label: 'Ranting',
      value: 'Ranting',
      image: 'https://cdn-icons-png.flaticon.com/512/4503/4503988.png',
    },
  ]);

  return (
    <Formik
      initialValues={{earning_type: '', amount: ''}}
      onSubmit={values => {
        console.log('post submitted', values);
        navigation.navigate('Home');
      }}
      validationSchema={IncomeFormSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View style={styles.container}>
            <CreationHeader
              heading="Income"
              active={activeCreationHeader}
              setActive={setActiveCreationHeader}
            />
            {activeCreationHeader ? (
              <>
                <DropDown
                  placeholder={'Select Earning Type'}
                  items={items}
                  setItems={setItems}
                  value={value}
                  setValue={setValue}
                  style={{marginBottom: 10}}
                />
                <InputField
                  placeholder="Amount"
                  autoFocus={false}
                  onChangeText={handleChange('amount')}
                  onBlur={handleBlur('amount')}
                  value={values?.amount}
                />
                <View style={{alignItems: 'flex-end'}}>
                  <ButtonFloatField
                    accessibilityLabel={'Create'}
                    handleButtonPress={handleSubmit}
                    title={'Create'}
                    width="30%"
                    buttonType="normal"
                  />
                </View>
              </>
            ) : null}
          </View>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default IncomeForm;
