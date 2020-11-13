import axios from 'axios';
import getConfig from 'next/config';
import _ from 'lodash';
import apiEndPoints from '../helpers/apiEndPoints';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export async function getUserDetails(id) {
  try {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: apiEndPoints.user.getUserDetails(id),
      headers: {
        'Content-type': 'application/json',
      },
    });

    return _.get(response, 'data', {});
  } catch (error) {
    return error;
  }
}
