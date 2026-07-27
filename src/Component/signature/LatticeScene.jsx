"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
} from "@react-three/drei";

import MorphingParticles from "./MorphingParticles";
import LatticeCube from "./LatticeCube";
import Lights from "./Lights";

export default function LatticeScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 9],
        fov: 45,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      {/* Background */}
      <color attach="background" args={["#050816"]} />

      {/* Lights */}
      <Lights />

      {/* HDRI */}
      <Environment preset="city" />

      {/* Floating Scene */}
      <Float
        speed={1.2}
        rotationIntensity={0.4}
        floatIntensity={0.5}
      >
        <group>
          <MorphingParticles />
          <LatticeCube />
        </group>
      </Float>

      {/* Camera Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}