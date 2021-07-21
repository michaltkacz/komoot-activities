import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import BrandLogo from './BrandLogo';
import UserForm from './UserForm';

const NavigationBar = () => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='sm'
      collapseOnSelect
      className='navigation-bar'
    >
      <Navbar.Brand>
        <BrandLogo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='nav-list'>
          <Nav.Link eventKey='1' as={Link} to='/map'>
            Map
          </Nav.Link>
          <Nav.Link disabled eventKey='2' as={Link} to='/user'>
            User
          </Nav.Link>
        </Nav>
        <UserForm />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
