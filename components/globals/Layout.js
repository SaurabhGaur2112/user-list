// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
// react modules
import Navbar from './Navbar';
// css modules
import '../../static/scss/main.scss';

export default function Layout(props) {
  const { children } = props;

  return (
    <div className="layout">
      <Navbar
        title="User List"
      />
      <div className="layout-child">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
};
