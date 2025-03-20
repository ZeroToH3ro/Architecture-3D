import React from 'react';

function SidebarList({ items, onItemClick }) {
  return (
    <ul className="flex-1 overflow-y-auto">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative h-32 mb-2 bg-cover bg-center flex items-center justify-center cursor-pointer"
          style={{ backgroundImage: `url(${item.thumbnail})` }}
          onClick={() => onItemClick(item.modelUrl, item.title)}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <span className="relative text-white font-bold text-lg z-10">{item.title}</span>
        </li>
      ))}
    </ul>
  );
}

export default SidebarList;