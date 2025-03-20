import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from './Model';
import ActionButtons from './ActionButtons';

function MainContent({ selectedModel }) {
  return (
    <main className="flex-1 h-full relative">
      <Canvas
        camera={{ position: [5, 2, 8], fov: 40 }}
        style={{ height: '100%', width: '100%', background: '#bfe3dd' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Model url={selectedModel} />
        <OrbitControls
          target={[0, 0.5, 0]}
          enablePan={false}
          enableDamping={true}
        />
        <Environment preset="apartment" />
      </Canvas>
      <ActionButtons />
    </main>
  );
}

export default MainContent;