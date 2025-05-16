import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '../../context/ThemeContext';

const HeroModel: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  
  // Animate the mesh on every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Main floating shape */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.5, 0.5, 128, 16, 2, 3]} />
        <meshStandardMaterial
          color={theme === 'dark' ? '#7c3aed' : '#6d28d9'} 
          metalness={0.5}
          roughness={0.2}
          emissive={theme === 'dark' ? '#4c1d95' : '#7c3aed'}
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Particles */}
      {Array.from({ length: 100 }).map((_, i) => {
        const position = [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ];
        const scale = Math.random() * 0.2;
        
        return (
          <mesh key={i} position={position}>
            <sphereGeometry args={[scale, 8, 8]} />
            <meshBasicMaterial 
              color={
                i % 3 === 0 ? '#7c3aed' : 
                i % 3 === 1 ? '#22d3ee' : 
                '#f97316'
              } 
              transparent
              opacity={0.7}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default HeroModel;