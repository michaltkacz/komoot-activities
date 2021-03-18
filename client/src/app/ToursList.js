import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Tour } from './Tour';

const ToursContainer = styled.div`
  background: ${(props) => props.theme.darkGreen};
  width: auto;
  height: auto;
  border-top: 2px solid white;
  padding: 0.25rem 0.75rem;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
`;

const Button = styled.button`
  color: white;
  background: transparent;
  font-weight: 900;
  width: auto;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem auto 0.25rem;
  border: none;
  outline: none;

  &:hover {
    color: ${(props) => props.theme.darkGray};
    cursor: pointer;
  }
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 100%;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem auto 0.25rem;
  font-weight: 900;
  outline: none;
  border: 1px solid ${(props) => props.theme.darkGray};
  border-radius: 5px;
  background: ${(props) => props.theme.lightGray};
  color: ${(props) => props.theme.darkGray};

  text-overflow: ellipsis;
`;

const Option = styled.option`
  font-weight: 600;
`;

const sortTypes = {
  date_oldest: ['date', 1],
  date_newest: ['date', -1],
  distance_longest: ['distance', 1],
  distance_shortest: ['distance', -1],
  duration_longest: ['duration', 1],
  duration_shortest: ['duration', -1],
  time_in_motion_longest: ['time_in_motion', 1],
  time_in_motion_shortest: ['time_in_motion', -1],
};

export const ToursList = (props) => {
  const { status, data } = props.fetchResult;
  const [sortType, setSortType] = useState('date_oldest');

  const sortArray = () => {
    if (status !== 'fetched') return;

    const sortProperty = sortTypes[sortType][0];
    const sortOrder = sortTypes[sortType][1];

    if (sortProperty === 'date') {
      data.sort((a, b) => {
        const dateA = Date.parse(a.tour_details.date);
        const dateB = Date.parse(b.tour_details.date);
        if (dateA < dateB) return sortOrder;
        if (dateA > dateB) return -sortOrder;
        return 0;
      });
    } else {
      data.sort((a, b) => {
        return (
          sortOrder *
          (a.tour_details[sortProperty] - b.tour_details[sortProperty])
        );
      });
    }
  };

  useEffect(() => {
    sortArray();
  }, [sortType, status]);

  if (status === 'fetching') {
    return (
      <ToursContainer>
        <h4>Loading tours...</h4>
      </ToursContainer>
    );
  }

  if (status === 'fetched') {
    return (
      <ToursContainer>
        <ButtonsContainer>
          <Select
            defaultValue='choose order'
            onChange={(e) => setSortType(e.target.value)}
          >
            <Option value='date_oldest'>date: oldest</Option>
            <Option value='date_newest'>date: newest</Option>
            <Option value='distance_longest'>distance: longest</Option>
            <Option value='distance_shortest'>distance: shortest</Option>
            <Option value='duration_longest'>duration: longest</Option>
            <Option value='duration_shortest'>duration: shortest</Option>
            <Option value='time_in_motion_longest'>
              time in motion: longest
            </Option>
            <Option value='time_in_motion_shortest'>
              time in motion: shortest
            </Option>
          </Select>
        </ButtonsContainer>
        {data.map((tour) => {
          return (
            <Tour key={tour.tour_details.id} details={tour.tour_details} />
          );
        })}
      </ToursContainer>
    );
  }

  return null;
};
