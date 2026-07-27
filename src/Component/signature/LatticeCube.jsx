"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function LatticeCube() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    // Slow rotation
    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.4;

    group.current.rotation.y += 0.003;

    // Floating
    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.08;

    // Pulsing
    const scale =
      1 + Math.sin(state.clock.elapsedTime * 2) * 0.03;

    group.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={group}>
      {/* Outer Cube */}
      <lineSegments>
        <edgesGeometry
          args={[new THREE.BoxGeometry(3.2, 3.2, 3.2)]}
        />

        <lineBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.45}
        />
      </lineSegments>

      {/* Inner Cube */}
      <lineSegments scale={0.65}>
        <edgesGeometry
          args={[new THREE.BoxGeometry(3.2, 3.2, 3.2)]}
        />

        <lineBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.7}
        />
      </lineSegments>

      {/* Central Core */}
      <mesh>
        <icosahedronGeometry args={[0.35, 2]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#22d3ee"
          emissiveIntensity={2}
          metalness={1}
          roughness={0.15}
        />
      </mesh>

      {/* Orbit Ring X */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.1, 0.015, 16, 128]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Orbit Ring Y */}
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2.1, 0.015, 16, 128]} />

        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Orbit Ring Z */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[2.1, 0.015, 16, 128]} />

        <meshBasicMaterial
          color="#34d399"
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}