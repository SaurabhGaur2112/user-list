import axios from 'axios';
import getConfig from 'next/config';
import _ from 'lodash';
import apiEndPoints from '../helpers/apiEndPoints';
import { sanitiseQueryParams } from '../static/utils/serialize';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export async function getUserLists(params) {
  try {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: apiEndPoints.home.getUserLists(),
      ...(_.isNil(params) ? {} : { params: sanitiseQueryParams(params) }),
      headers: {
        'Content-type': 'application/json',
      },
    });

    return _.get(response, 'data', {});
  } catch (error) {
    return error;
  }
}
