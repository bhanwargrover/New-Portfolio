import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '../../context/ThemeContext';

const AboutModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={theme === 'dark' ? '#7c3aed' : '#6d28d9'}
          metalness={0.5}
          roughness={0.2}
          emissive={theme === 'dark' ? '#4c1d95' : '#7c3aed'}
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Orbiting elements */}
      {[1, 2, 3].map((ring, i) => {
        const ringRadius = 1.5 + i * 0.5;
        const elementsCount = 5 + i * 3;
        
        return (
          <group key={i} rotation={[Math.random(), Math.random(), Math.random()]}>
            {Array.from({ length: elementsCount }).map((_, j) => {
              const angle = (j / elementsCount) * Math.PI * 2;
              const x = Math.cos(angle) * ringRadius;
              const z = Math.sin(angle) * ringRadius;
              
              return (
                <mesh key={j} position={[x, 0, z]}>
                  <boxGeometry args={[0.2, 0.2, 0.2]} />
                  <meshStandardMaterial 
                    color={
                      i % 3 === 0 ? '#7c3aed' : 
                      i % 3 === 1 ? '#22d3ee' : 
                      '#f97316'
                    }
                    emissive={
                      i % 3 === 0 ? '#7c3aed' : 
                      i % 3 === 1 ? '#22d3ee' : 
                      '#f97316'
                    }
                    emissiveIntensity={0.3}
                    metalness={0.8}
                    roughness={0.2}
                  />
                </mesh>
              );
            })}
          </group>
        );
      })}
    </group>
  );
};

export default AboutModel;