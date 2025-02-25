// import { Canvas } from '@react-three/fiber';
// import { useEffect } from 'react';
// import * as THREE from 'three';
// import { createGlowingCircle } from './createGlowCircle'; // Import the function from the correct path

// function GlowingCircle() {
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0); // Set background to transparent
//     document.body.appendChild(renderer.domElement);


//     // Create the glowing circle
//     const glowingCircle = createGlowingCircle(scene);

//     // Camera position
//     camera.position.z = 10;

//     // Render loop
//     function animate() {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     }

//     animate();

//     // Cleanup
//     return () => {
//       renderer.dispose();
//     };
//   }, []);

//   return null; // You can replace this with JSX for other elements in the scene
// }

// function GlowCircle() {
//   return (
//     <div className="flex justify-center items-center w-[98vw] h-screen ">
//         <Canvas style={{ height: '100vh', width: '100vw' }}>
//             <GlowingCircle />
//         </Canvas>
//     </div>
//   );
// }

// export default GlowCircle;



import React, { useEffect } from 'react';
import * as THREE from 'three';
import { createGlowingCircle } from './createGlowCircle';

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

    const glowingCircle = createGlowingCircle(scene);

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
