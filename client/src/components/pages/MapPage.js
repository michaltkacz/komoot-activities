import React from 'react';
import PanelsLayout from '../common/PanelLayout';

import Map from '../map/Map';
import ToursList from '../tour/TourList';

const MapPage = () => {
  return <PanelsLayout left={<ToursList />} right={<Map />} showLeft={true} />;
};

export default MapPage;
