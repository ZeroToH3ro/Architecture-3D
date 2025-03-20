import React from 'react';
import { FaShare, FaVrCardboard, FaVolumeUp, FaExpand, FaEllipsisH } from 'react-icons/fa';

function ActionButtons() {
  return (
    <div className="absolute bottom-4 right-4 flex space-x-2">
      <button className="bg-white p-2 rounded-full"><FaShare /></button>
      <button className="bg-white p-2 rounded-full"><FaVrCardboard /></button>
      <button className="bg-white p-2 rounded-full"><FaVolumeUp /></button>
      <button className="bg-white p-2 rounded-full"><FaExpand /></button>
      <button className="bg-white p-2 rounded-full"><FaEllipsisH /></button>
    </div>
  );
}

export default ActionButtons;