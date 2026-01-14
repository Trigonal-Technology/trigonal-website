'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface DataPacket {
    id: number;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    progress: number;
}

interface NeuralNode {
    id: number;
    x: number;
    y: number;
    isActive: boolean;
}

export function AnimatedSyncHub({ onOpenConsult }: { onOpenConsult?: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dataPackets, setDataPackets] = useState<DataPacket[]>([]);
    const [neuralNodes, setNeuralNodes] = useState<NeuralNode[]>([]);
    const [pulseActive, setPulseActive] = useState(false);
    const [scrollSpeed, setScrollSpeed] = useState(1);

    const { scrollY } = useScroll();

    // Generate neural network nodes
    useEffect(() => {
        const nodes: NeuralNode[] = [];
        const gridSize = 8;

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                nodes.push({
                    id: i * gridSize + j,
                    x: (i / (gridSize - 1)) * 100,
                    y: (j / (gridSize - 1)) * 100,
                    isActive: false
                });
            }
        }

        setNeuralNodes(nodes);
    }, []);

    // Update scroll speed based on scroll position
    useEffect(() => {
        const updateScrollSpeed = () => {
            const speed = 1 + Math.min(scrollY.get() / 500, 2); // Max 3x speed
            setScrollSpeed(speed);
        };

        const unsubscribe = scrollY.on('change', updateScrollSpeed);
        return () => unsubscribe();
    }, [scrollY]);

    // Generate data packets every 3 seconds (adjusted by scroll speed)
    useEffect(() => {
        const interval = setInterval(() => {
            const randomNode = neuralNodes[Math.floor(Math.random() * neuralNodes.length)];
            if (randomNode) {
                const newPacket: DataPacket = {
                    id: Date.now(),
                    startX: randomNode.x,
                    startY: randomNode.y,
                    endX: 50, // Center
                    endY: 50,
                    progress: 0
                };

                setDataPackets(prev => [...prev, newPacket]);

                // Remove packet after animation
                setTimeout(() => {
                    setDataPackets(prev => prev.filter(p => p.id !== newPacket.id));
                }, 2000 / scrollSpeed);
            }
        }, 3000 / scrollSpeed);

        return () => clearInterval(interval);
    }, [neuralNodes, scrollSpeed]);

    // Radial pulse every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setPulseActive(true);

            // Activate nodes in waves
            neuralNodes.forEach((node, index) => {
                setTimeout(() => {
                    setNeuralNodes(prev =>
                        prev.map(n => n.id === node.id ? { ...n, isActive: true } : n)
                    );
                }, index * 30);

                setTimeout(() => {
                    setNeuralNodes(prev =>
                        prev.map(n => n.id === node.id ? { ...n, isActive: false } : n)
                    );
                }, index * 30 + 1000);
            });

            setTimeout(() => setPulseActive(false), 2000);
        }, 5000 / scrollSpeed);

        return () => clearInterval(interval);
    }, [neuralNodes, scrollSpeed]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20"
        >
            {/* Neural Network Background */}
            <svg className="absolute inset-0 w-full h-full opacity-40" style={{ zIndex: 1 }}>
                <defs>
                    <radialGradient id="pulse-gradient">
                        <stop offset="0%" stopColor="#D97706" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Grid Lines */}
                {neuralNodes.map((node, i) => (
                    <g key={`node-${node.id}`}>
                        {/* Connect to nearby nodes */}
                        {neuralNodes.slice(i + 1).map(otherNode => {
                            const dx = Math.abs(node.x - otherNode.x);
                            const dy = Math.abs(node.y - otherNode.y);
                            const distance = Math.sqrt(dx * dx + dy * dy);

                            if (distance < 20) {
                                return (
                                    <line
                                        key={`line-${node.id}-${otherNode.id}`}
                                        x1={`${node.x}%`}
                                        y1={`${node.y}%`}
                                        x2={`${otherNode.x}%`}
                                        y2={`${otherNode.y}%`}
                                        stroke="#1E4E9B"
                                        strokeWidth="1"
                                        opacity="0.3"
                                    />
                                );
                            }
                            return null;
                        })}

                        {/* Neural Nodes */}
                        <circle
                            cx={`${node.x}%`}
                            cy={`${node.y}%`}
                            r={node.isActive ? "6" : "3"}
                            fill={node.isActive ? "#D97706" : "#1E4E9B"}
                            opacity={node.isActive ? 1 : 0.5}
                            style={{
                                transition: 'all 0.3s ease',
                                filter: node.isActive ? 'drop-shadow(0 0 8px #D97706)' : 'none'
                            }}
                        />
                    </g>
                ))}

                {/* Data Packets */}
                {dataPackets.map(packet => (
                    <motion.circle
                        key={packet.id}
                        r="4"
                        fill="#D97706"
                        style={{
                            filter: 'drop-shadow(0 0 6px #D97706)'
                        }}
                        animate={{
                            cx: [`${packet.startX}%`, `${packet.endX}%`],
                            cy: [`${packet.startY}%`, `${packet.endY}%`],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 2 / scrollSpeed,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Radial Pulse */}
                {pulseActive && (
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="0"
                        fill="none"
                        stroke="#D97706"
                        strokeWidth="2"
                        opacity="0.6"
                        animate={{
                            r: ["0", "600"],
                            opacity: [0.6, 0]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeOut"
                        }}
                    />
                )}
            </svg>

            {/* The Animated Hub */}
            <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
                {/* Concentric Rotating Rings */}
                <div className="relative inline-block mb-8">
                    <svg width="500" height="500" viewBox="0 0 500 500" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ marginTop: '-80px' }}>
                        <defs>
                            <path
                                id="innerRingPath"
                                d="M 250,250 m -180,0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                            />
                        </defs>

                        {/* Outer Dashed Ring */}
                        <motion.circle
                            cx="250"
                            cy="250"
                            r="220"
                            fill="none"
                            stroke="#1E4E9B"
                            strokeWidth="2"
                            strokeDasharray="10 10"
                            opacity="0.4"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 40 / scrollSpeed,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ originX: '250px', originY: '250px' }}
                        />

                        {/* Middle Ring */}
                        <motion.circle
                            cx="250"
                            cy="250"
                            r="200"
                            fill="none"
                            stroke="#1E4E9B"
                            strokeWidth="1"
                            opacity="0.2"
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 50 / scrollSpeed,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ originX: '250px', originY: '250px' }}
                        />

                        {/* Inner Glowing Ring with Text */}
                        <motion.circle
                            cx="250"
                            cy="250"
                            r="180"
                            fill="none"
                            stroke="#D97706"
                            strokeWidth="2"
                            opacity="0.6"
                            style={{
                                filter: 'drop-shadow(0 0 10px #D97706)'
                            }}
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 30 / scrollSpeed,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        {/* Rotating Text on Inner Ring */}
                        <motion.g
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 30 / scrollSpeed,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ originX: '250px', originY: '250px' }}
                        >
                            <text
                                fill="#D97706"
                                fontSize="12"
                                fontFamily="JetBrains Mono, monospace"
                                fontWeight="bold"
                                letterSpacing="2"
                            >
                                <textPath href="#innerRingPath" startOffset="0%">
                                    FHIR R4 • ODOO 18 • HL7 • ASTM •
                                </textPath>
                            </text>
                        </motion.g>
                    </svg>

                    {/* Hub Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative"
                    >
                        <img src="/favicon.svg" className="w-20 h-20 mx-auto mb-6 opacity-90" alt="Trigonal" />
                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight tracking-tight font-mono">
                            THE SYNC HUB
                        </h1>
                        <p className="text-xl text-slate-300 mb-2 leading-relaxed font-light">
                            The Digital Nervous System of Sovereign Health
                        </p>
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-8">
                            60+ Years Combined Engineering • 5 Architectural Layers • Zero Vendor Lock-In
                        </p>

                        {/* CTA Button */}
                        <button
                            onClick={onOpenConsult}
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-precision-blue/10 backdrop-blur-md border border-precision-blue/30 rounded-sm hover:bg-precision-blue/20 transition-all"
                        >
                            <span className="relative z-10 text-white font-bold tracking-widest text-sm uppercase font-mono">
                                Initiate System Audit
                            </span>
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="relative z-10"
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8h14M9 2l6 6-6 6" stroke="#1E4E9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.div>
                        </button>
                    </motion.div>
                </div>

                {/* System Status Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center justify-center gap-8 mt-12"
                >
                    <div className="flex items-center gap-2">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.6, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-2 h-2 bg-green-500 rounded-full"
                        />
                        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] mb-1">Architectural Maturity</p>
                        <p className="text-sm font-mono text-execution-orange font-bold">12+ YEARS SENIORITY</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.6, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                            className="w-2 h-2 bg-orange-500 rounded-full"
                        />
                        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em]">
                            Security: AES-256
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.6, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="w-2 h-2 bg-blue-500 rounded-full"
                        />
                        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em]">
                            Packets: {Math.floor(scrollSpeed * 100)}/s
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Spine Connection at Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 z-10">
                <motion.div
                    className="w-full h-full bg-gradient-to-b from-execution-orange to-transparent"
                    animate={{
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                        duration: 2 / scrollSpeed,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        boxShadow: '0 0 20px rgba(217, 119, 6, 0.6)'
                    }}
                />

                {/* Connection Pulse */}
                <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-execution-orange"
                    animate={{
                        y: [0, -128, -128],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 2 / scrollSpeed,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        filter: 'blur(2px)',
                        boxShadow: '0 0 10px rgba(217, 119, 6, 0.8)'
                    }}
                />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors flex flex-col items-center gap-2 cursor-pointer z-10"
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-[10px] font-mono uppercase tracking-widest">Explore Architecture</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2v12M2 8l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
