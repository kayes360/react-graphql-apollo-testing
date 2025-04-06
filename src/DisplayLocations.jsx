import React from 'react'
import { GET_LOCATIONS } from './App';
import { useQuery } from '@apollo/client';

export default function DisplayLocations() {
 const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img width="400" height="250" alt="location-reference" src={`${photo}`} />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
