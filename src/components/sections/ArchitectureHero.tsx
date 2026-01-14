'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Activity, Smartphone, GitFork, Building2, Globe, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

// Node definitions based on OpenHIE architecture
const architectureNodes = [
    // Layer 1: Point of Service (Sources)
    {
        id: 'nidanehr',
        x: 15,
        y: 30,
        icon: Activity,
        label: 'NidanEMR',
        domain: 'Point of Service',
        component: 'Electronic Medical Record',
        standard: 'HL7 FHIR R4',
        integrity: 'Validated for high-throughput sovereign deployments.',
        color: '#1E4E9B',
        layer: 'source'
    },
    {
        id: 'labbridge',
        x: 15,
        y: 50,
        icon: FileText,
        label: 'LabBridge',
        domain: 'Laboratory Service',
        component: 'LIS Integration Middleware',
        standard: 'ASTM E1381 / HL7 v2.x',
        integrity: 'Real-time analyzer synchronization with zero data loss.',
        color: '#D97706',
        layer: 'source'
    },
    {
        id: 'muzima',
        x: 15,
        y: 70,
        icon: Smartphone,
        label: 'Muzima',
        domain: 'Community Health',
        component: 'Offline-First Mobile App',
        standard: 'OpenMRS REST API',
        integrity: 'Designed for zero-connectivity rural deployments.',
        color: '#10B981',
        layer: 'source'
    },
    
    // Layer 2: Interoperability Layer (The Spine)
    {
        id: 'spine',
        x: 50,
        y: 50,
        icon: GitFork,
        label: 'The Interoperability Spine',
        domain: 'Interoperability Layer',
        component: 'OpenHIE Mediator',
        standard: 'HL7 FHIR R4 / OpenHIE',
        integrity: 'Enterprise-grade message routing with audit trail compliance.',
        color: '#8B5CF6',
        layer: 'spine',
        isPrimary: true
    },
    
    // Layer 3: Business & Registry Services (Destinations)
    {
        id: 'shr',
        x: 85,
        y: 30,
        icon: Database,
        label: 'Shared Health Record',
        domain: 'Registry Service',
        component: 'Client Registry',
        standard: 'HL7 FHIR R4',
        integrity: 'Master Patient Index with de-duplication logic.',
        color: '#1E4E9B',
        layer: 'destination'
    },
    {
        id: 'odoo',
        x: 85,
        y: 50,
        icon: Building2,
        label: 'Odoo ERP',
        domain: 'Finance & Insurance',
        component: 'Hospital ERP',
        standard: 'Odoo 18 API',
        integrity: 'Real-time billing synchronization preventing revenue leakage.',
        color: '#D97706',
        layer: 'destination'
    },
    {
        id: 'registry',
        x: 85,
        y: 70,
        icon: Globe,
        label: 'National Registry',
        domain: 'Public Health',
        component: 'DHIS2 Integration',
        standard: 'DHIS2 API / FHIR',
        integrity: 'Aggregate reporting for national health surveillance.',
        color: '#10B981',
        layer: 'destination'
    }
];

// Connection paths for data flow
const connections = [
    // From sources to spine
    { from: 'nidanehr', to: 'spine', protocol: 'FHIR_JSON' },
    { from: 'labbridge', to: 'spine', protocol: 'ASTM_FRAME' },
    { from: 'muzima', to: 'spine', protocol: 'HL7_V2' },
    
    // From spine to destinations
    { from: 'spine', to: 'shr', protocol: 'FHIR_JSON' },
    { from: 'spine', to: 'odoo', protocol: 'REST_API' },
    { from: 'spine', to: 'registry', protocol: 'FHIR_JSON' }
];

interface DataPacket {
    id: string;
    fromNode: string;
    toNode: string;
    protocol: string;
    progress: number;
}

