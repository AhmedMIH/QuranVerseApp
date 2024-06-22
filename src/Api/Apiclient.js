import apisauce from 'apisauce';
import {trim, isString} from 'lodash';
import {safeJsonParse} from '../Utils/Helper';

const apiClient = apisauce.create({
  // base URL is read from the "constructor"
  baseURL: 'https://daily-verse-k4phosr7iq-ue.a.run.app/',
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
    response.data = safeJsonParse(trim(response.data));
  }
});

export default apiClient;
