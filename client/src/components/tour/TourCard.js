import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import TourDetails from './TourDetails';

const TourCard = ({ tour, number }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          variant='link'
          eventKey='0'
          className='bg-primary text-white font-weight-bold'
        >
          <span
            className='text-dark font-italic'
            style={{ fontSize: '0.75rem' }}
          >
            {number}
            {'. '}
          </span>
          {tour.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <TourDetails tour={tour} />
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default TourCard;
