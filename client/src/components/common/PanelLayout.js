import React from 'react';

const PanelsLayout = ({ left, right, showLeft }) => {
  return (
    <div className='panels-layout'>
      {showLeft && <div className='left-panel'>{left}</div>}
      <div className='right-panel'>{right}</div>
    </div>
  );
};

export default PanelsLayout;