export function ArchitectureHero() {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const [dataPackets, setDataPackets] = useState<DataPacket[]>([]);

    // Generate data packets continuously
    useEffect(() => {
        const interval = setInterval(() => {
            const randomConnection = connections[Math.floor(Math.random() * connections.length)];
            const newPacket: DataPacket = {
                id: `packet-${Date.now()}-${Math.random()}`,
                fromNode: randomConnection.from,
                toNode: randomConnection.to,
                protocol: randomConnection.protocol,
                progress: 0
            };
            
            setDataPackets(prev => [...prev, newPacket]);
        }, 2000); // New packet every 2 seconds

        return () => clearInterval(interval);
    }, []);

    // Animate packets
    useEffect(() => {
        const interval = setInterval(() => {
            setDataPackets(prev => 
                prev
                    .map(packet => ({ ...packet, progress: packet.progress + 0.02 }))
                    .filter(packet => packet.progress < 1)
            );
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Get node position
    const getNodePosition = (nodeId: string) => {
        const node = architectureNodes.find(n => n.id === nodeId);
        return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
    };

    // Calculate packet position
    const getPacketPosition = (packet: DataPacket) => {
        const from = getNodePosition(packet.fromNode);
        const to = getNodePosition(packet.toNode);
        const x = from.x + (to.x - from.x) * packet.progress;
        const y = from.y + (to.y - from.y) * packet.progress;
        return { x, y };
    };

    const activeNodeData = architectureNodes.find(n => n.id === activeNode);

    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white transition-colors overflow-hidden">
            {/* Blueprint Grid Background */}
            <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(226, 232, 240, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Dark mode neural pulse overlay */}
            <div className="absolute inset-0 opacity-00 pointer-events-none transition-opacity">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 30% 40%, rgba(30, 78, 155, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 70% 60%, rgba(217, 119, 6, 0.1) 0%, transparent 50%)
                        `
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold font-mono text-slate-900 mb-4">
                        The OpenHIE <span className="text-precision-blue">Architecture</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Real-time data flow visualization of our sovereign health infrastructure. 
                        Hover over nodes to inspect technical specifications.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4 text-sm font-mono text-slate-500">
                        <span className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#1E4E9B]" />
                            Clinical
                        </span>
                        <span className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#D97706]" />
                            Laboratory
                        </span>
                        <span className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                            Community
                        </span>
                        <span className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
                            Interoperability
                        </span>
                    </div>
                </motion.div>

                {/* SVG Data Flow Canvas */}
                <div className="relative w-full h-[600px] bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl">
                    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            {/* Glow filter for dark mode */}
                            <filter id="nodeGlow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            
                            {/* Arrow marker */}
                            <marker
                                id="arrowhead"
                                markerWidth="10"
                                markerHeight="7"
                                refX="9"
                                refY="3.5"
                                orient="auto"
                            >
                                <polygon
                                    points="0 0, 10 3.5, 0 7"
                                    className="fill-slate-300"
                                />
                            </marker>
                        </defs>

                        {/* Connection Lines */}
                        {connections.map((conn, idx) => {
                            const from = getNodePosition(conn.from);
                            const to = getNodePosition(conn.to);
                            return (
                                <motion.line
                                    key={`conn-${idx}`}
                                    x1={from.x}
                                    y1={from.y}
                                    x2={to.x}
                                    y2={to.y}
                                    className="stroke-slate-300"
                                    strokeWidth="0.2"
                                    strokeDasharray="1,1"
                                    markerEnd="url(#arrowhead)"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: idx * 0.1 }}
                                />
                            );
                        })}

                        {/* Data Packets */}
                        <AnimatePresence>
                            {dataPackets.map(packet => {
                                const pos = getPacketPosition(packet);
                                return (
                                    <g key={packet.id}>
                                        {/* Packet glow */}
                                        <motion.circle
                                            cx={pos.x}
                                            cy={pos.y}
                                            r="0.8"
                                            className="fill-execution-orange opacity-20"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        />
                                        {/* Packet core */}
                                        <motion.circle
                                            cx={pos.x}
                                            cy={pos.y}
                                            r="0.4"
                                            className="fill-execution-orange"
                                            filter="url(#nodeGlow)"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        />
                                        {/* Packet label */}
                                        <motion.text
                                            x={pos.x}
                                            y={pos.y - 1.5}
                                            className="fill-slate-600 font-mono text-[2px] font-bold"
                                            textAnchor="middle"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.8 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            [{packet.protocol}]
                                        </motion.text>
                                    </g>
                                );
                            })}
                        </AnimatePresence>

                        {/* Nodes */}
                        {architectureNodes.map((node, idx) => {
                            const Icon = node.icon;
                            const isActive = activeNode === node.id;
                            
                            return (
                                <motion.g
                                    key={node.id}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ 
                                        opacity: 1, 
                                        scale: isActive ? 1.1 : 1 
                                    }}
                                    transition={{ 
                                        duration: 0.3,
                                        delay: idx * 0.1
                                    }}
                                    onMouseEnter={() => setActiveNode(node.id)}
                                    onMouseLeave={() => setActiveNode(null)}
                                    className="cursor-pointer"
                                >
                                    {/* Node glow (dark mode) */}
                                    {node.isPrimary && (
                                        <motion.circle
                                            cx={node.x}
                                            cy={node.y}
                                            r="4"
                                            className="fill-none stroke-purple-500 opacity-0"
                                            strokeWidth="0.5"
                                            animate={{
                                                r: [4, 5, 4],
                                                opacity: [0.3, 0.1, 0.3]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    )}
                                    
                                    {/* Node background */}
                                    <motion.circle
                                        cx={node.x}
                                        cy={node.y}
                                        r={node.isPrimary ? 3.5 : 2.5}
                                        className={cn(
                                            "fill-white",
                                            "stroke-slate-300"
                                        )}
                                        strokeWidth={isActive ? "0.3" : "0.15"}
                                        filter={isActive ? "url(#nodeGlow)" : undefined}
                                    />
                                    
                                    {/* Active ping effect */}
                                    {isActive && (
                                        <motion.circle
                                            cx={node.x}
                                            cy={node.y}
                                            r={node.isPrimary ? 3.5 : 2.5}
                                            className="fill-none stroke-precision-blue"
                                            strokeWidth="0.2"
                                            initial={{ scale: 1, opacity: 0.8 }}
                                            animate={{ scale: 1.5, opacity: 0 }}
                                            transition={{ duration: 0.6, repeat: Infinity }}
                                        />
                                    )}
                                    
                                    {/* Node label */}
                                    <text
                                        x={node.x}
                                        y={node.y + (node.isPrimary ? 5.5 : 4.5)}
                                        className="fill-slate-700 font-mono text-[2px] font-bold"
                                        textAnchor="middle"
                                    >
                                        {node.label}
                                    </text>
                                </motion.g>
                            );
                        })}
                    </svg>

                    {/* Technical DNA Overlay */}
                    <AnimatePresence>
                        {activeNodeData && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md"
                            >
                                <div className="bg-slate-900/95/95 backdrop-blur-md border border-precision-blue/50 rounded-lg p-6 shadow-2xl">
                                    <div className="flex items-start gap-4">
                                        <div 
                                            className="w-12 h-12 rounded-lg flex items-center justify-center"
                                            style={{ 
                                                backgroundColor: `${activeNodeData.color}20`,
                                                borderColor: activeNodeData.color,
                                                borderWidth: '2px'
                                            }}
                                        >
                                            <activeNodeData.icon 
                                                className="w-6 h-6" 
                                                style={{ color: activeNodeData.color }}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-mono text-lg font-bold text-white mb-1">
                                                {activeNodeData.label}
                                            </h3>
                                            <p className="text-xs text-slate-400 mb-3">{activeNodeData.domain}</p>
                                            
                                            <div className="space-y-2 text-sm">
                                                <div>
                                                    <span className="font-mono text-precision-blue">COMPONENT:</span>
                                                    <span className="text-slate-300 ml-2">{activeNodeData.component}</span>
                                                </div>
                                                <div>
                                                    <span className="font-mono text-execution-orange">STANDARD:</span>
                                                    <span className="text-slate-300 ml-2">{activeNodeData.standard}</span>
                                                </div>
                                                <div className="pt-2 border-t border-slate-700">
                                                    <span className="font-mono text-emerald-400">INTEGRITY:</span>
                                                    <p className="text-slate-400 mt-1 text-xs italic">{activeNodeData.integrity}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { label: 'Active Nodes', value: architectureNodes.length },
                        { label: 'Data Streams', value: connections.length },
                        { label: 'Protocols', value: '4+' },
                        { label: 'Uptime', value: '99.9%' }
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-slate-200 rounded-lg p-4 text-center"
                        >
                            <div className="text-2xl font-bold font-mono text-precision-blue">
                                {stat.value}
                            </div>
                            <div className="text-xs text-slate-600 mt-1 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
