import React from 'react';

import TourListInfo from './TourListInfo';
import TourListContent from './TourListContent';

const ToursList = () => {
  return (
    <div className='h-100 overflow-auto p-1 border-bottom shadow'>
      <TourListInfo />
      <TourListContent />
    </div>
  );
};

export default ToursList;
