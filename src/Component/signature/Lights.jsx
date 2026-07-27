"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Lights() {
  const pointLight = useRef();
  const rimLight = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (pointLight.current) {
      pointLight.current.position.x = Math.sin(t * 0.6) * 4;
      pointLight.current.position.z = Math.cos(t * 0.6) * 4;

      pointLight.current.intensity =
        2 + Math.sin(t * 2) * 0.3;
    }

    if (rimLight.current) {
      rimLight.current.position.x = Math.cos(t * 0.4) * -5;
      rimLight.current.position.z = Math.sin(t * 0.4) * 5;

      rimLight.current.intensity =
        1.6 + Math.cos(t * 1.5) * 0.2;
    }
  });

  return (
    <>
      {/* Ambient */}
      <ambientLight intensity={0.25} />

      {/* Main Key Light */}
      <directionalLight
        position={[5, 6, 5]}
        intensity={2.5}
        color="#ffffff"
        castShadow
      />

      {/* Fill Light */}
      <directionalLight
        position={[-5, -2, 3]}
        intensity={0.7}
        color="#7dd3fc"
      />

      {/* Animated Cyan Light */}
      <pointLight
        ref={pointLight}
        position={[4, 0, 4]}
        intensity={2}
        color="#22d3ee"
        distance={12}
        decay={2}
      />

      {/* Animated Violet Rim */}
      <pointLight
        ref={rimLight}
        position={[-4, 2, -4]}
        intensity={1.5}
        color="#8b5cf6"
        distance={15}
        decay={2}
      />

      {/* Bottom Glow */}
      <pointLight
        position={[0, -5, 0]}
        intensity={0.8}
        color="#34d399"
        distance={12}
      />

      {/* Top Highlight */}
      <spotLight
        position={[0, 8, 0]}
        angle={0.35}
        penumbra={1}
        intensity={1.5}
        color="#ffffff"
        castShadow
      />
    </>
  );
}