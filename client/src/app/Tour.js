import React from 'react';
import styled from 'styled-components';

const TourContainer = styled.div`
  background: ${(props) => props.theme.lightGreen};
  width: auto;
  height: auto;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 0.5rem 0.25rem;
  margin: 0.75rem 0;
  overflow: hidden;
`;

export const Tour = (props) => {
  const {
    id,
    date,
    name,
    distance,
    duration,
    sport,
    time_in_motion,
  } = props.details;

  return (
    <TourContainer>
      <div>date: {date || 'no info'}</div>
      <div>name: {name || 'no info'}</div>
      <div>distance: {distance || 'no info'}</div>
      <div>duration: {duration || 'no info'}</div>
      <div>sport: {sport || 'no info'}</div>
      <div>time_in_motion: {time_in_motion || 'no info'}</div>
    </TourContainer>
  );
};
