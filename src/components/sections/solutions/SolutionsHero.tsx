'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export function SolutionsHero({ onOpenConsult }: { onOpenConsult?: () => void }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Track mouse position relative to container
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Scroll to interaction section
    const scrollToGearbox = () => {
        const element = document.getElementById('gearbox-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const nodes = Array.from({ length: 45 }).map((_, i) => ({
        id: i,
        x: (i % 9) * 12 + 2,
        y: Math.floor(i / 9) * 18 + 5,
        isSite: i % 7 === 0, // Randomly designate some as "Clinical Sites"
    }));

    return (
        <section ref={containerRef} className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
            {/* --- Neural Network Background (Sovereign Grid) --- */}
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full opacity-40">
                    {nodes.map((node, i) => {
                        const dx = (node.x / 100) * (containerRef.current?.offsetWidth || 1000) - mousePos.x;
                        const dy = (node.y / 100) * (containerRef.current?.offsetHeight || 800) - mousePos.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        const isClose = dist < 300;

                        return (
                            <g key={node.id}>
                                {nodes.slice(i + 1).map(neighbor => {
                                    const nx = Math.abs(neighbor.x - node.x);
                                    const ny = Math.abs(neighbor.y - node.y);
                                    if (nx < 15 && ny < 25) {
                                        return (
                                            <motion.line
                                                key={`l-${node.id}-${neighbor.id}`}
                                                x1={`${node.x}%`} y1={`${node.y}%`}
                                                x2={`${neighbor.x}%`} y2={`${neighbor.y}%`}
                                                stroke="#1E4E9B"
                                                strokeWidth={isClose ? "0.8" : "0.2"}
                                                animate={{
                                                    strokeOpacity: isClose ? 0.6 : 0.1,
                                                    stroke: isClose ? "#D97706" : "#1E4E9B"
                                                }}
                                                className="transition-all duration-500"
                                            />
                                        );
                                    }
                                    return null;
                                })}

                                <motion.circle
                                    cx={`${node.x}%`}
                                    cy={`${node.y}%`}
                                    r={node.isSite ? (isClose ? 6 : 4) : (isClose ? 3 : 1.5)}
                                    fill={node.isSite ? (isClose ? "#D97706" : "#1E4E9B") : "#1E4E9B"}
                                    className="transition-all duration-300 cursor-pointer"
                                    opacity={isClose ? 1 : node.isSite ? 0.6 : 0.4}
                                    onClick={scrollToGearbox}
                                />

                                {node.isSite && (
                                    <motion.circle
                                        cx={`${node.x}%`}
                                        cy={`${node.y}%`}
                                        r="12"
                                        className="fill-none stroke-precision-blue stroke-[0.5] animate-ping opacity-20 pointer-events-none"
                                    />
                                )}
                            </g>
                        );
                    })}

                    <defs>
                        <radialGradient id="blue-glow" cx="0.5" cy="0.5" r="0.5">
                            <stop offset="0%" stopColor="#1E4E9B" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#1E4E9B" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            {/* --- Content --- */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight tracking-tight font-sans">
                        Architecting the <span className="text-precision-blue">Digital Nervous System</span><br />
                        of Sovereign Health.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-xl text-slate-300 leading-relaxed font-light font-inter">
                        We engineer the Digital Nervous System of Sovereign Health. High-integrity, standards-driven infrastructure for nations that demand data independence.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 flex flex-col items-center gap-6"
                >
                    <button
                        onClick={onOpenConsult}
                        className="group relative inline-flex items-center gap-4 px-10 py-5 bg-precision-blue/10 backdrop-blur-md border border-precision-blue/30 rounded-sm hover:bg-precision-blue/20 transition-all"
                    >
                        <span className="relative z-10 text-white font-bold tracking-widest text-sm uppercase font-mono">Initiate System Audit</span>
                        <ArrowRight className="w-4 h-4 text-precision-blue group-hover:translate-x-1 transition-transform relative z-10" />
                    </button>

                    <div className="flex items-center gap-8">
                        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Network: Sovereign
                        </p>
                        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                            Security: AES-256
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Hint to scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-slate-500 hover:text-white transition-colors flex flex-col items-center gap-2"
                onClick={scrollToGearbox}
            >
                <span className="text-[10px] font-mono uppercase tracking-widest">Explore Architecture</span>
                <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <ArrowRight className="w-4 h-4 rotate-90" />
                </motion.div>
            </motion.div>
        </section>
    );
}
