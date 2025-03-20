import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import Logo from './Logo';
import OnlineStatus from './OnlineStatus';
import LocationIndicator from './LocationIndicator';
import SearchBar from './SearchBar';
import SidebarList from './SidebarList';

const SideBar = ({ isOpen, onItemClick, location, items }) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = useCallback(
    debounce((searchTerm) => {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = items.filter((item) =>
        item.title.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredItems(filtered);
    }, 300),
    [items]
  );

  return (
    <aside
      className={`bg-gray-800 text-white w-64 p-4 flex flex-col transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <Logo />
      <OnlineStatus />
      <LocationIndicator location={location} />
      <SearchBar onSearch={handleSearch} />
      <SidebarList items={filteredItems} onItemClick={onItemClick} />
    </aside>
  );
}

export default SideBar;