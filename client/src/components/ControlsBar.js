import React from 'react';
import { Button } from 'react-bootstrap';

const ControlsBar = () => {
  return (
    <div className='p-1 shadow bg-white'>
      <Button variant='outline-primary' size='sm'>
        Toggle Sidebar
      </Button>
    </div>
  );
};

export default ControlsBar;
