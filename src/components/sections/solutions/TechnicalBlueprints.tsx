'use client';

import React from 'react';
import { motion } from 'framer-motion';

// LabBridge Blueprint: Hardware → Middleware → Clinical Chart
export function LabBridgeBlueprint() {
    return (
        <svg viewBox="0 0 800 450" className="w-full h-full" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <defs>
                <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#D97706', stopOpacity: 0 }} />
                    <stop offset="50%" style={{ stopColor: '#D97706', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#D97706', stopOpacity: 0 }} />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background Grid */}
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E4E9B" strokeWidth="0.5" opacity="0.1" />
            </pattern>
            <rect width="800" height="450" fill="url(#grid)" />

            {/* Layer 1: Hardware Analyzers */}
            <g>
                <rect x="50" y="150" width="140" height="150" fill="#0A192F" stroke="#1E4E9B" strokeWidth="2" />
                <text x="120" y="180" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">ANALYZERS</text>
                
                {/* Device Icons */}
                <rect x="70" y="200" width="40" height="30" fill="#1E4E9B" opacity="0.3" stroke="#1E4E9B" />
                <text x="90" y="220" fill="#D97706" fontSize="8" textAnchor="middle">CBC</text>
                
                <rect x="130" y="200" width="40" height="30" fill="#1E4E9B" opacity="0.3" stroke="#1E4E9B" />
                <text x="150" y="220" fill="#D97706" fontSize="8" textAnchor="middle">CHEM</text>
                
                <rect x="70" y="250" width="40" height="30" fill="#1E4E9B" opacity="0.3" stroke="#1E4E9B" />
                <text x="90" y="270" fill="#D97706" fontSize="8" textAnchor="middle">PCR</text>
                
                <rect x="130" y="250" width="40" height="30" fill="#1E4E9B" opacity="0.3" stroke="#1E4E9B" />
                <text x="150" y="270" fill="#D97706" fontSize="8" textAnchor="middle">HPLC</text>
            </g>

            {/* Data Flow Arrow 1 */}
            <motion.line
                x1="190" y1="225" x2="280" y2="225"
                stroke="#D97706" strokeWidth="3" strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <polygon points="280,225 270,220 270,230" fill="#D97706" />
            <text x="235" y="215" fill="#D97706" fontSize="8" fontWeight="bold">HL7/ASTM</text>

            {/* Layer 2: Middleware */}
            <g>
                <rect x="290" y="150" width="220" height="150" fill="#0A192F" stroke="#D97706" strokeWidth="3" />
                <text x="400" y="175" fill="#fff" fontSize="11" textAnchor="middle" fontWeight="bold">LABBRIDGE MIDDLEWARE</text>
                
                {/* Processing Nodes */}
                <rect x="310" y="190" width="80" height="25" fill="#D97706" opacity="0.2" stroke="#D97706" />
                <text x="350" y="207" fill="#fff" fontSize="8" textAnchor="middle">Parser</text>
                
                <rect x="410" y="190" width="80" height="25" fill="#D97706" opacity="0.2" stroke="#D97706" />
                <text x="450" y="207" fill="#fff" fontSize="8" textAnchor="middle">Validator</text>
                
                <rect x="310" y="230" width="80" height="25" fill="#D97706" opacity="0.2" stroke="#D97706" />
                <text x="350" y="247" fill="#fff" fontSize="8" textAnchor="middle">Mapper</text>
                
                <rect x="410" y="230" width="80" height="25" fill="#D97706" opacity="0.2" stroke="#D97706" />
                <text x="450" y="247" fill="#fff" fontSize="8" textAnchor="middle">Transmitter</text>
                
                {/* Tech Stack */}
                <text x="400" y="280" fill="#64748b" fontSize="7" textAnchor="middle">Python • Serial/TCP • Redis Queue</text>
            </g>

            {/* Data Flow Arrow 2 */}
            <motion.line
                x1="510" y1="225" x2="600" y2="225"
                stroke="#10B981" strokeWidth="3" strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            />
            <polygon points="600,225 590,220 590,230" fill="#10B981" />
            <text x="555" y="215" fill="#10B981" fontSize="8" fontWeight="bold">FHIR</text>

            {/* Layer 3: Clinical Chart */}
            <g>
                <rect x="610" y="150" width="140" height="150" fill="#0A192F" stroke="#10B981" strokeWidth="2" />
                <text x="680" y="180" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">CLINICAL LIS</text>
                
                {/* Patient Record */}
                <rect x="630" y="200" width="100" height="70" fill="#10B981" opacity="0.1" stroke="#10B981" strokeDasharray="2 2" />
                <text x="680" y="220" fill="#10B981" fontSize="8" textAnchor="middle">Patient Chart</text>
                <text x="680" y="235" fill="#64748b" fontSize="7" textAnchor="middle">Result: AUTO</text>
                <text x="680" y="248" fill="#64748b" fontSize="7" textAnchor="middle">Error: 0%</text>
                <text x="680" y="261" fill="#64748b" fontSize="7" textAnchor="middle">Verified: ✓</text>
            </g>

            {/* Performance Metrics */}
            <g>
                <rect x="50" y="340" width="700" height="80" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                <text x="400" y="360" fill="#0A192F" fontSize="9" textAnchor="middle" fontWeight="bold">PERFORMANCE GUARANTEE</text>
                
                <text x="150" y="385" fill="#1E4E9B" fontSize="8" fontWeight="bold">0% Transcription Error</text>
                <text x="150" y="400" fill="#64748b" fontSize="7">Direct hardware integration</text>
                
                <text x="400" y="385" fill="#D97706" fontSize="8" fontWeight="bold">&lt;2s Processing Time</text>
                <text x="400" y="400" fill="#64748b" fontSize="7">Real-time validation</text>
                
                <text x="650" y="385" fill="#10B981" fontSize="8" fontWeight="bold">ISO 15189 Compliant</text>
                <text x="650" y="400" fill="#64748b" fontSize="7">Global lab standards</text>
            </g>

            {/* Project Badge */}
            <g>
                <rect x="650" y="20" width="130" height="50" fill="#0A192F" stroke="#D97706" strokeWidth="1" />
                <text x="715" y="38" fill="#D97706" fontSize="8" textAnchor="middle" fontWeight="bold">DEPLOYED AT:</text>
                <text x="715" y="52" fill="#fff" fontSize="9" textAnchor="middle">LafiaHMS (Nigeria)</text>
            </g>
        </svg>
    );
}

// Digital Brain Blueprint: AI Processing Layer
export function DigitalBrainBlueprint() {
    return (
        <svg viewBox="0 0 800 450" className="w-full h-full" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#7C3AED" strokeWidth="0.5" opacity="0.1" />
            </pattern>
            <rect width="800" height="450" fill="url(#grid2)" />

            {/* Bottom Layer: Clinical Data Flow */}
            <g>
                <rect x="50" y="300" width="700" height="100" fill="#0A192F" stroke="#64748b" strokeWidth="1" opacity="0.5" />
                <text x="400" y="330" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="bold">CLINICAL DATA LAYER</text>
                
                {/* Data Nodes */}
                {[120, 250, 380, 510, 640].map((x, i) => (
                    <g key={i}>
                        <circle cx={x} cy="360" r="20" fill="#1E4E9B" opacity="0.3" stroke="#1E4E9B" />
                        <text x={x} y="365" fill="#fff" fontSize="7" textAnchor="middle">EMR</text>
                    </g>
                ))}
            </g>

            {/* Middle Layer: AI Processing */}
            <g>
                <rect x="150" y="120" width="500" height="130" fill="#7C3AED" opacity="0.1" stroke="#7C3AED" strokeWidth="2" strokeDasharray="5 5" />
                <text x="400" y="145" fill="#7C3AED" fontSize="11" textAnchor="middle" fontWeight="bold">AI INTELLIGENCE LAYER</text>
                
                {/* Processing Modules */}
                <rect x="180" y="165" width="120" height="60" fill="#0A192F" stroke="#7C3AED" strokeWidth="2" />
                <text x="240" y="185" fill="#7C3AED" fontSize="9" textAnchor="middle" fontWeight="bold">RADIOLOGY AI</text>
                <text x="240" y="200" fill="#94a3b8" fontSize="7" textAnchor="middle">CNN Detection</text>
                <text x="240" y="213" fill="#94a3b8" fontSize="7" textAnchor="middle">Fracture ID: 94%</text>
                
                <rect x="340" y="165" width="120" height="60" fill="#0A192F" stroke="#7C3AED" strokeWidth="2" />
                <text x="400" y="185" fill="#7C3AED" fontSize="9" textAnchor="middle" fontWeight="bold">PREDICTIVE</text>
                <text x="400" y="200" fill="#94a3b8" fontSize="7" textAnchor="middle">Metabase ML</text>
                <text x="400" y="213" fill="#94a3b8" fontSize="7" textAnchor="middle">Outbreak Alerts</text>
                
                <rect x="500" y="165" width="120" height="60" fill="#0A192F" stroke="#7C3AED" strokeWidth="2" />
                <text x="560" y="185" fill="#7C3AED" fontSize="9" textAnchor="middle" fontWeight="bold">NLP ENGINE</text>
                <text x="560" y="200" fill="#94a3b8" fontSize="7" textAnchor="middle">Claim Processing</text>
                <text x="560" y="213" fill="#94a3b8" fontSize="7" textAnchor="middle">Auto-coding ICD</text>
            </g>

            {/* Data Flows from Clinical to AI */}
            {[240, 400, 560].map((x, i) => (
                <motion.line
                    key={i}
                    x1={x} y1="300" x2={x} y2="225"
                    stroke="#7C3AED" strokeWidth="2" strokeDasharray="3 3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                />
            ))}

            {/* Top Layer: Intelligence Output */}
            <g>
                <rect x="250" y="30" width="300" height="60" fill="#7C3AED" stroke="#fff" strokeWidth="2" />
                <text x="400" y="52" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">DECISION INTELLIGENCE</text>
                <text x="400" y="70" fill="#e9d5ff" fontSize="8" textAnchor="middle">Policy Dashboards • Clinical Alerts • Resource Optimization</text>
            </g>

            {/* Connection Arrow */}
            <motion.line
                x1="400" y1="165" x2="400" y2="90"
                stroke="#fff" strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <polygon points="400,90 395,100 405,100" fill="#fff" />

            {/* Tech Stack Badge */}
            <rect x="50" y="30" width="150" height="60" fill="#0A192F" stroke="#7C3AED" strokeWidth="1" />
            <text x="125" y="52" fill="#7C3AED" fontSize="8" textAnchor="middle" fontWeight="bold">TECH STACK</text>
            <text x="125" y="65" fill="#94a3b8" fontSize="7" textAnchor="middle">TensorFlow</text>
            <text x="125" y="78" fill="#94a3b8" fontSize="7" textAnchor="middle">Python ML • CUDA</text>
        </svg>
    );
}

// Interoperable Spine Blueprint: National HIE
export function InteroperableSpineBlueprint() {
    return (
        <svg viewBox="0 0 800 450" className="w-full h-full" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <pattern id="grid3" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E4E9B" strokeWidth="0.5" opacity="0.1" />
            </pattern>
            <rect width="800" height="450" fill="url(#grid3)" />

            {/* Central Spine */}
            <rect x="350" y="50" width="100" height="350" fill="#1E4E9B" opacity="0.1" stroke="#1E4E9B" strokeWidth="2" strokeDasharray="10 5" />
            <text x="400" y="220" fill="#1E4E9B" fontSize="12" textAnchor="middle" fontWeight="bold" transform="rotate(90 400 220)">
                NATIONAL HIE BACKBONE
            </text>

            {/* Clinical Sites */}
            {[
                { x: 100, y: 100, name: 'HOSPITAL A', type: 'OpenMRS' },
                { x: 100, y: 200, name: 'CLINIC B', type: 'DHIS2' },
                { x: 100, y: 300, name: 'LAB C', type: 'OpenELIS' },
                { x: 600, y: 100, name: 'HOSPITAL D', type: 'Bahmni' },
                { x: 600, y: 200, name: 'MOBILE', type: 'Muzima' },
                { x: 600, y: 300, name: 'REGISTRY', type: 'OpenCR' }
            ].map((site, i) => (
                <g key={i}>
                    <rect 
                        x={site.x} y={site.y} width="120" height="50" 
                        fill="#0A192F" stroke="#1E4E9B" strokeWidth="2" 
                    />
                    <text x={site.x + 60} y={site.y + 22} fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">{site.name}</text>
                    <text x={site.x + 60} y={site.y + 37} fill="#D97706" fontSize="7" textAnchor="middle">{site.type}</text>
                    
                    {/* Connection to Spine */}
                    <motion.line
                        x1={site.x < 400 ? site.x + 120 : site.x}
                        y1={site.y + 25}
                        x2={site.x < 400 ? 350 : 450}
                        y2={site.y + 25}
                        stroke="#10B981"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                    />
                </g>
            ))}

            {/* FHIR Resource Labels */}
            <g>
                <rect x="360" y="100" width="80" height="25" fill="#10B981" opacity="0.9" />
                <text x="400" y="115" fill="#fff" fontSize="7" textAnchor="middle" fontWeight="bold">Patient</text>
                
                <rect x="360" y="200" width="80" height="25" fill="#10B981" opacity="0.9" />
                <text x="400" y="215" fill="#fff" fontSize="7" textAnchor="middle" fontWeight="bold">Observation</text>
                
                <rect x="360" y="300" width="80" height="25" fill="#10B981" opacity="0.9" />
                <text x="400" y="315" fill="#fff" fontSize="7" textAnchor="middle" fontWeight="bold">Encounter</text>
            </g>

            {/* Standards Badge */}
            <rect x="300" y="380" width="200" height="50" fill="#0A192F" stroke="#10B981" strokeWidth="2" />
            <text x="400" y="398" fill="#10B981" fontSize="9" textAnchor="middle" fontWeight="bold">STANDARDS COMPLIANCE</text>
            <text x="400" y="413" fill="#94a3b8" fontSize="7" textAnchor="middle">FHIR R4 • OpenHIE • IHE Profiles</text>
            <text x="400" y="425" fill="#94a3b8" fontSize="7" textAnchor="middle">Nepal MoHP Directive 2081</text>
        </svg>
    );
}

// Operations Sync Blueprint: OpenMRS + Odoo
export function OperationsSyncBlueprint() {
    return (
        <svg viewBox="0 0 800 450" className="w-full h-full" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <pattern id="grid4" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#D97706" strokeWidth="0.5" opacity="0.1" />
            </pattern>
            <rect width="800" height="450" fill="url(#grid4)" />

            {/* Left: Clinical Events */}
            <g>
                <rect x="50" y="100" width="250" height="250" fill="#0A192F" stroke="#1E4E9B" strokeWidth="2" />
                <text x="175" y="130" fill="#1E4E9B" fontSize="11" textAnchor="middle" fontWeight="bold">CLINICAL EVENTS</text>
                <text x="175" y="145" fill="#64748b" fontSize="7" textAnchor="middle">(OpenMRS / Bahmni)</text>
                
                {/* Clinical Events List */}
                {[
                    { event: 'DRUG_ORDER', time: '14:32:01', color: '#EF4444' },
                    { event: 'LAB_TEST', time: '14:32:08', color: '#F59E0B' },
                    { event: 'PROCEDURE', time: '14:32:15', color: '#10B981' },
                    { event: 'DIAGNOSIS', time: '14:32:22', color: '#3B82F6' }
                ].map((item, i) => (
                    <g key={i}>
                        <rect x="70" y={170 + i * 40} width="210" height="30" fill={item.color} opacity="0.2" stroke={item.color} />
                        <text x="90" y={188 + i * 40} fill="#fff" fontSize="8" fontWeight="bold">{item.event}</text>
                        <text x="250" y={188 + i * 40} fill="#94a3b8" fontSize="7" textAnchor="end">{item.time}</text>
                    </g>
                ))}
            </g>

            {/* Sync Engine */}
            <g>
                <rect x="330" y="175" width="140" height="100" fill="#D97706" stroke="#fff" strokeWidth="3" />
                <text x="400" y="200" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">SYNC ENGINE</text>
                <text x="400" y="215" fill="#0A192F" fontSize="7" textAnchor="middle">Bi-directional REST</text>
                
                {/* Sync Status */}
                <circle cx="370" cy="240" r="8" fill="#10B981" />
                <text x="385" y="245" fill="#fff" fontSize="8">Active</text>
                
                <text x="400" y="262" fill="#0A192F" fontSize="7" textAnchor="middle">12+ years Odoo expertise</text>
            </g>

            {/* Arrows */}
            <motion.line
                x1="300" y1="200" x2="330" y2="200"
                stroke="#D97706" strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <polygon points="330,200 325,195 325,205" fill="#D97706" />
            
            <motion.line
                x1="470" y1="250" x2="500" y2="250"
                stroke="#D97706" strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.5 }}
            />
            <polygon points="500,250 495,245 495,255" fill="#D97706" />

            {/* Right: Financial/Inventory */}
            <g>
                <rect x="500" y="100" width="250" height="250" fill="#0A192F" stroke="#D97706" strokeWidth="2" />
                <text x="625" y="130" fill="#D97706" fontSize="11" textAnchor="middle" fontWeight="bold">BUSINESS OPS</text>
                <text x="625" y="145" fill="#64748b" fontSize="7" textAnchor="middle">(Odoo 18 ERP)</text>
                
                {/* Business Modules */}
                {[
                    { module: 'BILLING', stat: '100% Capture', icon: '💰' },
                    { module: 'INVENTORY', stat: 'Real-time', icon: '📦' },
                    { module: 'ACCOUNTING', stat: 'IRD Compliant', icon: '📊' },
                    { module: 'CLAIMS', stat: 'Auto-submit', icon: '📋' }
                ].map((item, i) => (
                    <g key={i}>
                        <rect x="520" y={170 + i * 40} width="210" height="30" fill="#D97706" opacity="0.2" stroke="#D97706" />
                        <text x="530" y={188 + i * 40} fill="#fff" fontSize="9">{item.icon}</text>
                        <text x="555" y={188 + i * 40} fill="#fff" fontSize="8" fontWeight="bold">{item.module}</text>
                        <text x="710" y={188 + i * 40} fill="#10B981" fontSize="7" textAnchor="end">{item.stat}</text>
                    </g>
                ))}
            </g>

            {/* Performance Guarantee */}
            <rect x="50" y="370" width="700" height="60" fill="#0A192F" stroke="#D97706" strokeWidth="2" />
            <text x="400" y="392" fill="#D97706" fontSize="10" textAnchor="middle" fontWeight="bold">REVENUE INTEGRITY GUARANTEE</text>
            <text x="400" y="410" fill="#94a3b8" fontSize="8" textAnchor="middle">Zero revenue leakage through real-time clinical-financial synchronization</text>
            <text x="400" y="423" fill="#10B981" fontSize="7" textAnchor="middle">Deployed: 50+ hospitals • Transaction volume: 10M+ events/year</text>
        </svg>
    );
}

