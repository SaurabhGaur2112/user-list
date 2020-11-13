import _ from 'lodash';

export const sanitiseQueryParams = (obj) => {
  let query = _.omitBy(obj, value => (_.isArray(value) && _.isEmpty(value)));

  query = _.mapValues(query, value => (_.isArray(value) ? _.join(value, ',') : value));
  query = _.omitBy(query, _.isNil);
  return query;
};