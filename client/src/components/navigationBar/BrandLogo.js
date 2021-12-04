import React from 'react';

import logo from '../../assets/logo.svg';

const BrandLogo = () => {
  return (
    <span className='brand-logo'>
      <img
        alt='BrandLogo'
        src={logo}
        width='30'
        height='30'
        className='brand-image'
      />
      <span className='brand-name'>Komoot Activities</span>
    </span>
  );
};

export default BrandLogo;
