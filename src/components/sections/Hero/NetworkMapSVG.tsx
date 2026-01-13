"use client";
import { useRef } from 'react';

const NetworkMapSVG = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    return (
        <svg
            ref={svgRef}
            viewBox="0 0 800 500"
            className="w-full h-auto overflow-visible"
            aria-label="Animated technical network map showing data flowing between a hospital, a laboratory, and a national health database via FHIR standards."
        >
            {/* --- Definitions --- */}
            <defs>
                {/* Gradient for the data paths */}
                <linearGradient id="data-flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D97706" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#D97706" stopOpacity="1" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0.4" />
                </linearGradient>

                {/* Glow filter for active nodes */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Arrowhead marker */}
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#D97706" />
                </marker>

                {/* Paths for animation motion */}
                <path id="path-hospital-lab" d="M150,250 C250,250 250,120 400,120" />
                <path id="path-lab-db" d="M500,120 C650,120 650,250 750,250" />
                <path id="path-hospital-db" d="M150,250 C450,450 450,450 750,250" />
            </defs>

            {/* --- Background Grid (Blueprint Effect) --- */}
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#smallGrid)" opacity="0.3" />


            {/* --- The Nodes --- */}
            {/* Hospital Node */}
            <g className="node-group" transform="translate(100, 250)">
                <rect x="-60" y="-45" width="120" height="90" rx="8" fill="white" stroke="#1E4E9B" strokeWidth="3" filter="url(#glow)" />
                <path d="M-20 20 L-20 -20 L0 -35 L20 -20 L20 20 Z" fill="none" stroke="#1E4E9B" strokeWidth="2" />
                <text x="0" y="35" textAnchor="middle" className="font-bold text-sm fill-precision-blue" style={{ fontFamily: 'Inter, sans-serif' }}>HOSPITAL</text>
            </g>

            {/* Laboratory Node */}
            <g className="node-group" transform="translate(450, 120)">
                <rect x="-60" y="-45" width="120" height="90" rx="8" fill="white" stroke="#1E4E9B" strokeWidth="3" filter="url(#glow)" />
                <circle cx="0" cy="-10" r="15" fill="none" stroke="#1E4E9B" strokeWidth="2" />
                <path d="M-5 5 L5 25" stroke="#1E4E9B" strokeWidth="2" />
                <text x="0" y="35" textAnchor="middle" className="font-bold text-sm fill-precision-blue" style={{ fontFamily: 'Inter, sans-serif' }}>LABORATORY</text>
            </g>

            {/* National DB Node */}
            <g className="node-group" transform="translate(750, 250)">
                <g filter="url(#glow)">
                    <ellipse cx="0" cy="-30" rx="50" ry="20" fill="white" stroke="#1E4E9B" strokeWidth="3" />
                    <rect x="-50" y="-30" width="100" height="60" fill="white" stroke="#1E4E9B" strokeWidth="3" />
                    <ellipse cx="0" cy="30" rx="50" ry="20" fill="white" stroke="#1E4E9B" strokeWidth="3" />
                </g>
                <text x="0" y="60" textAnchor="middle" className="font-bold text-sm fill-precision-blue" style={{ fontFamily: 'Inter, sans-serif' }}>NATIONAL DB</text>
            </g>


            {/* --- Data Flow Paths (Static Lines) --- */}
            <path d="M150,250 C250,250 250,120 400,120" stroke="url(#data-flow-gradient)" strokeWidth="3" fill="none" strokeDasharray="8,4" className="animate-pulse-slow" />
            <path d="M500,120 C650,120 650,250 750,250" stroke="url(#data-flow-gradient)" strokeWidth="3" fill="none" strokeDasharray="8,4" className="animate-pulse-slow" />
            <path d="M150,250 C450,450 450,450 750,250" stroke="url(#data-flow-gradient)" strokeWidth="3" fill="none" strokeDasharray="8,4" className="animate-pulse-slow" />


            {/* --- Animated Data Packets --- */}
            {/* Packet 1: Hospital -> Lab */}
            <g>
                <circle r="8" fill="#D97706" filter="url(#glow)">
                    <animateMotion repeatCount="indefinite" dur="4s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                        <mpath href="#path-hospital-lab" />
                    </animateMotion>
                </circle>
                <text fontSize="10" fill="white" fontWeight="bold" textAnchor="middle" dy=".3em">
                    FHIR
                    <animateMotion repeatCount="indefinite" dur="4s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                        <mpath href="#path-hospital-lab" />
                    </animateMotion>
                </text>
            </g>

            {/* Packet 2: Lab -> DB */}
            <g>
                <circle r="8" fill="#D97706" filter="url(#glow)">
                    <animateMotion repeatCount="indefinite" dur="4s" begin="1s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                        <mpath href="#path-lab-db" />
                    </animateMotion>
                </circle>
            </g>

            {/* Packet 3: Hospital -> DB */}
            <g>
                <circle r="8" fill="#D97706" filter="url(#glow)">
                    <animateMotion repeatCount="indefinite" dur="5s" begin="0.5s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                        <mpath href="#path-hospital-db" />
                    </animateMotion>
                </circle>
            </g>

        </svg>
    );
};

export default NetworkMapSVG;
