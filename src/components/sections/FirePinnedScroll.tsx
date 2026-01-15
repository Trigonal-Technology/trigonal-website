'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const firePrinciples = [
    {
        id: 'focus',
        title: 'FOCUS',
        subtitle: 'Core Pillars',
        description: 'We architect systems around the irreducible requirements: Data Sovereignty, Clinical Workflows, Fiscal Integrity, and Interoperability. No feature bloat. No vendor lock-in.',
        metrics: ['HL7 FHIR R4', 'OpenHIE', 'PostgreSQL 14']
    },
    {
        id: 'integrity',
        title: 'INTEGRITY',
        subtitle: 'Standards Sync',
        description: 'Every integration is validated against global health standards. Every deployment is audited for compliance. Every line of code is version-controlled and peer-reviewed.',
        metrics: ['HIPAA', 'Nepal MoHP 2081', 'ISO 27001']
    },
    {
        id: 'respect',
        title: 'RESPECT',
        subtitle: 'Global Sovereignty',
        description: 'We never own your data. We architect systems that respect national data residency laws, local workflows, and the dignity of patient information.',
        metrics: ['Data Residency', 'RBAC', 'Audit Trails']
    },
    {
        id: 'execution',
        title: 'EXECUTION',
        subtitle: 'Deploy System',
        description: 'From architectural brief to production deployment, our senior engineers (12+ years avg.) deliver Docker-based, Git-versioned, horizontally-scalable health infrastructure.',
        metrics: ['Docker + K8s', 'CI/CD', 'Zero Downtime']
    }
];

interface TetrahedronModelProps {
    rotationProgress: MotionValue<number>;
}

const TetrahedronModel: React.FC<TetrahedronModelProps> = ({ rotationProgress }) => {
    const meshRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (meshRef.current) {
            // Rotate 90 degrees per section on Y-axis
            meshRef.current.rotation.y = rotationProgress.get();
        }
    });

    const nodes = [
        new THREE.Vector3(0, 1.5, 0), // Apex
        new THREE.Vector3(-1.5, -0.5, -0.866), // Base 1
        new THREE.Vector3(1.5, -0.5, -0.866),  // Base 2
        new THREE.Vector3(0, -0.5, 1.732),    // Base 3
    ];

    return (
        <group ref={meshRef} scale={0.8}>
            {/* Nodes */}
            {nodes.map((node, i) => (
                <mesh key={i} position={[node.x, node.y, node.z]}>
                    <sphereGeometry args={[0.25, 16, 16]} />
                    <meshBasicMaterial color="#1E4E9B" />
                </mesh>
            ))}
            {/* Edges */}
            {[
                [nodes[0], nodes[1]],
                [nodes[0], nodes[2]],
                [nodes[0], nodes[3]],
                [nodes[1], nodes[2]],
                [nodes[2], nodes[3]],
                [nodes[3], nodes[1]],
            ].map((edge, i) => {
                const [start, end] = edge;
                const length = start.distanceTo(end);
                const midpoint = start.clone().add(end).multiplyScalar(0.5);
                const direction = end.clone().sub(start).normalize();
                
                return (
                    <mesh key={i} position={[midpoint.x, midpoint.y, midpoint.z]}>
                        <cylinderGeometry args={[0.05, 0.05, length, 8]} />
                        <meshBasicMaterial color="#1E4E9B" wireframe />
                    </mesh>
                );
            })}
        </group>
    );
};

export function FirePinnedScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const rotationProgress = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2, Math.PI * 2]
    );

    return (
        <section ref={containerRef} className="relative min-h-[360vh] bg-slate-50">
            <div className="sticky top-0 h-screen flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-10 items-start">
                        {/* Left: 3D Tetrahedron (Pinned 40%) */}
                        <div className="w-[40%] h-[520px] sticky top-24">
                            <div className="relative h-full">
                                <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                                    <ambientLight intensity={0.5} />
                                    <pointLight position={[10, 10, 10]} intensity={1} />
                                    <TetrahedronModel rotationProgress={rotationProgress} />
                                </Canvas>

                                <motion.div
                                    className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white border border-slate-200 rounded-full"
                                    initial={{ opacity: 0, y: -10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                >
                                    <p className="font-mono text-xs uppercase tracking-wider text-precision-blue">
                                        BUILD_WITH_FIRE
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right: Scroll Narrative (60%) */}
                        <div className="w-[60%] space-y-[70vh]">
                            {firePrinciples.map((principle, index) => (
                                <motion.div
                                    key={principle.id}
                                    className="min-h-[70vh] flex flex-col justify-center"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.15 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <div className="bg-white border-2 border-slate-200 rounded-lg p-8 shadow-sm">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-precision-blue rounded-lg flex items-center justify-center">
                                                <span className="font-mono text-xl font-bold text-white">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="font-mono text-2xl font-bold text-slate-900">
                                                    {principle.title}
                                                </h3>
                                                <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                                                    {principle.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-slate-700 leading-relaxed mb-6">
                                            {principle.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {principle.metrics.map((metric, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-slate-100 border border-slate-200 rounded font-mono text-xs text-slate-700"
                                                >
                                                    {metric}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
