import apisauce from 'apisauce';
import {trim, isString} from 'lodash';

const apiClient = apisauce.create({
  // base URL is read from the "constructor"
  baseURL: 'https://api.punkapi.com/v2/',
  // here are some default headers
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Accept: '*/*',
  },
  // 30 second timeout...
  timeout: 30000,
});

apiClient.addResponseTransform(response => {
  if (response.data && isString(response.data)) {
    response.data = JSON.parse(trim(response.data));
  }
});

export default apiClient;
