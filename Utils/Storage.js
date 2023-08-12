import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItemValue(key) {
  try {
    const value = await AsyncStorage.getItem('user');
    return value;
  } catch (error) {
    console.log('Unable to get item from async storage for', key, error);
  }
}

export async function setItemValue(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Unable to set item in async storage for', key, value, error);
  }
}

export async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Unable to remove item from async storage for', key, error);
  }
}
