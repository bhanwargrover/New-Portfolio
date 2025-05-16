import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';
import * as THREE from 'three';

// Main technologies to display
const technologies = [
  'React', 'Three.js',  
  'Tailwind', 'Node.js', 'GSAP', 
];

const SkillsModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  // Create line geometry
  const createLineGeometry = (start: [number, number, number], end: [number, number, number]) => {
    const points = [];
    points.push(new THREE.Vector3(...start));
    points.push(new THREE.Vector3(...end));
    return new THREE.BufferGeometry().setFromPoints(points);
  };

  return (
    <group ref={groupRef}>
      {/* Central node representing core skills */}
      <mesh position={[0, 0, 0]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={theme === 'dark' ? '#7c3aed' : '#6d28d9'}
          metalness={0.7}
          roughness={0.2}
          wireframe={true}
        />
      </mesh>
      
      {/* Technology nodes */}
      {technologies.map((tech, i) => {
        // Position technologies in a sphere around the center
        const phi = Math.acos(-1 + (2 * i) / technologies.length);
        const theta = Math.sqrt(technologies.length * Math.PI) * phi;
        
        const x = Math.cos(theta) * Math.sin(phi) * 3;
        const y = Math.sin(theta) * Math.sin(phi) * 3;
        const z = Math.cos(phi) * 3;
        
        return (
          <group key={i} position={[x, y, z]}>
            {/* Technology sphere */}
            <mesh>
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshStandardMaterial
                color={
                  i % 3 === 0 ? '#7c3aed' : 
                  i % 3 === 1 ? '#22d3ee' : 
                  '#f97316'
                }
                metalness={0.5}
                roughness={0.5}
              />
            </mesh>
            
            {/* Technology text */}
            <Text
              position={[0, 0.6, 0]}
              fontSize={0.3}
              color={theme === 'dark' ? '#f8fafc' : '#0f172a'}
              anchorX="center"
              anchorY="middle"
            >
              {tech}
            </Text>
            
            {/* Connection line to center */}
            <line>
              <primitive object={createLineGeometry([0, 0, 0], [0, 0, -3])} />
              <lineBasicMaterial
                color={theme === 'dark' ? '#7c3aed' : '#6d28d9'}
                opacity={0.5}
                transparent
                linewidth={1}
              />
            </line>
          </group>
        );
      })}
    </group>
  );
};

export default SkillsModel;