// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react components
import Layout from '../components/globals/Layout';
// react modules
import Users from '../modules/users/Users';
// utils modules
import { userConfiguration } from '../static/utils/serialize';
// webUtils modules
import { getUserDetails } from '../webUtils/user';

export default class User extends Component {
  static async getInitialProps({ query, res, req }) {
    try {
      const response = await getUserDetails(req.query.userId);
      return {
        userDetails: response,
      };
    } catch (error) {
      return {
        userDetails: {},
      };
    }
  };

  static propTypes = {
    userLists: PropTypes.object,
  }

  state = {};

  render() {
    const { userDetails } = this.props;

    return (
      <Layout>
        <Users
          userDetails={userConfiguration(userDetails)}
        />
      </Layout>
    );
  }
}
