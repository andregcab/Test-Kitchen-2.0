import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => (
  <Navbar>
    <Navbar.Brand as={Link} to="/">
      <h1>Test Kitchen</h1>
    </Navbar.Brand>
    <FontAwesomeIcon icon="user" />
  </Navbar>
);
