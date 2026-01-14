'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Activity, GitFork, Database, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Node definitions for Sovereign Data Flow
const sovereignNodes = [
    {
        id: 'mhealth',
        x: 15,
        y: 50,
        icon: Smartphone,
        label: 'mHealth',
        sublabel: 'Muzima/Intelehealth',
        color: '#10B981',
        description: 'Offline-first mobile health for rural deployment'
    },
    {
        id: 'emr',
        x: 35,
        y: 30,
        icon: Activity,
        label: 'EMR',
        sublabel: 'OpenMRS/Bahmni',
        color: '#1E4E9B',
        description: 'Clinical workflows and patient longitudinal tracking'
    },
    {
        id: 'spine',
        x: 50,
        y: 50,
        icon: GitFork,
        label: 'OpenHIE Spine',
        sublabel: 'HL7 FHIR R4',
        color: '#8B5CF6',
        description: 'National interoperability layer',
        isPrimary: true
    },
    {
        id: 'dhis2',
        x: 65,
        y: 30,
        icon: Database,
        label: 'DHIS2',
        sublabel: 'Aggregate Reporting',
        color: '#D97706',
        description: 'Public health surveillance and analytics'
    },
    {
        id: 'openimis',
        x: 85,
        y: 50,
        icon: Building2,
        label: 'OpenIMIS',
        sublabel: 'Health Insurance',
        color: '#EF4444',
        description: 'Claims management and beneficiary registry'
    }
];

// Connection paths
const dataFlowPaths = [
    { from: 'mhealth', to: 'spine' },
    { from: 'emr', to: 'spine' },
    { from: 'spine', to: 'dhis2' },
    { from: 'spine', to: 'openimis' }
];

interface DataPacket {
    id: string;
    fromNode: string;
    toNode: string;
    progress: number;
}

