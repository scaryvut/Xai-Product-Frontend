"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function MorphingParticles() {
  const points = useRef();

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.y = state.clock.elapsedTime * 0.15;
    points.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  const particles = [];

  for (let i = 0; i < 2000; i++) {
    particles.push(
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    );
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={new Float32Array(particles)}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#22d3ee"
        size={0.05}
        sizeAttenuation
      />
    </points>
  );
}