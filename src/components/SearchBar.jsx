import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Tìm kiếm địa điểm"
        className="w-full p-2 pl-8 rounded bg-gray-700 text-white"
      />
      <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
}

export default SearchBar;