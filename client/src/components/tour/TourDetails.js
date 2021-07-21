import React from 'react';

import Icon from './../common/Icon';

import bikeIcon from '../../assets/tourDetails/bike.svg';
import distanceIcon from '../../assets/tourDetails/distance.svg';
import chainIcon from '../../assets/tourDetails/chain.svg';
import clockIcon from '../../assets/tourDetails/clock.svg';
import travelIcon from '../../assets/tourDetails/travel.svg';
import downIcon from '../../assets/tourDetails/down.svg';
import upIcon from '../../assets/tourDetails/up.svg';

import { Col, Container, Row } from 'react-bootstrap';

const TourDetails = ({ tour }) => {
  return (
    <Container fluid>
      <Row>
        <Col className='py-1 border-bottom'>
          <Icon src={chainIcon} alt='Icon of chain' />
          ID-{tour.id}
        </Col>
      </Row>
      <Row>
        <Col className='py-1 border-bottom'>
          <Icon src={bikeIcon} alt='Icon of bike' />
          {tour.sport.toUpperCase()}
        </Col>
      </Row>
      <Row>
        <Col xs='12' className='text-center py-1 border-bottom'>
          <Icon src={clockIcon} alt='Icon of start' /> Time
        </Col>
        <Col xs='4' className=' py-1 border-bottom border-right'>
          Start
        </Col>
        <Col xs='8' className='text-right py-1 border-bottom '>
          {new Date(tour.date).toLocaleString()}
        </Col>
        <Col xs='4' className=' py-1 border-bottom border-right'>
          End
        </Col>
        <Col xs='8' className='text-right py-1 border-bottom'>
          {new Date(
            new Date(tour.date).getTime() + tour.duration * 1000
          ).toLocaleString()}
        </Col>
        <Col xs='4' className=' py-1 border-bottom border-right'>
          Duration
        </Col>
        <Col xs='8' className='text-right py-1 border-bottom'>
          {new Date(1000 * tour.duration)
            .toISOString()
            .substr(11, 8)
            .replace(/^[0:]+/, '')}
          h
        </Col>
      </Row>
      <Row>
        <Col xs='12' className='text-center py-1 border-bottom'>
          <Icon src={distanceIcon} alt='Icon of distance' /> Distance
        </Col>
        <Col xs='4' className='text-center py-1'>
          <Icon src={travelIcon} alt='Icon of distance' />
          {(tour.distance / 1000).toFixed(1)}km
        </Col>
        <Col xs='4 ' className='text-center py-1 '>
          <Icon src={upIcon} alt='Icon of elevation up' />
          {Math.round(tour.elevationUp)}m
        </Col>
        <Col xs='4' className='text-center py-1 '>
          <Icon src={downIcon} alt='Icon of elevation down' />
          {Math.round(tour.elevationDown)}m
        </Col>
      </Row>
    </Container>
  );
};

export default TourDetails;
