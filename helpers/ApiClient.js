/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-return-assign */
import axios from 'axios';
import _ from 'lodash';
import getConfig from 'next/config';

const methods = ['get', 'post', 'put', 'patch', 'delete'];

const formatUrl = (path) => {
  if (path[0] === 'h') return path;

  const adjustedPath = path[0] !== '/' ? `/${path}` : path;

  return adjustedPath;
};

const sanitiseQueryParams = (obj) => {
  let query = _.omitBy(obj, value => (_.isArray(value) && _.isEmpty(value)));

  query = _.mapValues(query, value => (_.isArray(value) ? _.join(value, ',') : value));
  query = _.omitBy(query, _.isNil);
  return query;
};

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export default class ApiClient {
  constructor() {
    methods.forEach(method => this[method] = (path, { params, data } = {}) => (
      axios({
        method: _.toUpper(method),
        baseURL: API_URL,
        url: formatUrl(path),
        ...(_.isNil(params) ? {} : { params: sanitiseQueryParams(params) }),
        ...(_.isNil(data) ? {} : { data: JSON.stringify(data) }),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(response => response)
        .catch((error) => { throw error; })
    ));
  }
}
