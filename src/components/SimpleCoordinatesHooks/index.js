import React, { useEffect, useState } from 'react';

// Siempre que un usuario cree sus propios Hooks deben empezar por la convicción 'use'
function useCoordenades() {

  const [coordenates, setCoordenates]= useState ({
    latitude: null,
    longitude: null
  });

  let geoId;

  // componentDidMount()
  useEffect(() => {
    geoId = window.navigator.geolocation.watchPosition(position => {
      setCoordenates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });

    // componentWillUnmount()
    return () => {
      navigator.geolocation.clearWatch(geoId);
    };
  });
  return coordenates;
}

export default function Coordenates() {
  const coordenates = useCoordenades();

  return coordenates.latitude == null ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h2>Latitude: {coordenates.latitude}</h2>
      <h2>Latitude: {coordenates.longitude}</h2>
    </div>
  );
}
