// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import Navbar from '../components/globals/Navbar';
// css modules
import '../static/scss/main.scss';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
  };

  state = {};

  render() {
    const { children } = this.props;

    return (
      <div>
        <Navbar
          title="User List"
        />
        {children}
      </div>
    );
  }
}

export default Layout;
