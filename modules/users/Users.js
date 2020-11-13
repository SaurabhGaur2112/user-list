// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react component
import Button from '@hawk-ui/button';
import DynamicView from '../../components/dynamicView';

export default class Users extends Component {
  static propTypes = {
    userDetails: PropTypes.object,
  }

  render() {
    const { userDetails } = this.props;

    return (
      <div className="users">
        <div className="users-header">
          <a href="/">
            <Button
              type="button"
            >
              <i className="fas fa-arrow-left" />
            </Button>
          </a>
        </div>
        <div className="users-container">
          <DynamicView
            configuration={userDetails}
          />
        </div>
      </div>
    );
  }
}
