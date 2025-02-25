import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Avatar3D from '../../../Avatar3D';

const CameraControl = () => {
  const cameraRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      // Dynamically set camera position and look at the origin
      cameraRef.current.position.set(2.3, 2.5, 6.9);
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return <PerspectiveCamera makeDefault ref={cameraRef} fov={50} />;
};

const MyAvatar = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Canvas style={{ height: '100vh', width: '100vw' }}>
        
        {/* Lighting for the 3D scene */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* 3D Model at the center */}
        <Avatar3D position={[0, 0, 0]} />

        {/* Custom Camera Control */}
        <CameraControl />

      </Canvas>
    </div>
  );
};

export default MyAvatar;
