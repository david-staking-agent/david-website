import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

const FloatingCube = () => {
  const meshRef = useRef();
  const engineGlowRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 2);
    meshRef.current.rotation.y = Math.sin(time / 4);
    meshRef.current.position.y = Math.sin(time / 1.5) / 2;
    
    // Add subtle hover effect
    meshRef.current.position.x = Math.sin(time / 2) / 4;
    engineGlowRef.current.intensity = 1 + Math.sin(time * 2) * 0.5;
  });

  return (
    <group>
      {/* Spacecraft body */}
      <mesh ref={meshRef} scale={[2, 0.5, 3]}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial
          color="#7000ff"
          speed={2}
          distort={0.2}
          radius={1}
        />
      </mesh>
      
      {/* Engine glow */}
      <pointLight
        ref={engineGlowRef}
        position={[0, 0, -2]}
        color="#00f6ff"
        intensity={2}
        distance={5}
      />
      
      {/* Cockpit */}
      <mesh position={[0, 0.3, 0.5]} scale={[0.8, 0.3, 0.5]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial
          color="#00f6ff"
          opacity={0.3}
          transparent
          shininess={100}
        />
      </mesh>
    </group>
  );
};

export default FloatingCube;