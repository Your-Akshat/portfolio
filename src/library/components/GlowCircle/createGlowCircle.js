import * as THREE from 'three';

export function createGlowingCircle(scene) {
  const radius = 12;
  const segments = 64;
  const geometry = new THREE.CircleGeometry(radius, segments);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      glowColor: { value: new THREE.Color(0xdd2357) }, 
      intensity: { value: 0.5 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      uniform float intensity;
      varying vec2 vUv;

      void main() {
        float dist = distance(vUv, vec2(0.5, 0.5)); 
        float fade = smoothstep(0.3, 0.5, dist); // Stronger glow with smoother edge
        vec3 color = glowColor;
        float alpha = (1.0 - fade) * intensity;

        gl_FragColor = vec4(color, alpha);
      }
    `,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,  // Prevent depth write to avoid z-fighting issues
  });

  const circle = new THREE.Mesh(geometry, material);
  scene.add(circle);

  circle.position.set(0, 0, 0);  
  return circle;
}
