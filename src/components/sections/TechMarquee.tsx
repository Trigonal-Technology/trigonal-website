'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Tech stack with technical DNA
const techStack = [
    {
        name: 'OpenMRS',
        logo: '/logos/openmrs.svg',
        dna: 'Medical record system with modular microservices for longitudinal patient tracking.',
        link: 'https://openmrs.org/'
    },
    {
        name: 'Bahmni',
        logo: '/logos/bahmni.webp',
        dna: 'Integrated hospital system combining OpenMRS, OpenELIS, and Odoo for complete workflows.',
        link: 'https://bahmni.org/'
    },
    {
        name: 'OzoneHIS',
        logo: '/logos/ozone.svg',
        dna: 'Cloud-native OpenMRS distribution optimized for Docker and Kubernetes deployments.',
        link: 'https://www.ozone-his.com'
    },
    {
        name: 'OpenELIS',
        logo: '/logos/openelis.png',
        dna: 'Laboratory Information System with FHIR DiagnosticReport mapping via LabBridge.',
        link: 'https://openelis-global.org/'
    },
    {
        name: 'SENAITE',
        logo: '/logos/senaite.svg',
        dna: 'Open-source LIMS for sample management with automated instrument integration.',
        link: 'https://www.senaite.com'
    },
    {
        name: 'WHONET',
        logo: '/logos/whonet.png',
        dna: 'WHO microbiology surveillance software for antimicrobial resistance monitoring.',
        link: 'https://whonet.org/'
    },
    {
        name: 'Odoo',
        logo: '/logos/odoo.svg',
        dna: 'Enterprise ERP for hospital billing, inventory, and financial management.',
        link: 'https://www.odoo.com/documentation/19.0/'
    },
    {
        name: 'ERPNext',
        logo: '/logos/erpnext.svg',
        dna: 'Open-source ERP alternative with healthcare-specific modules for resource planning.',
        link: 'https://docs.frappe.io/erpnext/introduction'
    },
    {
        name: 'DHIS2',
        logo: '/logos/dhis2.svg',
        dna: 'Aggregate reporting platform for public health surveillance and analytics.',
        link: 'https://docs.dhis2.org'
    },
    {
        name: 'OpenIMIS',
        logo: '/logos/openimis.svg',
        dna: 'Open-source health insurance management system for claims and beneficiary registry.',
        link: 'https://openimis.org/'
    },
    {
        name: 'Orthanc',
        logo: '/logos/orthanc.png',
        dna: 'Lightweight DICOM server for medical imaging with HL7 FHIR ImagingStudy integration.',
        link: 'https://www.orthanc-server.com/'
    },
    {
        name: 'DCM4CHEE',
        logo: '/logos/dcm4chee.png',
        dna: 'DICOM server for medical imaging with HL7 FHIR ImagingStudy integration.',
        link: 'https://www.dcm4che.org/dcm4chee-arc'
    },
    {
        name: 'Muzima',
        logo: '/logos/muzima.png',
        dna: 'Offline-first mobile app for rural health data collection and synchronization.',
        link: 'https://muzima.org'
    },
    {
        name: 'Apache Superset',
        logo: '/logos/superset.svg',
        dna: 'Modern data exploration and visualization platform for business intelligence and healthcare analytics.',
        link: 'https://superset.apache.org/'
    }
];

export function TechMarquee() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const hoveredTechData = techStack.find(t => t.name === hoveredTech);

    // Triple the array for seamless infinite loop
    const duplicatedTechStack = [...techStack, ...techStack, ...techStack];

    return (
        <section className="relative py-12 bg-white border-y border-slate-200">
            {/* Label */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 text-center">
                    Built on global open standards
                </p>
            </div>

            {/* Continuous Marquee Wrapper */}
            <div className="relative overflow-hidden mb-32">
                <motion.div
                    className="flex gap-12 items-center whitespace-nowrap py-4"
                    animate={isPaused ? {} : {
                        x: [0, -2464] // Total width to translate (14 items × 176px)
                    }}
                    transition={isPaused ? {} : {
                        duration: 60,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear"
                    }}
                >
                    {duplicatedTechStack.map((tech, idx) => (
                        <a
                            key={`${tech.name}-${idx}`}
                            href={tech.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 relative group"
                            onMouseEnter={() => {
                                setHoveredTech(tech.name);
                                setIsPaused(true);
                            }}
                            onMouseLeave={() => {
                                setHoveredTech(null);
                                setIsPaused(false);
                            }}
                        >
                            <motion.div 
                                className="w-32 h-20 flex items-center justify-center p-4 rounded-lg cursor-pointer border border-transparent hover:border-slate-200 hover:shadow-md"
                                animate={{
                                    scale: hoveredTech === tech.name ? 1.1 : 1,
                                    backgroundColor: hoveredTech === tech.name 
                                        ? 'rgb(248 250 252)' // slate-50
                                        : 'rgba(255, 255, 255, 0)' // transparent
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="max-w-full max-h-full object-contain transition-opacity duration-300"
                                    style={{
                                        opacity: hoveredTech === tech.name ? 1 : 0.8
                                    }}
                                />
                            </motion.div>
                        </a>
                    ))}
                </motion.div>

                {/* Gradient fade on edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

                {/* Technical DNA Popover - positioned relative to marquee wrapper */}
                <AnimatePresence>
                    {hoveredTechData && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-full max-w-sm z-50 pointer-events-none px-4"
                        >
                        <div className="bg-slate-900/95 backdrop-blur-xl border border-precision-blue/50 rounded-lg p-3 shadow-2xl relative">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-precision-blue/30 rounded-tr-lg" />

                            <div className="flex items-start gap-3">
                                <div className="p-1.5 bg-white rounded-sm flex-shrink-0">
                                    <img
                                        src={hoveredTechData.logo}
                                        alt={hoveredTechData.name}
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                                            {hoveredTechData.name}
                                        </h4>
                                        <span className="text-[8px] font-mono text-precision-blue opacity-70">
                                            [TECH DNA]
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-slate-300 mb-2 leading-relaxed font-inter">
                                        {hoveredTechData.dna}
                                    </p>
                                    <a
                                        href={hoveredTechData.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-[9px] font-mono text-precision-blue hover:text-white transition-colors pointer-events-auto"
                                    >
                                        VERIFY DOCUMENTATION
                                        <ExternalLink className="w-2.5 h-2.5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </section>
    );
}
