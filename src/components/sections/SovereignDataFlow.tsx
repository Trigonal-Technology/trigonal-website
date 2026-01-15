'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Smartphone, Activity, GitFork, Database, Building2 } from 'lucide-react';
import * as d3 from 'd3';
import { cn } from '@/lib/utils';

// Types for reusability
export interface FlowNode {
    id: string;
    label: string;
    sub?: string;
    color: string;
    icon?: React.ElementType;
    type: string;
    tech?: string;
    desc?: string;
    x?: number;
    y?: number;
    fx?: number | null;
    fy?: number | null;
}

export interface FlowLink {
    source: string;
    target: string;
    protocol: string;
}

const defaultNodes: FlowNode[] = [
    { id: "hospital", label: "Hospital", sub: "Clinical Source", color: "#10B981", icon: Activity, type: "CLINICAL" },
    { id: "registry", label: "Registry", sub: "National Archive", color: "#D97706", icon: Database, type: "GOV" },
    { id: "lab", label: "Lab", sub: "Diagnostics", color: "#1E4E9B", icon: Smartphone, type: "DIAGNOSTIC" },
    { id: "insurance", label: "Insurance", sub: "Claims Engine", color: "#EF4444", icon: Building2, type: "FISCAL" },
    { id: "spine", label: "OpenHIE Spine", sub: "Interoperability", color: "#8B5CF6", icon: GitFork, type: "CORE" }
];

const defaultLinks: FlowLink[] = [
    { source: "hospital", target: "spine", protocol: "FHIR_JSON" },
    { source: "lab", target: "spine", protocol: "ASTM_FRAME" },
    { source: "spine", target: "registry", protocol: "ADX_V2" },
    { source: "spine", target: "insurance", protocol: "REST_API" },
];

interface SovereignDataFlowProps {
    nodes?: FlowNode[];
    links?: FlowLink[];
    height?: string;
    title?: string;
    className?: string;
}

