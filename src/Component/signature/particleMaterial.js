"use client";

import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

import vertexShader from "./shaders/particleVertex.glsl";
import fragmentShader from "./shaders/particleFragment.glsl";

const ParticleMaterial = shaderMaterial(
  {
    uTime: 0,
    uProgress: 0,
    uMouse: new THREE.Vector2(0, 0),
  },

  vertexShader,

  fragmentShader
);

extend({ ParticleMaterial });

export default ParticleMaterial;