import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function LocationIndicator({ location }) {
  return (
    <div className="bg-yellow-500 text-gray-800 px-4 py-2 rounded w-full mb-4 flex flex-col items-center">
      <FaMapMarkerAlt className="text-2xl mb-2" />
      <span className="text-center">You are at {location}</span>
    </div>
  );
}

export default LocationIndicator;