// mHealth Outreach Blueprint
export function OutreachBlueprint() {
    return (
        <svg viewBox="0 0 800 450" className="w-full h-full" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <pattern id="grid5" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#10B981" strokeWidth="0.5" opacity="0.1" />
            </pattern>
            <rect width="800" height="450" fill="url(#grid5)" />

            {/* Central Server */}
            <g>
                <rect x="320" y="50" width="160" height="80" fill="#0A192F" stroke="#10B981" strokeWidth="3" />
                <text x="400" y="75" fill="#10B981" fontSize="11" textAnchor="middle" fontWeight="bold">CENTRAL SERVER</text>
                <text x="400" y="90" fill="#94a3b8" fontSize="7" textAnchor="middle">OpenMRS</text>
                <text x="400" y="105" fill="#94a3b8" fontSize="7" textAnchor="middle">Sync Protocol: REST + JSON</text>
                <circle cx="370" cy="115" r="5" fill="#10B981" />
                <text x="380" cy="118" fill="#10B981" fontSize="7">Online</text>
            </g>

            {/* Mobile Devices in Field */}
            {[
                { x: 100, y: 220, name: 'CHW-001', status: 'OFFLINE', color: '#EF4444', location: 'Remote Village A' },
                { x: 300, y: 280, name: 'CHW-002', status: 'SYNCING', color: '#F59E0B', location: 'Health Post B' },
                { x: 500, y: 280, name: 'CHW-003', status: 'ONLINE', color: '#10B981', location: 'Urban Clinic C' },
                { x: 650, y: 220, name: 'SPECIALIST', status: 'ONLINE', color: '#10B981', location: 'Telemedicine' }
            ].map((device, i) => (
                <g key={i}>
                    {/* Mobile Device */}
                    <rect x={device.x} y={device.y} width="100" height="140" rx="10" fill="#0A192F" stroke={device.color} strokeWidth="2" />
                    
                    {/* Screen */}
                    <rect x={device.x + 10} y={device.y + 15} width="80" height="100" fill="#1e293b" stroke={device.color} strokeWidth="1" />
                    <text x={device.x + 50} y={device.y + 50} fill="#fff" fontSize="7" textAnchor="middle">📱</text>
                    <text x={device.x + 50} y={device.y + 65} fill={device.color} fontSize="6" textAnchor="middle" fontWeight="bold">{device.name}</text>
                    <text x={device.x + 50} y={device.y + 78} fill={device.color} fontSize="6" textAnchor="middle">{device.status}</text>
                    
                    {/* Data Queue */}
                    <rect x={device.x + 10} y={device.y + 90} width="80" height="15" fill={device.color} opacity="0.2" />
                    <text x={device.x + 50} y={device.y + 100} fill="#94a3b8" fontSize="5" textAnchor="middle">Queue: {i === 0 ? '47 forms' : i === 1 ? '12 forms' : '0'}</text>
                    
                    {/* Location */}
                    <text x={device.x + 50} y={device.y + 135} fill="#64748b" fontSize="5" textAnchor="middle">{device.location}</text>
                    
                    {/* Connection Lines */}
                    {device.status !== 'OFFLINE' && (
                        <motion.line
                            x1={device.x + 50}
                            y1={device.y}
                            x2="400"
                            y2="130"
                            stroke={device.color}
                            strokeWidth="2"
                            strokeDasharray="5 5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                        />
                    )}
                </g>
            ))}

            {/* Offline-First Badge */}
            <rect x="50" y="30" width="180" height="70" fill="#0A192F" stroke="#10B981" strokeWidth="2" />
            <text x="140" y="52" fill="#10B981" fontSize="9" textAnchor="middle" fontWeight="bold">OFFLINE-FIRST ARCH</text>
            <text x="140" y="65" fill="#94a3b8" fontSize="7" textAnchor="middle">Muzima • Intelehealth</text>
            <text x="140" y="78" fill="#94a3b8" fontSize="7" textAnchor="middle">11+ years mobile expertise</text>
            <text x="140" y="91" fill="#10B981" fontSize="6" textAnchor="middle">✓ Zero connectivity required</text>

            {/* Performance Stats */}
            <rect x="50" y="380" width="700" height="50" fill="#f8fafc" stroke="#10B981" strokeWidth="1" />
            <text x="400" y="402" fill="#0A192F" fontSize="9" textAnchor="middle" fontWeight="bold">LAST-MILE GUARANTEE</text>
            <text x="400" y="418" fill="#64748b" fontSize="7" textAnchor="middle">100% data integrity in zero-connectivity • Auto-sync on reconnection • HIPAA compliant encryption</text>
        </svg>
    );
}
