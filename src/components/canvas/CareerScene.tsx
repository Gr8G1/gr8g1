/**
 * Experience 섹션 배경 3D 씬
 * - 중앙 몰핑 구체, 회사 hover 시 컬러/왜곡 변화
 */
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useHover } from '@/context/HoverContext';
import { useMousePosition } from '@/hooks/useMousePosition';
import './CareerScene.scss';

const COMPANY_COLORS: Record<string, string> = {
  '팀리부뜨': '#8ef0d6',
  '위펀': '#b8b0f7',
  '스트라토': '#8ec8ed',
  '미디어포스&컴퍼니': '#f0b89a',
  'SK커뮤니케이션즈': '#f09aad',
  'CAFE24': '#8ed6ed',
  '프레즌트': '#c4f09a',
  'WISA': '#f0e39a',
};

function MorphingSphere() {
  const { hoveredCompany } = useHover();
  const meshRef = useRef<THREE.Mesh>(null);
  const distortRef = useRef(0.15);
  const targetDistort = useRef(0.15);
  const colorRef = useRef(new THREE.Color('#b8b0f7'));
  const targetColor = useRef(new THREE.Color('#b8b0f7'));
  const matRef = useRef<any>(null);

  useFrame((_, delta) => {
    if (!meshRef.current || !matRef.current) return;

    if (hoveredCompany) {
      targetDistort.current = 0.6;
      targetColor.current.set(COMPANY_COLORS[hoveredCompany] ?? '#b8b0f7');
    } else {
      targetDistort.current = 0.15;
      targetColor.current.set('#b8b0f7');
    }

    distortRef.current += (targetDistort.current - distortRef.current) * delta * 3;
    colorRef.current.lerp(targetColor.current, delta * 3);

    matRef.current.distort = distortRef.current;
    matRef.current.color.copy(colorRef.current);

    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += delta * 0.06;
  });

  return (
    <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.8}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          ref={matRef}
          color="#b8b0f7"
          distort={0.15}
          speed={1.8}
          transparent
          opacity={0.4}
          roughness={0.05}
          metalness={0.3}
        />
      </mesh>
    </Float>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const mouse = useMousePosition();

  useFrame(() => {
    camera.position.x += (mouse.current.x * 1.0 - camera.position.x) * 0.03;
    camera.position.y += (mouse.current.y * 0.5 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function CareerScene() {
  return (
    <div className="career-canvas-wrap" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[8, 8, 8]} intensity={0.8} color="#b8b0f7" />
        <pointLight position={[-8, -8, -5]} intensity={0.4} color="#8ec8ed" />

        <Suspense fallback={null}>
          <MorphingSphere />
        </Suspense>

        <CameraRig />

        <EffectComposer>
          <Bloom luminanceThreshold={0.3} intensity={0.4} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
