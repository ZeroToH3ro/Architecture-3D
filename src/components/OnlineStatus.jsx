import React from 'react';
import { FaEye } from 'react-icons/fa';

function OnlineStatus() {
  return (
    <div className="flex items-center mb-4">
      <span className="text-blue-400">2 Online</span>
      <FaEye className="ml-2" />
    </div>
  );
}

export default OnlineStatus;