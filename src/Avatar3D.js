// import React, { useEffect, useRef } from 'react';
// import { useLoader, useFrame } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { AnimationMixer } from 'three';

// function Avatar3D() {

//   const gltf = useLoader(GLTFLoader, '/Avatar/flip.glb'); 
//   const mixer = useRef();
  
//   useEffect(() => {
//     if (gltf.animations.length > 0) {
//       mixer.current = new AnimationMixer(gltf.scene); 
//       gltf.animations.forEach((clip) => {
//         mixer.current.clipAction(clip).play(); 
//       });
//     }
//   }, [gltf]);
  
//   useFrame((state, delta) => {
//     if (mixer.current) {
//       mixer.current.update(delta); 
//     }
//   });
  
//   return (
//     <mesh>
//       <primitive object={gltf.scene} />
//     </mesh>
//   );

// }

// export default Avatar3D;



import React, { useState, useEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';
import * as THREE from 'three';

function Avatar3D() {
  const [animationState, setAnimationState] = useState(0); // State to track animation sequence
  const mixer = useRef(); // Animation mixer reference

  // Load all three models with animations
  const firstModel = useLoader(GLTFLoader, '/Avatar/ani.glb');
  const secondModel = useLoader(GLTFLoader, '/Avatar/flip.glb');
  const thirdModel = useLoader(GLTFLoader, '/Avatar/standing.glb');

  // Handle model animation logic
  useEffect(() => {
    if (animationState === 0 && firstModel.animations.length > 0) {
      // Set up the first model's animation (run once)
      mixer.current = new AnimationMixer(firstModel.scene);
      firstModel.animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
        action.setLoop(THREE.LoopOnce); // LoopOnce: animation plays once and stops
        action.clampWhenFinished = true; // Stops the animation when finished
      });
    } else if (animationState === 1 && secondModel.animations.length > 0) {
      // Set up the second model's animation (repeat 3 times)
      mixer.current = new AnimationMixer(secondModel.scene);
      secondModel.animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
        action.setLoop(THREE.LoopRepeat, 3); // Repeat the animation 3 times
        action.clampWhenFinished = true; // Stops the animation when finished
      });
    } else if (animationState === 2 && thirdModel.animations.length > 0) {
      // Set up the third model's animation (loop infinitely)
      mixer.current = new AnimationMixer(thirdModel.scene);
      thirdModel.animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
        action.setLoop(THREE.LoopRepeat, Infinity); // LoopRepeat: loop infinitely
      });
    }
  }, [animationState, firstModel, secondModel, thirdModel]);

  useEffect(() => {
    if (animationState === 0) {
      setTimeout(() => {
        setAnimationState(1); // Switch to the second animation after the first is done
      }, firstModel.animations[0].duration * 500); // Wait for the duration of the first animation
    } else if (animationState === 1) {
      setTimeout(() => {
        setAnimationState(2); // Switch to the third animation after the second is done
      }, secondModel.animations[0].duration * 950 * 3); // Wait for 3 repetitions of the second animation
    }
  }, [animationState, firstModel, secondModel]);

  // Update the animation mixer each frame
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta); // Update animation progress
    }
  });

  return (
    <group>
      {/* Render the appropriate model based on the animationState */}
      {animationState === 0 && <primitive object={firstModel.scene} scale={[3,3,3]} position={[0,-3,0]} />}
      {animationState === 1 && <primitive object={secondModel.scene} scale={[3,3,3]} position={[0,-3,0]} />}
      {animationState === 2 && <primitive object={thirdModel.scene} scale={[3,3,3]} position={[0,-3,0]} />}
    </group>
  );
}

export default Avatar3D;

