import Constants from './constant';

const API_URL =
  'https://f1b4-2402-3a80-41f0-e008-39e4-2aea-9504-3b4d.ngrok-free.app'; //Constants.FINANCE_API_URL;

function handleError(error) {
  console.log('got error', error);
}

function get_formated_query_params(query_params) {
  let params = '?';

  for (const key in query_params) {
    if (query_params.hasOwnProperty(key)) {
      params += `${key}=${query_params[key]}&`;
    }
  }
  params = params.slice(0, -1);
  return params;
}

function get_api_url(api_path, query_params = {}, pk) {
  // need api_path without any pre or post "/"
  let api = `${API_URL}/${api_path}/`;
  let params = get_formated_query_params(query_params);

  if (pk) {
    api += `${pk}/`;
  }
  if (params === '?') {
    return api;
  } else {
    api = `${api}${params}`;
  }

  return api;
}

function get_api_response(method, headersType = 'default', data) {
  let api_response = {
    method: method,
  };
  let headers = {};

  if (data) {
    api_response['body'] = JSON.stringify(data);
  }

  if (headersType === 'default') {
    headers['Content-Type'] = 'application/json';
  } else if (headersType === 'media') {
    headers['Content-Type'] = 'media-type';
  }

  api_response['headers'] = headers;

  return api_response;
}

export const getListApi = async (api_path, query_params = {}) => {
  try {
    const api_url = get_api_url(api_path, query_params);
    const api_response = get_api_response('GET');
    const response = await fetch(api_url, api_response);
    const responseData = await response.json();

    if (!response.ok) {
      handleError(responseData);
    }
    return responseData;
  } catch (error) {
    handleError(error);
  }
};

export const getDetailApi = async (api_path, query_params = {}, pk) => {
  try {
    const api_url = get_api_url(api_path, query_params, pk);
    const api_response = get_api_response('GET');
    const response = await fetch(api_url, api_response);
    const responseData = await response.json();

    if (!response.ok) {
      handleError(responseData);
    }
    return responseData;
  } catch (error) {
    handleError(error);
  }
};

export const createApi = async (
  api_path,
  query_params = {},
  data = {},
  headerType = 'default',
) => {
  try {
    const api_url = get_api_url(api_path, query_params);
    const api_response = get_api_response('POST', headerType, data);
    const response = await fetch(api_url, api_response);
    const responseData = await response.json();
    if (!response.ok) {
      handleError(responseData);
    }
    return responseData;
  } catch (error) {
    handleError(error);
  }
};

export const deleteApi = async () => {
  try {
    const api_url = get_api_url(api_path, query_params);
    const api_response = get_api_response('DELETE');
    const response = await fetch(api_url, api_response);
    const responseData = await response.json();

    if (!response.ok) {
      handleError(responseData);
    }
    return responseData;
  } catch (error) {
    handleError(error);
  }
};
