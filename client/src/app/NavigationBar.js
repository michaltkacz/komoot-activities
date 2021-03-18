import React from 'react';
import styled from 'styled-components';

import { Logo } from './Logo.js';

const NavBarContainer = styled.div`
  background: ${(props) => props.theme.darkGray};
  width: 100%;
  height: 10%;
  margin: 0;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
`;

export const NavigationBar = () => {
  return (
    <NavBarContainer>
      <Logo />
    </NavBarContainer>
  );
};
