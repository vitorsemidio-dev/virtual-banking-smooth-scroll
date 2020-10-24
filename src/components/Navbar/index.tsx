/** @format */

import React from 'react';

import { Nav, NavContainer, NavLogo } from './styles';

const Navbar: React.FC = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>logo</NavLogo>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
