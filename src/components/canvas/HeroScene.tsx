/**
 * Hero 배경 — Bayer Dithering Shader
 * - 대형 유기적 형태의 정방형 디더링 패턴
 * - FBM + 대역 노이즈로 대담한 blob 형태 생성
 * - 마우스 클릭 위치에서 ripple 파동 확산
 * @see https://tympanus.net/codrops/2025/07/30/interactive-webgl-backgrounds-a-quick-guide-to-bayer-dithering/
 */
import { useCallback, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import './HeroScene.scss';

const MAX_CLICKS = 10;

const vertexShader = /* glsl */ `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uClickTimes[${MAX_CLICKS}];
  uniform vec2 uClickPos[${MAX_CLICKS}];

  float Bayer2(vec2 a) {
    a = floor(a);
    return fract(a.x / 2.0 + a.y * a.y * 0.75);
  }
  #define Bayer4(a) (Bayer2(0.5 * (a)) * 0.25 + Bayer2(a))
  #define Bayer8(a) (Bayer4(0.5 * (a)) * 0.25 + Bayer2(a))

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amp * noise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    float PIXEL_SIZE = 10.0;
    float CELL_PIXEL_SIZE = 5.0 * PIXEL_SIZE;

    float aspectRatio = uResolution.x / uResolution.y;

    vec2 pixelId = floor(fragCoord / PIXEL_SIZE);
    vec2 cellId = floor(fragCoord / CELL_PIXEL_SIZE);
    vec2 cellCoord = cellId * CELL_PIXEL_SIZE;

    vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

    // 저주파 FBM — 큰 유기적 형태 생성
    float n = fbm(uv * 1.2 + uTime * 0.04);

    // 대역 변조 — 비대칭 blob 형태 강화
    n += 0.25 * sin(uv.x * 2.0 + uTime * 0.08) * cos(uv.y * 1.8 - uTime * 0.06);
    n += 0.15 * cos(uv.x * 0.8 - uv.y * 1.2 + uTime * 0.03);

    // 대비 증폭
    n = n * 1.4 - 0.15;

    // 클릭 ripple — 마우스 위치 기반
    float feed = 0.0;
    for (int i = 0; i < ${MAX_CLICKS}; i++) {
      vec2 pos = uClickPos[i];
      if (pos.x < -0.5) continue;

      vec2 cuv = (pos / uResolution) * vec2(aspectRatio, 1.0);

      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);

      float waveR = 0.4 * t;
      float ring = exp(-pow((r - waveR) / 0.12, 2.0));
      float atten = exp(-1.5 * t) * exp(-2.0 * r);

      feed = max(feed, ring * atten);
    }

    float mask = n + feed;

    float dither = Bayer8(pixelId);
    mask += dither - 0.5;
    mask = step(0.5, mask);

    gl_FragColor = vec4(vec3(1.0), mask * 0.08);
  }
`;

type TClickData = {
  times: number[];
  positions: THREE.Vector2[];
  index: number;
  startTime: number;
};

/**
 * Bayer dithering 전체 화면 셰이더 메시
 */
function BayerMesh({ clickData }: { clickData: React.RefObject<TClickData> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uClickTimes: { value: Array(MAX_CLICKS).fill(-100) },
    uClickPos: { value: Array.from({ length: MAX_CLICKS }, () => new THREE.Vector2(-1, -1)) },
  }), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.ShaderMaterial;
    const dpr = window.devicePixelRatio || 1;

    mat.uniforms.uTime.value = clock.elapsedTime;
    mat.uniforms.uResolution.value.set(size.width * dpr, size.height * dpr);

    if (clickData.current) {
      mat.uniforms.uClickTimes.value = clickData.current.times;

      const posArr = mat.uniforms.uClickPos.value as THREE.Vector2[];
      clickData.current.positions.forEach((p, i) => {
        posArr[i].copy(p);
      });
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export default function HeroScene() {
  const clickData = useRef<TClickData>({
    times: Array(MAX_CLICKS).fill(-100),
    positions: Array.from({ length: MAX_CLICKS }, () => new THREE.Vector2(-1, -1)),
    index: 0,
    startTime: performance.now() / 1000,
  });

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const x = (e.clientX - rect.left) * dpr;
    const y = (rect.height - (e.clientY - rect.top)) * dpr;

    const elapsed = performance.now() / 1000 - clickData.current.startTime;
    const idx = clickData.current.index % MAX_CLICKS;

    clickData.current.times[idx] = elapsed;
    clickData.current.positions[idx].set(x, y);
    clickData.current.index++;
  }, []);

  return (
    <div className="hero-canvas-wrap" aria-hidden="true" onClick={handleClick}>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        style={{ background: 'transparent' }}
      >
        <BayerMesh clickData={clickData} />
      </Canvas>
    </div>
  );
}
