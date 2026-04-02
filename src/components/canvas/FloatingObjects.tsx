import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useHover } from '@/context/HoverContext';

interface ObjectConfig {
  position: [number, number, number];
  scale: number;
  geometry: 'sphere' | 'icosahedron' | 'octahedron' | 'torus';
  color: string;
  speed: number;
  floatIntensity: number;
}

const OBJECTS: ObjectConfig[] = [
  { position: [-3.5, 1.5, -2], scale: 1.1, geometry: 'sphere', color: '#7c6df2', speed: 0.5, floatIntensity: 1.2 },
  { position: [3.8, -1.2, -3], scale: 0.8, geometry: 'icosahedron', color: '#4fa3e0', speed: 0.8, floatIntensity: 1.5 },
  { position: [-2.2, -2.5, -1.5], scale: 0.6, geometry: 'octahedron', color: '#e07c4f', speed: 1.0, floatIntensity: 2.0 },
  { position: [2.5, 2.8, -4], scale: 0.9, geometry: 'sphere', color: '#9ae04f', speed: 0.4, floatIntensity: 0.8 },
  { position: [0.5, -1.8, -2.5], scale: 0.5, geometry: 'torus', color: '#e04f6d', speed: 1.2, floatIntensity: 1.8 },
  { position: [-4.5, 0.2, -4], scale: 0.7, geometry: 'icosahedron', color: '#e0c94f', speed: 0.7, floatIntensity: 1.1 },
  { position: [4.2, 1.8, -1.5], scale: 0.55, geometry: 'octahedron', color: '#4fbde0', speed: 0.9, floatIntensity: 1.4 },
  { position: [1.2, 3.2, -3], scale: 0.45, geometry: 'sphere', color: '#bf7cf2', speed: 0.6, floatIntensity: 1.6 },
];

function FloatingObject({ config, distortAmount }: { config: ObjectConfig; distortAmount: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetDistort = useRef(0.2);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * config.speed * 0.15;
    meshRef.current.rotation.y += delta * config.speed * 0.2;
  });

  const color = useMemo(() => new THREE.Color(config.color), [config.color]);

  return (
    <Float speed={config.speed * 0.8} rotationIntensity={0.4} floatIntensity={config.floatIntensity}>
      <mesh ref={meshRef} position={config.position} scale={config.scale}>
        {config.geometry === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
        {config.geometry === 'icosahedron' && <icosahedronGeometry args={[1, 1]} />}
        {config.geometry === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        {config.geometry === 'torus' && <torusGeometry args={[1, 0.35, 16, 40]} />}
        <MeshDistortMaterial
          color={color}
          distort={distortAmount}
          speed={2.5}
          transparent
          opacity={0.75}
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingObjects() {
  const { hoveredCompany } = useHover();
  const distortAmount = hoveredCompany ? 0.7 : 0.2;

  return (
    <>
      {OBJECTS.map((config, i) => (
        <FloatingObject key={i} config={config} distortAmount={distortAmount} />
      ))}
    </>
  );
}
