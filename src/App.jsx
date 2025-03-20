import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import sidebarItems from './data/sidebarItems';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('/LittlestTokyo.glb');
  const [location, setLocation] = useState('LittlestTokyo');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (modelUrl, title) => {
    setSelectedModel(modelUrl);
    setLocation(title);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 bg-custom-teal">
        <SideBar
          isOpen={isSidebarOpen}
          onItemClick={handleItemClick}
          location={location}
          items={sidebarItems}
        />
        <MainContent selectedModel={selectedModel} />
      </div>
    </div>
  );
}

export default App;