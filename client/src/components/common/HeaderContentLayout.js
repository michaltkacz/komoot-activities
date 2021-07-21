import React from 'react';

const HeaderContentLayout = ({ header, content }) => {
  return (
    <div className='header-content-layout'>
      <div className='header'>{header}</div>
      <div className='content'>{content}</div>
    </div>
  );
};

export default HeaderContentLayout;
