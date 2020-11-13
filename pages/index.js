// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react components
import Layout from '../components/globals/Layout';
// react modules
import Home from '../modules/home/Home';
// webUtils modules
import { getUserLists } from '../webUtils/home';

export default class Index extends Component {
  static async getInitialProps() {
    let userId = 1;
    try {
      const response = await getUserLists({ userId });
      return {
        userLists: response,
      };
    } catch (error) {
      return {
        userLists: {},
      };
    }
  };

  static propTypes = {
    userLists: PropTypes.object,
  }

  state = {};

  render() {
    const { userLists } = this.props;

    console.log('query userLists', userLists);
    return (
      <Layout>
        <Home
          userLists={userLists}
        />
      </Layout>
    );
  }
}
