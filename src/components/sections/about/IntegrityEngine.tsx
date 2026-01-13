'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Shield, Users, Award, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const buildPrinciples = [
    { letter: 'B', title: 'Bravery', desc: 'Courage to tackle complex health challenges' },
    { letter: 'U', title: 'Unity', desc: 'Collaborative, cross-functional teams' },
    { letter: 'I', title: 'Integrity', desc: 'Honest engineering, no shortcuts' },
    { letter: 'L', title: 'Leadership', desc: 'Taking ownership of outcomes' },
    { letter: 'D', title: 'Discipline', desc: 'Consistent, reliable delivery' },
];

const fireSatellites = [
    { id: 'F', label: 'ocus', sub: 'No distractions', x: 0, y: -160, color: '#D97706' },
    { id: 'I', label: 'ntegrity', sub: 'Honest comms', x: 160, y: 0, color: '#D97706' },
    { id: 'R', label: 'espect', sub: 'Value people', x: 0, y: 160, color: '#D97706' },
    { id: 'E', label: 'xecution', sub: 'Deliver results', x: -160, y: 0, color: '#D97706' },
];

export default function IntegrityEngine() {
    const [activeSatIndex, setActiveSatIndex] = useState(0);
    const [isMeshed, setIsMeshed] = useState(false);

    // Animation Loop
    useEffect(() => {
        const cycle = setInterval(() => {
            setIsMeshed(true);
            setTimeout(() => {
                setIsMeshed(false);
                setTimeout(() => {
                    setActiveSatIndex((prev) => (prev + 1) % 4);
                }, 1000); // Time to glide back
            }, 3000); // Mesh duration
        }, 5000); // Total Cycle

        return () => clearInterval(cycle);
    }, []);

    const gearPath = "M25,2 L29,2 L31,8 A22,22 0 0,1 39,11 L45,7 L49,11 L45,19 A22,22 0 0,1 48,27 L55,29 L55,35 L48,37 A22,22 0 0,1 45,45 L49,53 L45,57 L37,53 A22,22 0 0,1 29,56 L27,62 L21,62 L19,56 A22,22 0 0,1 11,53 L3,57 L-1,53 L3,45 A22,22 0 0,1 0,37 L-7,35 L-7,29 L0,27 A22,22 0 0,1 3,19 L-1,11 L3,7 L11,11 A22,22 0 0,1 19,8 Z";

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full relative overflow-hidden">
            {/* Background Grid - managed by parent or here? User said 'opacity-10 grid background' for the section. 
                I'll keep a local grid if it helps, or remove it if parent has it. 
                I'll keep it but ensure opacity-10 map.
            */}
            {/* <div className="absolute inset-0 bg-blueprint-grid opacity-[0.10] pointer-events-none" /> IS THIS NEEDED? 
               The prompt says "A single, full-width blueprint section with a subtle opacity-10 grid background." 
               I'll remove this local grid and let the parent section wrap it.
            */}

            {/* --- LEFT PANEL: BUILD Principles --- */}
            <div className="lg:w-1/3 z-10 w-full">
                <div className="mb-8">
                    <p className="font-mono text-xs uppercase tracking-widest text-execution-orange font-bold mb-2">The Foundation</p>
                    <h2 className="text-3xl font-bold text-slate-900">BUILD Principles</h2>
                </div>

                <div className="space-y-6 border-l-2 border-slate-100 pl-6 relative">
                    {/* Active Indicator Line which could be animated if we linked it to the cycle */}
                    {buildPrinciples.map((item, i) => (
                        <div key={item.letter} className="group flex flex-col gap-1 relative">
                            {/* Hover/Active highlight pill */}
                            <div className="absolute -left-[27px] top-1 w-1.5 h-6 bg-transparent group-hover:bg-precision-blue rounded-r transition-colors" />

                            <div className="flex items-center gap-3">
                                <span className="font-mono font-bold text-precision-blue text-lg">{item.letter}</span>
                                <span className="font-bold text-slate-800 text-lg">{item.title}</span>
                            </div>
                            <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- RIGHT PANEL: FIRE Kinetic Engine --- */}
            <div className="lg:w-2/3 w-full relative flex items-center justify-center min-h-[600px] p-8">
                {/* SVG Stage */}
                <svg viewBox="-300 -300 600 600" className="w-full h-full max-w-[600px] drop-shadow-2xl overflow-visible">
                    <defs>
                        <filter id="heavy-metal">
                            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.15" />
                        </filter>
                        <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F8FAFC" />
                            <stop offset="100%" stopColor="#E2E8F0" />
                        </linearGradient>
                    </defs>

                    {/* --- CENTRAL GEAR --- */}
                    {/* Rotates when meshed */}
                    {/* --- CENTRAL GEAR --- */}
                    {/* Rotates when meshed - Using CSS for smooth pause state */}
                    <g className="origin-center" style={{
                        animation: `spin-linear 22.15s linear infinite`,
                        animationPlayState: isMeshed ? 'running' : 'paused'
                    }}>
                        {/* Outer Teeth Ring */}
                        <path
                            d={gearPath}
                            transform="scale(2.4)"
                            fill="url(#metal-gradient)"
                            stroke="#1E4E9B"
                            strokeWidth="1"
                            filter="url(#heavy-metal)"
                        />
                        {/* Inner Body */}
                        <circle r="85" fill="white" stroke="#1E4E9B" strokeWidth="2" />
                        <circle r="75" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4,4" />

                        {/* Branding */}
                        <text y="-55" textAnchor="middle" className="text-[10px] font-mono fill-precision-blue font-bold tracking-[0.4em]">TRIGONAL</text>
                        <text y="65" textAnchor="middle" className="text-[10px] font-mono fill-precision-blue font-bold tracking-[0.4em]">SYSTEMS</text>

                        {/* Center Hub */}
                        <circle r="30" fill="#1E4E9B" />
                        <circle r="15" fill="#D97706" />
                    </g>

                    {/* --- SATELLITE GEARS --- */}
                    {fireSatellites.map((sat, i) => {
                        const isActive = i === activeSatIndex;

                        // Adjusted distances for layout fix
                        const meshDistance = 140; // Closer for mesh
                        const idleDistance = 210; // Further out for idle

                        const x = isActive && isMeshed
                            ? (sat.x === 0 ? 0 : sat.x > 0 ? meshDistance : -meshDistance)
                            : (sat.x === 0 ? 0 : sat.x > 0 ? idleDistance : -idleDistance);

                        const y = isActive && isMeshed
                            ? (sat.y === 0 ? 0 : sat.y > 0 ? meshDistance : -meshDistance)
                            : (sat.y === 0 ? 0 : sat.y > 0 ? idleDistance : -idleDistance);

                        return (
                            <motion.g
                                key={sat.id}
                                initial={{ x: sat.x === 0 ? 0 : sat.x > 0 ? idleDistance : -idleDistance, y: sat.y === 0 ? 0 : sat.y > 0 ? idleDistance : -idleDistance }}
                                animate={{ x, y }}
                                transition={{ type: "spring", stiffness: 45, damping: 20 }}
                            >
                                {/* Self Rotation */}
                                <motion.g
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                                >
                                    {/* Gear Body */}
                                    <path
                                        d={gearPath}
                                        transform="scale(1.3)"
                                        fill={isActive ? "#FFF7ED" : "white"}
                                        stroke={isActive ? "#D97706" : "#1E4E9B"}
                                        strokeWidth="1.5"
                                        filter="url(#heavy-metal)"
                                    />
                                    {/* Inner Circle */}
                                    <circle r="28" fill="white" stroke={isActive ? "#D97706" : "#1E4E9B"} strokeWidth="1" />

                                    {/* Letter */}
                                    <text y="10" textAnchor="middle" className="text-2xl font-black fill-slate-800" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {sat.id}
                                    </text>
                                </motion.g>

                                {/* Floating Label (Non-rotating) - MOVED DOWN for visibility */}
                                <g transform="translate(0, 65)">
                                    <text textAnchor="middle" className="text-xs font-bold fill-slate-900 uppercase tracking-wider">{sat.label}</text>
                                    <text y="14" textAnchor="middle" className="text-[10px] font-mono fill-slate-500 w-32">{sat.sub}</text>
                                </g>
                            </motion.g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
}
