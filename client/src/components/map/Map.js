import React, { useEffect, useState, useMemo } from 'react';
import { useTours } from '../../contexts/TourContext';

import {
  useMap,
  MapContainer,
  ZoomControl,
  TileLayer,
  Polyline,
  Tooltip,
  ScaleControl,
} from 'react-leaflet';

const Map = () => {
  const { tours } = useTours();
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
      minZoom={0}
      maxZoom={15}
      zoomControl={false}
      style={{ height: '100%', width: '100%' }}
    >
      <CenterMap center={center} zoom={initZoom} />
      <ScaleControl position='bottomleft' />
      <ZoomControl position='topright' />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {Array.isArray(tours) &&
        tours.map((tour, index) => {
          const route = tour.coords.map((geopoint) => [
            geopoint.lat,
            geopoint.lng,
          ]);
          return (
            <PolylineInteractive
              key={`tour-polyline-${tour.id}`}
              route={route}
              tooltipText={
                <>
                  Index: {tours.length - index}
                  <br />
                  ID: {tour.id}
                </>
              }
            />
          );
        })}
    </MapContainer>
  );
};

const CenterMap = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const PolylineInteractive = ({ route, tooltipText }) => {
  const [hovered, setHovered] = useState(false);
  const eventHandlers = useMemo(
    () => ({
      mouseover(e) {
        e.target.bringToFront();
        setHovered(true);
      },
      mouseout() {
        setHovered(false);
      },
    }),
    []
  );
  return (
    <Polyline
      positions={route}
      pathOptions={{ opacity: 1, color: hovered ? 'red' : 'purple' }}
      eventHandlers={eventHandlers}
    >
      <Tooltip sticky>{tooltipText}</Tooltip>
    </Polyline>
  );
};

export default Map;
