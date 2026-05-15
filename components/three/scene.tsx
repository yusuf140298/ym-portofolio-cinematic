"use client";

import { Float, PerformanceMonitor, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { memo, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function ParticleField({ count = 1300 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const [positions, colors] = useMemo(() => {
    const positionArray = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);
    const colorA = new THREE.Color("#67e8f9");
    const colorB = new THREE.Color("#cdfc52");
    const colorC = new THREE.Color("#ff6747");

    for (let index = 0; index < count; index += 1) {
      const radius = 5.5 + Math.random() * 9.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positionArray[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positionArray[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.46;
      positionArray[index * 3 + 2] = radius * Math.cos(phi) - 5;

      const mixed = colorA.clone().lerp(index % 3 === 0 ? colorB : colorC, Math.random() * 0.72);
      colorArray[index * 3] = mixed.r;
      colorArray[index * 3 + 1] = mixed.g;
      colorArray[index * 3 + 2] = mixed.b;
    }

    return [positionArray, colorArray];
  }, [count]);

  useFrame(({ clock, mouse }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.035 + mouse.x * 0.08;
    points.current.rotation.x = mouse.y * 0.045;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        transparent
        opacity={0.8}
        size={0.026}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GeometryConstellation() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock, mouse }) => {
    if (!group.current) return;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.24) * 0.08 + mouse.y * 0.05;
    group.current.rotation.y = clock.elapsedTime * 0.08 + mouse.x * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.55}>
        <mesh position={[-2.8, 0.7, -2.4]} rotation={[0.5, 0.2, 0.4]}>
          <icosahedronGeometry args={[0.72, 1]} />
          <meshStandardMaterial color="#67e8f9" roughness={0.28} metalness={0.7} wireframe />
        </mesh>
      </Float>
      <Float speed={1.05} rotationIntensity={0.34} floatIntensity={0.5}>
        <mesh position={[2.7, -0.4, -3.1]} rotation={[0.8, 0.1, 0.7]}>
          <torusKnotGeometry args={[0.48, 0.12, 120, 12]} />
          <meshStandardMaterial color="#cdfc52" roughness={0.18} metalness={0.82} />
        </mesh>
      </Float>
      <Float speed={1.65} rotationIntensity={0.22} floatIntensity={0.44}>
        <mesh position={[0.1, 1.8, -4.8]} rotation={[0.3, 0.7, 0.1]}>
          <octahedronGeometry args={[0.58, 0]} />
          <meshStandardMaterial color="#ff6747" roughness={0.34} metalness={0.62} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

const SceneContent = memo(function SceneContent() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 7.2]} fov={52} />
      <color attach="background" args={["#050607"]} />
      <fog attach="fog" args={["#050607", 8, 18]} />
      <ambientLight intensity={0.65} />
      <pointLight position={[-3, 3, 3]} intensity={16} color="#67e8f9" />
      <pointLight position={[4, -2, 4]} intensity={10} color="#ff6747" />
      <ParticleField />
      <GeometryConstellation />
    </>
  );
});

export function Scene() {
  const [dpr, setDpr] = useState(1.5);

  return (
    <div className="fixed inset-0 z-0 opacity-75">
      <Canvas
        dpr={[1, dpr]}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
        frameloop="always"
      >
        <PerformanceMonitor
          onDecline={() => setDpr(1)}
          onIncline={() => setDpr(1.75)}
          flipflops={3}
        />
        <SceneContent />
      </Canvas>
    </div>
  );
}
