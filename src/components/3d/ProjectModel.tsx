import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '../../context/ThemeContext';
import * as THREE from 'three';

interface ProjectModelProps {
  selectedProject: number | null;
}

const ProjectModel: React.FC<ProjectModelProps> = ({ selectedProject }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      
      // Extra animation when a project is selected
      if (selectedProject !== null && groupRef.current.children.length > 0) {
        const projectIndex = selectedProject - 1;
        if (projectIndex >= 0 && projectIndex < groupRef.current.children.length) {
          // Highlight the selected project's object by scaling it up slightly
          const selectedObject = groupRef.current.children[projectIndex];
          selectedObject.scale.set(1.5, 1.5, 1.5);
        }
      } else {
        // Reset scales when no project is selected
        groupRef.current.children.forEach(child => {
          child.scale.set(1, 1, 1);
        });
      }
    }
  });

  // Different geometries for different projects
  const projectGeometries = [
    <boxGeometry args={[1, 1, 1]} />,
    <dodecahedronGeometry args={[1, 0]} />,
    <torusGeometry args={[0.7, 0.3, 16, 32]} />,
    <icosahedronGeometry args={[1, 0]} />
  ];
  
  // Project colors
  const projectColors = [
    theme === 'dark' ? '#7c3aed' : '#6d28d9',  // Primary
    theme === 'dark' ? '#22ebff' : '#0187a3',  // Secondary
    theme === 'dark' ? '#f97316' : '#ea580c',  // Accent
    theme === 'dark' ? '#10b981' : '#059669'   // Success
  ];

  // Create line geometries
  const createLineGeometry = (start: [number, number, number], end: [number, number, number]) => {
    const points = [];
    points.push(new THREE.Vector3(...start));
    points.push(new THREE.Vector3(...end));
    return new THREE.BufferGeometry().setFromPoints(points);
  };

  return (
    <group ref={groupRef}>
      {/* Project objects */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        const radius = 2.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <mesh key={i} position={[x, 0, z]}>
            {projectGeometries[i]}
            <meshStandardMaterial
              color={projectColors[i]}
              metalness={0.5}
              roughness={0.3}
              emissive={projectColors[i]}
              emissiveIntensity={selectedProject === i + 1 ? 0.5 : 0.2}
            />
          </mesh>
        );
      })}
      
      {/* Central connecting element */}
      <mesh>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color={theme === 'dark' ? '#f8fafc' : '#0f172a'}
          metalness={0.8}
          roughness={0.2}
          wireframe={true}
        />
      </mesh>
      
      {/* Connection lines */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        const radius = 2.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <line key={i}>
            <primitive object={createLineGeometry([0, 0, 0], [x, 0, z])} />
            <lineBasicMaterial
              color={projectColors[i]}
              opacity={selectedProject === i + 1 ? 0.8 : 0.3}
              transparent
              linewidth={1}
            />
          </line>
        );
      })}
    </group>
  );
};

export default ProjectModel;