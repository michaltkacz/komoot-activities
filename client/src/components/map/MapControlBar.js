import React from 'react';
import { Button } from 'react-bootstrap';

const MapControlsBar = () => {
  return (
    <div className='map-controls'>
      <Button disabled variant='primary' size='sm'>
        <nobr>Toggle Sidebar</nobr>
      </Button>
      <Button disabled variant='primary' size='sm'>
        <nobr>Toggle Heatmap</nobr>
      </Button>
      <Button disabled variant='primary' size='sm'>
        <nobr>Toggle Routes</nobr>
      </Button>
    </div>
  );
};

export default MapControlsBar;
