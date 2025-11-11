import React, { useEffect } from 'react';
import * as THREE from 'three';
// import { createGlowingCircle } from './createGlowCircle';

const GlowingCircle = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Keep transparent background
    
    const container = document.getElementById('glow-circle-container');
    container.appendChild(renderer.domElement);

    // const glowingCircle = createGlowingCircle(scene);

    camera.position.z = 15; // Adjust to ensure the circle is fully visible

    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="glow-circle-container" className="absolute w-full h-full" />;
};

export default GlowingCircle;
