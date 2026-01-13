'use client';
import React, { useState, useEffect } from 'react';

const KineticIntegrityEngine = () => {
    // Stage: 0=Idle, 1=Gliding In, 2=Meshed (Spark!), 3=Gliding Out
    // ActiveSatellite: 0=F, 1=I, 2=R, 3=E
    const [activeSat, setActiveSat] = useState(0);
    const [stage, setStage] = useState(0);

    const satellites = [
        { id: 'F', label: 'ocus', x: 80, y: 80, targetX: 165, targetY: 165, color: '#D97706' },
        { id: 'I', label: 'ntegrity', x: 420, y: 80, targetX: 335, targetY: 165, color: '#D97706' },
        { id: 'R', label: 'espect', x: 80, y: 420, targetX: 165, targetY: 335, color: '#D97706' },
        { id: 'E', label: 'xecution', x: 420, y: 420, targetX: 335, targetY: 335, color: '#D97706' },
    ];

    // Animation Loop
    useEffect(() => {
        const cycleLength = 4000; // 4 seconds total cycle
        const glideDuration = 800;
        const meshDuration = 2000;

        const loop = setInterval(() => {
            // Start Glide In
            setStage(1);

            // Mesh & Spark
            setTimeout(() => {
                setStage(2);
            }, glideDuration);

            // Glide Out / Reset
            setTimeout(() => {
                setStage(3); // Glide out
            }, glideDuration + meshDuration);

            // Next Satellite - prepares for next interval
            setTimeout(() => {
                setStage(0);
                setActiveSat(prev => (prev + 1) % 4);
            }, cycleLength - 100);

        }, cycleLength);

        return () => clearInterval(loop);
    }, []);

    // Gear Path (Standardized 10-tooth gear for reliability)
    const gearPath = "M25,2 L29,2 L31,8 A22,22 0 0,1 39,11 L45,7 L49,11 L45,19 A22,22 0 0,1 48,27 L55,29 L55,35 L48,37 A22,22 0 0,1 45,45 L49,53 L45,57 L37,53 A22,22 0 0,1 29,56 L27,62 L21,62 L19,56 A22,22 0 0,1 11,53 L3,57 L-1,53 L3,45 A22,22 0 0,1 0,37 L-7,35 L-7,29 L0,27 A22,22 0 0,1 3,19 L-1,11 L3,7 L11,11 A22,22 0 0,1 19,8 Z";

    return (
        <div className="relative w-full max-w-4xl mx-auto aspect-square lg:aspect-video flex items-center justify-center bg-blueprint-gray/30 rounded-3xl border border-slate-200 overflow-hidden shadow-2xl">
            {/* 1. Blueprint Grid Background */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

            {/* 2. Connection Lines (Circuit Board Style) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                    <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
                        <circle cx="2" cy="2" r="2" fill="#CBD5E1" />
                    </marker>
                </defs>
                {satellites.map((sat, i) => (
                    <line
                        key={`link-${i}`}
                        x1="50%" y1="50%"
                        x2={i === 0 || i === 2 ? "20%" : "80%"}
                        y2={i === 0 || i === 1 ? "20%" : "80%"}
                        stroke="#CBD5E1"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                        opacity="0.5"
                    />
                ))}
            </svg>

            {/* 3. The Kinetic SVG Stage */}
            <svg viewBox="0 0 500 500" className="relative w-full h-full max-w-[600px] z-10">
                <defs>
                    {/* Engineering Glow */}
                    <filter id="mesh-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    {/* Spark Burst Gradient */}
                    <radialGradient id="spark-gradient">
                        <stop offset="0%" stopColor="#D97706" stopOpacity="1" />
                        <stop offset="50%" stopColor="#D97706" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* --- CENTRAL GEAR (The Hub) --- */}
                {/* Rotates faster when meshed (Stage 2) */}
                <g
                    className="origin-center"
                    style={{
                        animation: `spin-center ${stage === 2 ? '4s' : '12s'} linear infinite`
                    }}
                >
                    {/* Main Gear Body */}
                    <path
                        d={gearPath}
                        transform="translate(175, 175) scale(2.5)"
                        fill="white"
                        stroke={stage === 2 ? "#D97706" : "#1E4E9B"}
                        strokeWidth="1.5"
                        filter={stage === 2 ? "url(#mesh-glow)" : ""}
                        className="transition-colors duration-500"
                    />

                    {/* Inner Hub Circle */}
                    <circle cx="250" cy="250" r="75" fill="white" stroke="#1E4E9B" strokeWidth="2" />

                    {/* Hub Text */}
                    <text x="250" y="240" textAnchor="middle" className="text-[10px] font-mono fill-precision-blue font-bold tracking-[0.3em]">TRIGONAL</text>
                    <text x="250" y="270" textAnchor="middle" className="text-4xl font-black italic fill-execution-orange" style={{ fontFamily: 'var(--font-heading)' }}>FIRE</text>
                </g>

                {/* --- SATELLITE GEARS --- */}
                {satellites.map((sat, i) => {
                    const isActive = i === activeSat;
                    // Determine Position based on stage
                    let currentX = sat.x;
                    let currentY = sat.y;

                    if (isActive) {
                        if (stage === 1 || stage === 2) { // Gliding In or Meshed
                            currentX = sat.targetX;
                            currentY = sat.targetY;
                        }
                    }

                    return (
                        <g
                            key={sat.id}
                            className="transition-all duration-1000 ease-in-out"
                            style={{
                                transform: `translate(${currentX}px, ${currentY}px)`,
                            }}
                        >
                            {/* Rotation Wrapper */}
                            <g className={`origin-center ${i % 2 === 0 ? 'animate-spin-reverse' : 'animate-spin-normal'}`} style={{ transformOrigin: '0px 0px' }}>
                                <path
                                    d={gearPath}
                                    transform="translate(-40, -40) scale(1.3)"
                                    fill={isActive && stage === 2 ? "#FFF7ED" : "white"}
                                    stroke={isActive ? "#D97706" : "#1E4E9B"}
                                    strokeWidth="1.5"
                                />
                                <circle r="25" fill="white" stroke={isActive ? "#D97706" : "#1E4E9B"} strokeWidth="1" />
                                <text y="8" textAnchor="middle" className="text-xl font-black fill-slate-800">
                                    {sat.id}
                                </text>
                            </g>
                        </g>
                    );
                })}

                {/* --- BLUEPRINT SPARK (Only when meshed) --- */}
                <g
                    className={`transition-opacity duration-300 ${stage === 2 ? 'opacity-100' : 'opacity-0'}`}
                    transform={`translate(${satellites[activeSat].targetX + (250 - satellites[activeSat].targetX) / 2}, ${satellites[activeSat].targetY + (250 - satellites[activeSat].targetY) / 2})`}
                >
                    <circle r="15" fill="url(#spark-gradient)" className="animate-ping" />
                    <circle r="5" fill="#D97706" />
                </g>

            </svg>

            {/* Labels overlay */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-sm font-mono text-precision-blue uppercase tracking-widest bg-white/80 inline-block px-4 py-1 rounded-full backdrop-blur-sm border border-slate-200">
                    System Status: {stage === 2 ? <span className="text-execution-orange font-bold animate-pulse">SYNCHRONIZED</span> : <span className="text-slate-400">IDLE</span>}
                </p>
            </div>

            <style jsx>{`
                @keyframes spin-center { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-normal { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
                
                .animate-spin-normal { animation: spin-normal 10s linear infinite; }
                .animate-spin-reverse { animation: spin-reverse 10s linear infinite; }
            `}</style>
        </div>
    );
};

export default KineticIntegrityEngine;
