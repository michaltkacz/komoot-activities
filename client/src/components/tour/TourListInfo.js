import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useTours } from './../../contexts/TourContext';

const TourListInfo = () => {
  const { tours, loading, error } = useTours();

  if (error) {
    return (
      <Alert variant='danger' className='mb-1'>
        Error, sync failed
      </Alert>
    );
  }

  if (loading) {
    return (
      <div className='d-flex justify-content-center w-100 py-1'>
        <Spinner animation='border' variant='primary' size='sm' />
      </div>
    );
  }

  if (tours.length === 0)
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
