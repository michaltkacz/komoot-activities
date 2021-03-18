import React from 'react';
import styled from 'styled-components';

import logoImg from '../assets/logo128.png';

const LogoContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const LogoTitle = styled.h3`
  color: white;
  font-weight: 900;
  padding: 0 0.25rem;
`;

const LogoImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0.2rem;
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logoImg} alt='logo' />
      <LogoTitle>komoot routes</LogoTitle>
    </LogoContainer>
  );
};
