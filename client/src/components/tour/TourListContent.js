import React from 'react';
import { useTours } from './../../contexts/TourContext';
import TourCard from './TourCard';

const TourListContent = () => {
  const { tours } = useTours();

  if (!Array.isArray(tours)) return <></>;

  return tours.map((tour, index) => (
    <TourCard
      key={`tour-card-${tour.id}`}
      tour={tour}
      number={tours.length - index}
    />
  ));
};

export default TourListContent;
