uniform float uTime;
uniform float uProgress;
uniform vec2 uMouse;

attribute vec3 targetPosition;
attribute float random;

varying float vRandom;
varying float vProgress;

void main() {

    vec3 pos = position;

    // Floating animation
    pos.x += sin(uTime + random * 8.0) * 0.15;
    pos.y += cos(uTime * 1.2 + random * 5.0) * 0.15;
    pos.z += sin(uTime * 0.8 + random * 10.0) * 0.15;

    // Morph into target lattice
    pos = mix(pos, targetPosition, uProgress);

    // Mouse influence
    float dist = distance(pos.xy, uMouse);

    pos.xy += normalize(pos.xy - uMouse) *
              smoothstep(0.8, 0.0, dist) *
              0.25;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    gl_PointSize = 4.0;

    gl_PointSize *= (300.0 / -mvPosition.z);

    gl_Position = projectionMatrix * mvPosition;

    vRandom = random;
    vProgress = uProgress;
}