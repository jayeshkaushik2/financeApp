import {Alert} from 'react-native';
import messages from './Messages';

function getResponseError(response) {
  console.log('got error response', response);
  let errorMsg = messages.SERVER_ERROR;
  if (response?.errors) {
    errorMsg = response.errors[0];
  }
  return errorMsg;
}

function getCatchedError(catchedError) {
  return messages.SERVER_ERROR;
}

export function ShowNotification(
  response = null,
  customMsg = '',
  catchedError,
) {
  if (response) {
    customMsg = getResponseError(response);
  }
  Alert.alert(customMsg);
}