export function SovereignDataFlow() {
    const [dataPackets, setDataPackets] = useState<DataPacket[]>([]);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    // Generate data packets
    useEffect(() => {
        const interval = setInterval(() => {
            const randomPath = dataFlowPaths[Math.floor(Math.random() * dataFlowPaths.length)];
            const newPacket: DataPacket = {
                id: `packet-${Date.now()}-${Math.random()}`,
                fromNode: randomPath.from,
                toNode: randomPath.to,
                progress: 0
            };
            
            setDataPackets(prev => [...prev, newPacket]);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    // Animate packets
    useEffect(() => {
        const interval = setInterval(() => {
            setDataPackets(prev => 
                prev
                    .map(packet => ({ ...packet, progress: packet.progress + 0.015 }))
                    .filter(packet => packet.progress < 1)
            );
        }, 30);

        return () => clearInterval(interval);
    }, []);

    const getNodePosition = (nodeId: string) => {
        const node = sovereignNodes.find(n => n.id === nodeId);
        return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
    };

    const getPacketPosition = (packet: DataPacket) => {
        const from = getNodePosition(packet.fromNode);
        const to = getNodePosition(packet.toNode);
        const x = from.x + (to.x - from.x) * packet.progress;
        const y = from.y + (to.y - from.y) * packet.progress;
        return { x, y };
    };

    const hoveredNodeData = sovereignNodes.find(n => n.id === hoveredNode);

    return (
        <div className="relative w-full h-[500px] bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Blueprint Grid Overlay */}
            <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(226, 232, 240, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                }}
            />

            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <filter id="glow-hero">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <marker
                        id="arrowhead-hero"
                        markerWidth="8"
                        markerHeight="6"
                        refX="7"
                        refY="3"
                        orient="auto"
                    >
                        <polygon
                            points="0 0, 8 3, 0 6"
                            className="fill-slate-300 "
                        />
                    </marker>
                </defs>

                {/* Connection Lines */}
                {dataFlowPaths.map((path, idx) => {
                    const from = getNodePosition(path.from);
                    const to = getNodePosition(path.to);
                    return (
                        <motion.line
                            key={`path-${idx}`}
                            x1={from.x}
                            y1={from.y}
                            x2={to.x}
                            y2={to.y}
                            className="stroke-slate-300"
                            strokeWidth="0.15"
                            strokeDasharray="0.5,0.5"
                            markerEnd="url(#arrowhead-hero)"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: idx * 0.15 }}
                        />
                    );
                })}

                {/* Data Packets */}
                <AnimatePresence>
                    {dataPackets.map(packet => {
                        const pos = getPacketPosition(packet);
                        return (
                            <g key={packet.id}>
                                <motion.circle
                                    cx={pos.x}
                                    cy={pos.y}
                                    r="0.6"
                                    className="fill-execution-orange opacity-20"
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                />
                                <motion.circle
                                    cx={pos.x}
                                    cy={pos.y}
                                    r="0.3"
                                    className="fill-execution-orange"
                                    filter="url(#glow-hero)"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                                {/* Protocol label with solid background chip */}
                                <g>
                                    <motion.rect
                                        x={pos.x - 2.8}
                                        y={pos.y - 2.3}
                                        width="5.6"
                                        height="1.4"
                                        rx="0.3"
                                        className="fill-slate-900 "
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.95 }}
                                        exit={{ opacity: 0 }}
                                    />
                                    <motion.text
                                        x={pos.x}
                                        y={pos.y - 1.3}
                                        className="fill-white  font-mono text-[1.4px] font-bold"
                                        textAnchor="middle"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {packet.protocol}
                                    </motion.text>
                                </g>
                            </g>
                        );
                    })}
                </AnimatePresence>

                {/* Nodes */}
                {sovereignNodes.map((node, idx) => {
                    const isHovered = hoveredNode === node.id;
                    
                    return (
                        <motion.g
                            key={node.id}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                                opacity: 1, 
                                scale: isHovered ? 1.15 : 1 
                            }}
                            transition={{ 
                                duration: 0.3,
                                delay: idx * 0.1
                            }}
                            onMouseEnter={() => setHoveredNode(node.id)}
                            onMouseLeave={() => setHoveredNode(null)}
                            className="cursor-pointer"
                        >
                            {/* Primary node pulse */}
                            {node.isPrimary && (
                                <motion.circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="3"
                                    className="fill-none stroke-purple-500  opacity-0 "
                                    strokeWidth="0.3"
                                    animate={{
                                        r: [3, 4, 3],
                                        opacity: [0.3, 0.1, 0.3]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            )}
                            
                            {/* Node background */}
                            <circle
                                cx={node.x}
                                cy={node.y}
                                r={node.isPrimary ? 2.5 : 1.8}
                                className={cn(
                                    "fill-white ",
                                    "stroke-slate-300"
                                )}
                                strokeWidth={isHovered ? "0.25" : "0.12"}
                                filter={isHovered ? "url(#glow-hero)" : undefined}
                            />
                            
                            {/* Hover ping */}
                            {isHovered && (
                                <motion.circle
                                    cx={node.x}
                                    cy={node.y}
                                    r={node.isPrimary ? 2.5 : 1.8}
                                    className="fill-none stroke-precision-blue"
                                    strokeWidth="0.15"
                                    initial={{ scale: 1, opacity: 0.8 }}
                                    animate={{ scale: 1.6, opacity: 0 }}
                                    transition={{ duration: 0.6, repeat: Infinity }}
                                />
                            )}
                            
                            {/* Node label with text-shadow for legibility */}
                            <text
                                x={node.x}
                                y={node.y + (node.isPrimary ? 4 : 3.2)}
                                className="fill-slate-900  font-mono text-[1.8px] font-bold"
                                textAnchor="middle"
                                style={{
                                    filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8)) drop-shadow(0 0 2px rgba(0,0,0,0.3))'
                                }}
                            >
                                {node.label}
                            </text>
                            <text
                                x={node.x}
                                y={node.y + (node.isPrimary ? 5.2 : 4.4)}
                                className="fill-slate-700  font-mono text-[1.2px]"
                                textAnchor="middle"
                                style={{
                                    filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.6)) drop-shadow(0 0 1px rgba(0,0,0,0.2))'
                                }}
                            >
                                {node.sublabel}
                            </text>
                        </motion.g>
                    );
                })}
            </svg>

            {/* Node Details Overlay */}
            <AnimatePresence>
                {hoveredNodeData && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/95  backdrop-blur-md border border-precision-blue/50 rounded-lg shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div 
                                className="w-8 h-8 rounded-md flex items-center justify-center"
                                style={{ 
                                    backgroundColor: `${hoveredNodeData.color}20`,
                                    borderColor: hoveredNodeData.color,
                                    borderWidth: '2px'
                                }}
                            >
                                <hoveredNodeData.icon 
                                    className="w-4 h-4" 
                                    style={{ color: hoveredNodeData.color }}
                                />
                            </div>
                            <div>
                                <p className="font-mono text-sm font-bold text-white">
                                    {hoveredNodeData.label}
                                </p>
                                <p className="text-xs text-slate-400">
                                    {hoveredNodeData.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Status Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-white/90  backdrop-blur-sm rounded-full border border-slate-200  shadow-sm">
                <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-mono text-slate-700 ">
                    LIVE DATA FLOW
                </span>
            </div>
        </div>
    );
}
