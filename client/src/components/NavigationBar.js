import React from 'react';

import { Navbar } from 'react-bootstrap';

import logo from '../assets/logo.svg';

const NavigationBar = ({ xxx }) => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>
        <img
          alt='BrandLogo'
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        Komoot Tours {xxx}
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavigationBar;
