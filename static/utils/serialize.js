import _ from 'lodash';

export const sanitiseQueryParams = (obj) => {
  let query = _.omitBy(obj, value => (_.isArray(value) && _.isEmpty(value)));

  query = _.mapValues(query, value => (_.isArray(value) ? _.join(value, ',') : value));
  query = _.omitBy(query, _.isNil);
  return query;
};

export const userConfiguration = (users = {}) => {
  const configuration = _.omitBy({
    basicInfo: [_.omitBy({
      name: _.get(users, 'name') ? _.get(users, 'name') : '',
      username: _.get(users, 'username') ? _.get(users, 'username') : '',
    }, _.isEmpty)],
    contact: [_.omitBy({
      email: _.get(users, 'email') ? _.get(users, 'email') : '',
      phone: _.get(users, 'phone') ? _.get(users, 'phone') : '',
      website: _.get(users, 'website') ? _.get(users, 'website') : '',
    }, _.isEmpty)],
    address: [_.omitBy({
      suite: _.get(users, 'address.suite') ? _.get(users, 'address.suite') : '',
      street: _.get(users, 'address.street') ? _.get(users, 'address.street') : '',
      city: _.get(users, 'address.city') ? _.get(users, 'address.city') : '',
      zipcode: _.get(users, 'address.zipcode') ? _.get(users, 'address.zipcode') : '',
    }, _.isEmpty)],
    location: [_.omitBy({
      latitude: _.get(users, 'address.geo.lat') ? _.get(users, 'address.geo.lat') : '',
      longitude: _.get(users, 'address.geo.lng') ? _.get(users, 'address.geo.lng') : '',
    }, _.isEmpty)],
    company: [_.omitBy({
      name: _.get(users, 'company.name') ? _.get(users, 'company.name') : '',
      catchPhrase: _.get(users, 'company.catchPhrase') ? _.get(users, 'company.catchPhrase') : '',
      bs: _.get(users, 'company.bs') ? _.get(users, 'company.bs') : '',
    }, _.isEmpty)],
  }, _.isEmpty);

  return configuration;
};
