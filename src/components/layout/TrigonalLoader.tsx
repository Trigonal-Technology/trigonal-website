'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// FIRE Culture Animation Labels
const FIRE_LABELS = [
    { id: 1, text: '[01_FOCUS: CORE_PILLARS]', duration: 1000 },
    { id: 2, text: '[02_INTEGRITY: STANDARDS_SYNC]', duration: 1000 },
    { id: 3, text: '[03_RESPECT: GLOBAL_SOVEREIGNTY]', duration: 1000 },
    { id: 4, text: '[04_EXECUTION: DEPLOY_SYSTEM]', duration: 1000 }
];

// Trigonal Tetrahedron Component (4 Nodes forming a pyramid)
function TrigonalSymbol() {
    const groupRef = useRef<THREE.Group>(null);
    const [animationPhase, setAnimationPhase] = useState(0);

    // Node positions (tetrahedron - 4 vertices of a triangular pyramid)
    const nodePositions: [number, number, number][] = [
        [0, 1.5, 0],        // Apex (top)
        [-1.3, -0.75, 0.8], // Base front-left
        [1.3, -0.75, 0.8],  // Base front-right
        [0, -0.75, -1.6]    // Base back
    ];

    useFrame((state) => {
        if (!groupRef.current) return;

        const elapsed = state.clock.getElapsedTime();

        // Phase 1 (0-1s): Nodes fade in
        if (elapsed < 1) {
            setAnimationPhase(1);
        }
        // Phase 2 (1-2s): Lines connect
        else if (elapsed < 2) {
            setAnimationPhase(2);
        }
        // Phase 3 (2-3s): Multi-axis rotation
        else if (elapsed < 3) {
            setAnimationPhase(3);
            const rotTime = elapsed - 2;
            groupRef.current.rotation.x = rotTime * Math.PI * 1.5; // X-axis rotation
            groupRef.current.rotation.y = rotTime * Math.PI * 2;   // Y-axis rotation (360°)
            groupRef.current.rotation.z = rotTime * Math.PI * 0.5; // Z-axis rotation
        }
        // Phase 4 (3-4s): Speed increase + flatten + zoom
        else if (elapsed < 4) {
            setAnimationPhase(4);
            const zoomProgress = (elapsed - 3) / 1;
            // Faster multi-axis rotation
            groupRef.current.rotation.x = Math.PI * 1.5 + (elapsed - 3) * Math.PI * 3;
            groupRef.current.rotation.y = Math.PI * 2 + (elapsed - 3) * Math.PI * 4;
            groupRef.current.rotation.z = Math.PI * 0.5 + (elapsed - 3) * Math.PI * 2;
            // Flatten: reduce Z-depth
            groupRef.current.scale.set(1 + zoomProgress * 2, 1 + zoomProgress * 2, 1 - zoomProgress * 0.8);
            groupRef.current.position.z = zoomProgress * 3;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Nodes (Spheres) */}
            {nodePositions.map((position, idx) => (
                <mesh key={`node-${idx}`} position={position}>
                    <sphereGeometry args={[0.25, 16, 16]} />
                    <meshBasicMaterial
                        color="#1E4E9B"
                        wireframe
                        transparent
                        opacity={animationPhase >= 1 ? 1 : 0}
                    />
                </mesh>
            ))}

            {/* Connections (6 edges of tetrahedron) */}
            {animationPhase >= 2 && (
                <>
                    {/* Base triangle */}
                    <Line start={nodePositions[1]} end={nodePositions[2]} color="#1E4E9B" />
                    <Line start={nodePositions[2]} end={nodePositions[3]} color="#1E4E9B" />
                    <Line start={nodePositions[3]} end={nodePositions[1]} color="#1E4E9B" />
                    {/* Apex to base */}
                    <Line start={nodePositions[0]} end={nodePositions[1]} color="#1E4E9B" />
                    <Line start={nodePositions[0]} end={nodePositions[2]} color="#1E4E9B" />
                    <Line start={nodePositions[0]} end={nodePositions[3]} color="#1E4E9B" />
                </>
            )}
        </group>
    );
}

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
        const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, direction.normalize());
        ref.current.setRotationFromQuaternion(quaternion);

        // Set scale (length)
        ref.current.scale.set(1, length, 1);
    }, [start, end]);

    return (
        <mesh ref={ref}>
            <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
            <meshBasicMaterial color={color} wireframe transparent opacity={0.8} />
        </mesh>
    );
}

interface TrigonalLoaderProps {
    durationMs?: number;
    forceShow?: boolean;
    persistInSession?: boolean;
}

// Main Loader Component
export function TrigonalLoader({
    durationMs = 4000,
    forceShow = false,
    persistInSession = true
}: TrigonalLoaderProps) {
    const [show, setShow] = useState(true);
    const [currentLabel, setCurrentLabel] = useState(FIRE_LABELS[0]);

    useEffect(() => {
        if (!forceShow && persistInSession) {
            // Check if loader has been shown in this session
            if (typeof window !== 'undefined') {
                const hasSeenLoader = sessionStorage.getItem('trigonal_loader_seen');
                if (hasSeenLoader) {
                    setShow(false);
                    return;
                }
            }
        }

        // Animate through labels
        let labelIndex = 0;
        const stepDuration = Math.max(600, Math.floor(durationMs / FIRE_LABELS.length));
        const labelInterval = setInterval(() => {
            labelIndex++;
            if (labelIndex < FIRE_LABELS.length) {
                setCurrentLabel(FIRE_LABELS[labelIndex]);
            }
        }, stepDuration);

        // Hide loader after duration
        const hideTimer = setTimeout(() => {
            setShow(false);
            if (persistInSession && typeof window !== 'undefined') {
                sessionStorage.setItem('trigonal_loader_seen', 'true');
            }
        }, durationMs);

        return () => {
            clearInterval(labelInterval);
            clearTimeout(hideTimer);
        };
    }, [durationMs, forceShow, persistInSession]);

    if (!show) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
            >
                {/* 3D Canvas */}
                <div className="w-full h-2/3">
                    <Canvas
                        camera={{ position: [0, 0, 8], fov: 50 }}
                        style={{ background: '#FFFFFF' }}
                    >
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <TrigonalSymbol />
                    </Canvas>
                </div>

                {/* Culture Label */}
                <motion.div
                    key={currentLabel.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-24 font-mono text-xs text-precision-blue uppercase tracking-wider"
                >
                    {currentLabel.text}
                </motion.div>

                {/* Trigonal Branding */}
                <div className="absolute bottom-8 flex items-center gap-2">
                    <div className="w-8 h-8">
                        <img
                            src="/logos/trigonal.webp"
                            alt="Trigonal"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="font-bold text-sm text-slate-900">
                        TRIGONAL TECHNOLOGY
                    </span>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
