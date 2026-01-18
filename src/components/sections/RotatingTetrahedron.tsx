'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MotionValue, useMotionValueEvent } from 'framer-motion';
import * as THREE from 'three';

// Line Component (Cylinder between two points)
function Line({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) {
    const ref = useRef<THREE.Mesh>(null);

    useEffect(() => {
        if (!ref.current) return;

        const startVec = new THREE.Vector3(...start);
        const endVec = new THREE.Vector3(...end);
        const direction = new THREE.Vector3().subVectors(endVec, startVec);
        const length = direction.length();

        // Position at midpoint
        const midpoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
        ref.current.position.copy(midpoint);

        // Align cylinder with direction
        const axis = new THREE.Vector3(0, 1, 0);
        const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, direction.clone().normalize());
        ref.current.setRotationFromQuaternion(quaternion);

        // Set scale (length)
        ref.current.scale.set(1, length, 1);
    }, [start, end]);

    return (
        <mesh ref={ref}>
            <cylinderGeometry args={[0.04, 0.04, 1, 8]} />
            <meshBasicMaterial color={color} transparent opacity={0.6} wireframe />
        </mesh>
    );
}

// Trigonal Symbol with Scroll-Driven Rotation
function TrigonalSymbol({ scrollProgress }: { scrollProgress: number | MotionValue<number> }) {
    const groupRef = useRef<THREE.Group>(null);

    // Node positions (tetrahedron)
    const nodePositions: [number, number, number][] = [
        [0, 1.5, 0],        // Apex
        [-1.3, -0.75, 0.8], // Front-left
        [1.3, -0.75, 0.8],  // Front-right
        [0, -0.75, -1.6]    // Back
    ];

    useFrame(() => {
        if (!groupRef.current) return;

        // Read MotionValue synchronously in useFrame
        const currentProgress = typeof scrollProgress === 'number' 
            ? scrollProgress 
            : (scrollProgress as MotionValue<number>).get();

        // Base rotation + scroll-driven rotation
        const rotationY = currentProgress * Math.PI * 2;
        const rotationX = currentProgress * Math.PI * 0.5;

        groupRef.current.rotation.y = rotationY;
        groupRef.current.rotation.x = 0.5 + rotationX; // Add constant tilt
    });

    return (
        <group ref={groupRef}>
            {/* Nodes (Spheres) */}
            {nodePositions.map((position, idx) => (
                <mesh key={`node-${idx}`} position={position}>
                    <sphereGeometry args={[0.2, 16, 16]} />
                    <meshBasicMaterial color="#1E4E9B" wireframe />
                </mesh>
            ))}

            {/* Connections */}
            <Line start={nodePositions[1]} end={nodePositions[2]} color="#1E4E9B" />
            <Line start={nodePositions[2]} end={nodePositions[3]} color="#1E4E9B" />
            <Line start={nodePositions[3]} end={nodePositions[1]} color="#1E4E9B" />

            <Line start={nodePositions[0]} end={nodePositions[1]} color="#1E4E9B" />
            <Line start={nodePositions[0]} end={nodePositions[2]} color="#1E4E9B" />
            <Line start={nodePositions[0]} end={nodePositions[3]} color="#1E4E9B" />
        </group>
    );
}

export function RotatingTetrahedron({ scrollProgress }: { scrollProgress: number | MotionValue<number> }) {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
                {/* Clean Room Lighting: 6000K cool white ambient */}
                <ambientLight intensity={0.8} color="#FFFFFF" />
                {/* Soft directional light for depth */}
                <directionalLight position={[5, 5, 5]} intensity={0.6} color="#FFFFFF" />
                {/* Precision Blue rim light */}
                <pointLight position={[-5, 5, 5]} intensity={0.4} color="#1E4E9B" />
                <TrigonalSymbol scrollProgress={scrollProgress} />
            </Canvas>
        </div>
    );
}
