import React from 'react';
import HeaderContentLayout from '../common/HeaderContentLayout';
import PanelsLayout from '../common/PanelLayout';

import Map from '../map/Map';
import MapControlsBar from '../map/MapControlBar';
import ToursList from '../tour/TourList';

const MapPage = () => {
  return (
    <HeaderContentLayout
      header={<MapControlsBar />}
      content={
        <PanelsLayout left={<ToursList />} right={<Map />} showLeft={true} />
      }
    />
  );
};

export default MapPage;
