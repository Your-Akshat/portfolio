import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Avatar3D from '../../Avatar3D';

const CameraControl = () => {
  const cameraRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      // Adjust camera position dynamically
      cameraRef.current.position.set(2.3, 2.5, 6.9); // Set new position in each frame
      cameraRef.current.lookAt(0, 0, 0); // Optional: Make the camera look at the origin
    }
  });

  return (
    <PerspectiveCamera makeDefault ref={cameraRef} position={[10, 10, 10]} />
  );
};

const MyAvatar = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',  // Centers horizontally
          alignItems: 'center',      // Centers vertically
          width: '32vw',
          height: '100vh',
        }}
      >
        <Canvas 
            style={{ width: '100vw', height: '100vh', }} 
            camera={{ position: [0, 0, 5], // Adjust camera position to focus on the center of the scene
                      fov: 5,             // Adjust field of view (optional)
                   }}
        >

          {/* Lighting for the 3D scene */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
  
          {/* Your 3D model */}
          <Avatar3D position={[10,10,10]} />
  
          {/* Camera controls */}
          <CameraControl />
  
          {/* OrbitControls */}
          <OrbitControls />
        </Canvas>
      </div>
    );
};
  

export default MyAvatar;

