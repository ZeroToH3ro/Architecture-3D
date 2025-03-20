import React from 'react';
import { FaBars } from 'react-icons/fa';

function Header({ toggleSidebar }) {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-white">
        <FaBars size={24} />
      </button>
      <div className="flex space-x-2">
        <button className="bg-yellow-50 text-gray-800 px-4 py-2 rounded">Home</button>
        <button className="bg-yellow-50 text-gray-800 px-4 py-2 rounded">About</button>
        <button className="bg-yellow-50 text-gray-800 px-4 py-2 rounded">Items</button>
        <button className="bg-yellow-50 text-gray-800 px-4 py-2 rounded">Tour</button>
      </div>
    </header>
  );
}

export default Header;