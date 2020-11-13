// vendor modules
import React, { Component } from 'react';
// react modules
import PropTypes from 'prop-types';
import Head from 'next/head';
import _ from 'lodash';
import Layout from '../components/globals/Layout';

export default class Error extends Component {
  static getInitialProps({ err, res, xhr }) {
    const statusCode = (res && res.statusCode) || (xhr && xhr.status) || null;
    return { statusCode };
  }

  static propTypes = {
    statusCode: PropTypes.number,
  }

  state = {};

  render() {
    const { statusCode } = this.props;

    return (
      <Layout>
        <Head>
          {`Error ${statusCode} | Truelink Assignment`}
        </Head>
        {_.isEqual(statusCode, 404) ? (
          <div>404 Not Found</div>
        ) : (
          <div>500 Internal Server Error</div>
        )}
      </Layout>
    );
  }
}
