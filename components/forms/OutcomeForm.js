import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDown from '../DropDown';
import CreationHeader from '../CreationHeader';
import InputField from '../InputField';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ButtonFloatField from '../ButtonFloatField';

const OutcomeFormSchema = Yup.object().shape({
  amount: Yup.string().email().required('Amount is required'),
  outcome_type: Yup.string().required('Outcome Type is required'),
});

const OutcomeForm = () => {
  const [activeCreationHeader, setActiveCreationHeader] = React.useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      label: 'Food & Drinks',
      value: 'Food & Drinks',
      image: 'https://cdn-icons-png.flaticon.com/512/5787/5787098.png',
    },
    {
      id: 1,
      label: 'Auto & Cab',
      value: 'Auto & Cab',
      image: 'https://cdn-icons-png.flaticon.com/512/7804/7804371.png',
    },
  ]);

  return (
    <Formik
      initialValues={{outcome_type: '', amount: ''}}
      onSubmit={values => {
        console.log('post submitted', values);
        navigation.navigate('Home');
      }}
      validationSchema={OutcomeFormSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View style={styles.container}>
            <CreationHeader
              heading="Outcome"
              active={activeCreationHeader}
              setActive={setActiveCreationHeader}
            />

            {activeCreationHeader ? (
              <>
                <DropDown
                  placeholder={'Select Outcome Type'}
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

export default OutcomeForm;
