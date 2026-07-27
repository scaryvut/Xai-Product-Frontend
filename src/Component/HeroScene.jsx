"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const count = 1500;
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    pointsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#22d3ee"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.9}
      />
    </points>
  );
}

function CentralSphere() {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.x += 0.002;
    mesh.current.rotation.y += 0.004;

    mesh.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.2, 1]} />

        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Rings() {
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame(() => {
    ring1.current.rotation.z += 0.003;
    ring2.current.rotation.x += 0.004;
  });

  return (
    <>
      <mesh ref={ring1}>
        <torusGeometry args={[2.2, 0.02, 32, 150]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>

      <mesh ref={ring2} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.6, 0.02, 32, 150]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="h-full w-full rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/5 to-violet-500/5">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
      >
        <color attach="background" args={["#050816"]} />

        <ambientLight intensity={1.3} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <Particles />

        <CentralSphere />

        <Rings />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}