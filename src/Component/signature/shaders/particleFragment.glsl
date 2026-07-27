varying float vRandom;
varying float vProgress;

void main() {

    // Circular particles
    vec2 uv = gl_PointCoord - vec2(0.5);

    float dist = length(uv);

    float alpha = smoothstep(0.5, 0.0, dist);

    // Cyan → Violet transition
    vec3 cyan = vec3(0.13, 0.83, 0.93);
    vec3 violet = vec3(0.55, 0.36, 0.96);

    vec3 color = mix(cyan, violet, vRandom);

    // Become brighter as morph progresses
    color *= 0.7 + vProgress * 0.8;

    gl_FragColor = vec4(color, alpha);

    // Discard transparent pixels for smooth circles
    if (gl_FragColor.a < 0.02) discard;
}