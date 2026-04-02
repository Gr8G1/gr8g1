/**
 * Work 섹션 배경 3D 씬
 * - 중앙 몰핑 구체, 느리게 회전하며 부유
 */
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';
import './WorkScene.scss';

function MorphingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<any>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.12;
    meshRef.current.rotation.z += delta * 0.06;
  });

  return (
    <Float speed={0.5} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          ref={matRef}
          color="#8ec8ed"
          distort={0.2}
          speed={1.5}
          transparent
          opacity={0.35}
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
    camera.position.x += (mouse.current.x * 0.8 - camera.position.x) * 0.03;
    camera.position.y += (mouse.current.y * 0.4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function WorkScene() {
  return (
    <div className="work-canvas-wrap" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[8, 8, 8]} intensity={0.7} color="#8ec8ed" />
        <pointLight position={[-8, -8, -5]} intensity={0.3} color="#b8b0f7" />

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
