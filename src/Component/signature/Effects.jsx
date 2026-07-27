"use client";

import {
  EffectComposer,
  Bloom,
  Vignette,
  Noise,
  ChromaticAberration,
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";

export default function Effects() {
  return (
    <EffectComposer multisampling={8}>
      {/* Glow */}
      <Bloom
        intensity={1.2}
        luminanceThreshold={0.25}
        luminanceSmoothing={0.9}
        mipmapBlur
      />

      {/* Lens Distortion */}
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[0.0008, 0.0008]}
      />

      {/* Film Grain */}
      <Noise
        opacity={0.03}
        premultiply
      />

      {/* Edge Darkening */}
      <Vignette
        eskil={false}
        offset={0.15}
        darkness={0.8}
      />
    </EffectComposer>
  );
}