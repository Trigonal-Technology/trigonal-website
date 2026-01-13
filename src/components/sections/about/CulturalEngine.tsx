"use client";
import React from 'react';

const CulturalEngine = () => {
    const gears = [
        { id: 'F', label: 'ocus', x: 100, y: 100, rotation: 'normal' },
        { id: 'I', label: 'ntegrity', x: 400, y: 100, rotation: 'reverse' },
        { id: 'R', label: 'espect', x: 100, y: 400, rotation: 'reverse' },
        { id: 'E', label: 'xecution', x: 400, y: 400, rotation: 'normal' },
    ];

    // Helper to create a precise engineering gear path
    const gearPath = "M25,2 L29,2 L31,8 A22,22 0 0,1 39,11 L45,7 L49,11 L45,19 A22,22 0 0,1 48,27 L55,29 L55,35 L48,37 A22,22 0 0,1 45,45 L49,53 L45,57 L37,53 A22,22 0 0,1 29,56 L27,62 L21,62 L19,56 A22,22 0 0,1 11,53 L3,57 L-1,53 L3,45 A22,22 0 0,1 0,37 L-7,35 L-7,29 L0,27 A22,22 0 0,1 3,19 L-1,11 L3,7 L11,11 A22,22 0 0,1 19,8 Z";

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 p-12 bg-blueprint-gray rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
            {/* Animated Blueprint Grid Background */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-20 animate-pulse pointer-events-none" />

            {/* LEFT SIDE: BUILD Principles List */}
            <div className="lg:w-1/3 z-10 space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">The Cultural Code</h2>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-precision-blue font-bold">We BUILD with FIRE</p>
                </div>

                <div className="space-y-4">
                    {[
                        { t: 'B', title: 'Bravery', d: 'Courage to tackle complex health challenges' },
                        { t: 'U', title: 'Unity', d: 'Collaborative, cross-functional teams' },
                        { t: 'I', title: 'Integrity', d: 'Honest engineering, no shortcuts' },
                        { t: 'L', title: 'Leadership', d: 'Taking ownership of outcomes' },
                        { t: 'D', title: 'Discipline', d: 'Consistent, reliable delivery' },
                    ].map((item) => (
                        <div key={item.t} className="flex items-center gap-4 group">
                            <div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center font-bold text-precision-blue shadow-sm group-hover:border-execution-orange transition-colors">
                                {item.t}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-800 leading-tight">{item.title}</p>
                                <p className="text-[11px] text-slate-500 font-medium">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE: The Interactive Gearbox */}
            <div className="lg:w-2/3 relative flex items-center justify-center">
                <svg viewBox="0 0 500 500" className="w-full max-w-[600px] h-auto drop-shadow-2xl">
                    <defs>
                        <filter id="gear-glow">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Central Master Gear (FIRE) */}
                    <g className="animate-spin-slow origin-center">
                        <path
                            d={gearPath}
                            transform="translate(198, 198) scale(2.2)"
                            fill="white"
                            stroke="#D97706"
                            strokeWidth="1.5"
                            filter="url(#gear-glow)"
                        />
                        <circle cx="250" cy="250" r="65" fill="white" stroke="#D97706" strokeWidth="3" />

                        {/* Central Flame Icon */}
                        <g transform="translate(225, 215) scale(1.8)">
                            <path
                                d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3 0-1.25.75-2 1.5-3-1.5 0-3 1-3 3 0 .75.5 1 1 1.5-.5.5-1 1.5-1 2.5a2.5 2.5 0 0 0 2 2.5z M12 3c-1.2 0-2.4.6-3 1.8A7 7 0 0 0 13 13a4 4 0 0 1-4-4c0-4.5 3-9 3-9s3 4.5 3 9c0 1.1-.3 2.1-.8 3a7 7 0 0 0 4.8-6.2c-.6-1.2-1.8-1.8-3-1.8z"
                                fill="#D97706"
                                className="animate-pulse"
                            />
                        </g>

                        <text x="250" y="275" textAnchor="middle" className="text-[10px] font-mono fill-precision-blue font-black tracking-widest">FIRE</text>
                    </g>

                    {/* Peripheral Value Gears */}
                    {gears.map((g, i) => (
                        <g key={i} className={`origin-center ${g.rotation === 'normal' ? 'animate-spin-normal' : 'animate-spin-reverse'}`} style={{ transformOrigin: `${g.x}px ${g.y}px` }}>
                            <path
                                d={gearPath}
                                transform={`translate(${g.x - 56}, ${g.y - 56}) scale(1.9)`}
                                fill="white"
                                stroke="#1E4E9B"
                                strokeWidth="1"
                                className="opacity-90"
                            />
                            <circle cx={g.x} cy={g.y} r="38" fill="white" stroke="#1E4E9B" strokeWidth="2" />
                            <text x={g.x} y={g.y + 10} textAnchor="middle" className="text-3xl font-black">
                                <tspan fill="#D97706">{g.id}</tspan>
                                <tspan fill="#1e293b" className="text-xs font-bold lowercase ml-1">{g.label}</tspan>
                            </text>
                        </g>
                    ))}

                    {/* Connective "Mesh" Circles */}
                    <circle cx="250" cy="250" r="200" fill="none" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="5,10" className="opacity-40" />
                </svg>
            </div>

            <style jsx>{`
        .animate-spin-slow { animation: gear-rotate 25s linear infinite; }
        .animate-spin-normal { animation: gear-rotate 15s linear infinite; }
        .animate-spin-reverse { animation: gear-rotate-rev 15s linear infinite; }
        
        @keyframes gear-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gear-rotate-rev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
        </div>
    );
};

export default CulturalEngine;