// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Users extends Component {
  static propTypes = {
    userDetails: PropTypes.object,
  }

  render() {
    const { userDetails } = this.props;

    console.log('query userDetails', userDetails);
    return (
      <div className="users">
        Users
      </div>
    );
  }
}
