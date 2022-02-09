/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <div className="d-flex flex-column h-100">
    <Navbar />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Layout;