export function SovereignDataFlow({
    nodes = defaultNodes,
    links = defaultLinks,
    height = "600px",
    title = "MAXIMIZE_ARCHITECTURE",
    className
}: SovereignDataFlowProps) {
    const [isMaximized, setIsMaximized] = useState(false);
    const [hoveredNode, setHoveredNode] = useState<any>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dataPackets, setDataPackets] = useState<any[]>([]);

    useEffect(() => {
        if (!svgRef.current || !wrapperRef.current) return;

        let { width, height: rectHeight } = wrapperRef.current.getBoundingClientRect();
        if (width === 0) width = 800;
        if (rectHeight === 0) rectHeight = 600;

        const svg = d3.select(svgRef.current);
        svg.selectAll(".sim-layer").remove();

        const container = svg.append("g").attr("class", "sim-layer");

        const simNodes = nodes.map(n => ({ ...n }));
        const simLinks = links.map(l => ({ ...l }));

        const simulation = d3.forceSimulation(simNodes)
            .force("link", d3.forceLink(simLinks).id((d: any) => d.id).distance(isMaximized ? 280 : 180))
            .force("charge", d3.forceManyBody().strength(isMaximized ? -1800 : -1000))
            .force("center", d3.forceCenter(width / 2, rectHeight / 2))
            .force("collide", d3.forceCollide().radius(isMaximized ? 110 : 90));

        const link = container.append("g")
            .selectAll("line")
            .data(simLinks)
            .join("line")
            .attr("stroke", "#94a3b8")
            .attr("stroke-opacity", 0.3)
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", "4,4")
            .attr("marker-end", "url(#arrowhead)");

        const nodeGroup = container.append("g")
            .selectAll("g")
            .data(simNodes)
            .join("g")
            .call(d3.drag<any, any>()
                .on("start", (event, d) => {
                    if (!event.active) simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on("drag", (event, d) => {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on("end", (event, d) => {
                    if (!event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                }));

        nodeGroup.append("rect")
            .attr("width", 160)
            .attr("height", 60)
            .attr("x", -80)
            .attr("y", -30)
            .attr("rx", 12)
            .attr("fill", (d: any) => d.id === "spine" ? "#1E4E9B" : "#0F172A")
            .attr("stroke", "#334155")
            .attr("stroke-width", 2)
            .style("cursor", "grab");

        nodeGroup.append("text")
            .text((d: any) => d.label)
            .attr("text-anchor", "middle")
            .attr("dy", "-0.2em")
            .attr("fill", "white")
            .style("font-family", "JetBrains Mono, monospace")
            .style("font-size", "14px")
            .style("font-weight", "bold");

        nodeGroup.append("text")
            .text((d: any) => d.sub || d.type)
            .attr("text-anchor", "middle")
            .attr("dy", "1.2em")
            .attr("fill", "#94a3b8")
            .style("font-family", "JetBrains Mono, monospace")
            .style("font-size", "10px");

        nodeGroup
            .on("mouseenter", (event, d) => {
                setHoveredNode({ ...d, x: event.clientX, y: event.clientY });
                d3.select(event.currentTarget).select("rect").attr("stroke", d.color).attr("stroke-width", 3);
            })
            .on("mouseleave", (event, d) => {
                setHoveredNode(null);
                d3.select(event.currentTarget).select("rect").attr("stroke", "#334155").attr("stroke-width", 2);
            });

        simulation.on("tick", () => {
            link
                .attr("x1", (d: any) => d.source.x)
                .attr("y1", (d: any) => d.source.y)
                .attr("x2", (d: any) => d.target.x)
                .attr("y2", (d: any) => d.target.y);

            nodeGroup.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
        });

        const packetInterval = setInterval(() => {
            if (simLinks.length === 0) return;
            const randomLink = simLinks[Math.floor(Math.random() * simLinks.length)];
            const newPacket = {
                id: Math.random().toString(),
                link: randomLink,
                progress: 0,
                protocol: randomLink.protocol
            };
            setDataPackets(prev => [...prev.slice(-15), newPacket]);
        }, 1500);

        return () => {
            simulation.stop();
            clearInterval(packetInterval);
        };
    }, [isMaximized, nodes, links]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDataPackets(prev => prev
                .map(p => ({ ...p, progress: p.progress + 0.015 }))
                .filter(p => p.progress < 1)
            );
        }, 32);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={wrapperRef} className={cn(
            "relative w-full overflow-hidden transition-all duration-500 bg-white/50 backdrop-blur-sm shadow-xl border border-slate-200",
            isMaximized ? "fixed inset-0 z-[100] bg-white" : cn("mb-12 rounded-2xl", className)
        )} style={{ height: isMaximized ? '100vh' : height }}>

            <div className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: 'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            {!isMaximized && (
                <button
                    onClick={() => setIsMaximized(true)}
                    className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full border border-slate-700 shadow-xl hover:bg-slate-800 transition-colors z-20 group"
                >
                    <Maximize2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono font-bold tracking-widest">{title}</span>
                </button>
            )}

            {isMaximized && (
                <button
                    onClick={() => setIsMaximized(false)}
                    className="absolute top-6 right-8 flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full border border-slate-700 shadow-xl hover:bg-red-900 transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                    <span className="text-xs font-mono font-bold">CLOSE_SIMULATION</span>
                </button>
            )}

            <svg ref={svgRef} className="w-full h-full overflow-visible">
                <defs>
                    <filter id="packetGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="25" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" className="fill-slate-300" />
                    </marker>
                </defs>

                <g className="packet-layer">
                    <AnimatePresence>
                        {dataPackets.map(packet => {
                            const from = packet.link.source;
                            const to = packet.link.target;
                            if (!from || !to || from.x === undefined || to.x === undefined) return null;
                            const x = from.x + (to.x - from.x) * packet.progress;
                            const y = from.y + (to.y - from.y) * packet.progress;

                            return (
                                <g key={packet.id} transform={`translate(${x},${y})`}>
                                    {/* Hero Style: Pulse Glow */}
                                    <motion.circle
                                        r="6"
                                        className="fill-precision-blue opacity-20"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [1, 2, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                    {/* Hero Style: Core with Glow Filter */}
                                    <motion.circle
                                        r="3"
                                        className="fill-precision-blue"
                                        filter="url(#packetGlow)"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                    {/* Hero Style: Monospace Label */}
                                    <motion.text
                                        y="-12"
                                        textAnchor="middle"
                                        className="fill-slate-600 font-mono text-[10px] font-bold"
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
                </g>
            </svg>

            {/* Global Hover Card */}
            <AnimatePresence>
                {hoveredNode && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="fixed z-[9999] bg-slate-900 text-white p-6 rounded-2xl shadow-2xl border-l-4 border-precision-blue pointer-events-none w-72 backdrop-blur-md"
                        style={{ left: hoveredNode.x + 20, top: hoveredNode.y - 20 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-slate-800">
                                {hoveredNode.icon && <hoveredNode.icon className="w-6 h-6" style={{ color: hoveredNode.color }} />}
                            </div>
                            <div>
                                <div className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                                    {hoveredNode.type}
                                </div>
                                <div className="font-bold text-lg leading-tight">{hoveredNode.label}</div>
                            </div>
                        </div>
                        {hoveredNode.desc && <p className="text-xs text-slate-400 mb-4 leading-relaxed">{hoveredNode.desc}</p>}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
