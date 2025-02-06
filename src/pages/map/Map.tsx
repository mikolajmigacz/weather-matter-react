import React, { useEffect, useRef } from 'react';

import { CircularProgress, Box } from '@mui/material'; // MUI Spinner
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

import { GOOGLE_MAPS_LIBRARIES } from '../../config/googleMaps';
import { useAppSelector } from '../../store/hooks';

import { FullScreenMap, mapContainerStyle } from './Map.styles';

const GOOGLE_MAPS_API_KEY: string = import.meta.env.VITE_GOOGLE_MAPS_KEY;

export const MapPage: React.FC = () => {
  const favoriteCities = useAppSelector((state) => state.user.favoriteCities);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: GOOGLE_MAPS_LIBRARIES,
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

  const defaultCenter =
    favoriteCities.length > 0
      ? { lat: favoriteCities[0].latitude, lng: favoriteCities[0].longitude }
      : { lat: 0, lng: 0 };

  const initializeMarkers = () => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    markersRef.current.forEach((marker) => (marker.map = null));
    markersRef.current = [];

    favoriteCities.forEach((city) => {
      const { latitude, longitude, englishName } = city;

      if (!google.maps.marker.AdvancedMarkerElement) {
        console.error('AdvancedMarkerElement is not defined. Ensure the marker library is loaded.');
        return;
      }

      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat: latitude, lng: longitude },
        title: englishName,
        map,
      });

      markersRef.current.push(marker);
    });
  };

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      initializeMarkers();
    }
  }, [isLoaded, favoriteCities]);

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <FullScreenMap>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={5}
        options={{
          mapId: 'weather-matter-map',
        }}
        onLoad={(map) => {
          mapRef.current = map;
          initializeMarkers();
        }}
      />
    </FullScreenMap>
  );
};
