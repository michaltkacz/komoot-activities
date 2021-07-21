import React from 'react';
import { Alert, ProgressBar, Spinner } from 'react-bootstrap';
import { useTours } from './../../contexts/TourContext';

const TourListInfo = () => {
  const { tours, toursTotalNumber, loading, error } = useTours();

  if (error) {
    return (
      <Alert variant='danger' className='mb-1'>
        Error, sync failed
      </Alert>
    );
  }

  if (loading) {
    return (
      <div className='py-1'>
        <ProgressBar
          now={tours?.length || 0}
          max={toursTotalNumber}
          label={`Tours: ${tours?.length || 0}/${toursTotalNumber}`}
        />
        <div className='d-flex justify-content-center w-100 py-1'>
          <Spinner animation='border' variant='primary' size='sm' />
        </div>
      </div>
    );
  }

  if (!tours?.length)
    return (
      <Alert variant='secondary' className='mb-1'>
        No tours for display
      </Alert>
    );

  return (
    <Alert variant='secondary' className='mb-1'>
      Tours: {tours.length}
    </Alert>
  );
};

export default TourListInfo;
