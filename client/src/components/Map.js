import React, { useEffect, useState } from 'react';

import {
  useMap,
  MapContainer,
  ZoomControl,
  TileLayer,
  Polyline,
} from 'react-leaflet';

export const Map = ({ data }) => {
  const [center, setCenter] = useState([0, 0]);
  const initZoom = 10;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        setCenter([position.coords.latitude, position.coords.longitude])
      );
    }
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={initZoom}
      minZoom={1}
      maxZoom={15}
      zoomControl={false}
      style={{ height: '100%', width: '100%' }}
    >
      <CenterMap center={center} zoom={initZoom} />
      <ZoomControl position='topright' />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* {data &&
        data.map((tour) => {
          const id = tour.tour_details.id;
          const route = tour.tour_geopoints.map((geopoint) => [
            geopoint.lat,
            geopoint.lng,
          ]);
          return (
            <Polyline
              key={id}
              positions={route}
              pathOptions={{ color: 'purple', opacity: 1 }}
            />
          );
        })} */}
    </MapContainer>
  );
};

const CenterMap = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};
