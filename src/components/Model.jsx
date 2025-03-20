import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url }) {
  const { scene, animations } = useGLTF(url);
  const ref = useRef();
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
    return () => {
      if (mixer.current) mixer.current.stopAllAction();
    };
  }, [animations, scene]);

  useEffect(() => {
    const clock = new THREE.Clock();
    const animate = () => {
      if (mixer.current) mixer.current.update(clock.getDelta());
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  scene.position.set(1, 1, 0);
  scene.scale.set(0.01, 0.01, 0.01);

  return <primitive object={scene} ref={ref} />;
}

export default Model;