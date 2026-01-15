'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimationFrame, useMotionValue } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Tech stack with technical DNA, architectural layer, and specs
const techStack = [
    {
        name: 'OpenMRS',
        logo: '/logos/openmrs.svg',
        dna: 'Medical record system with modular microservices for longitudinal patient tracking.',
        archLayer: 'Clinical',
        domain: 'CLINICAL_CORE',
        spec: 'HL7_FHIR_R4',
        use: 'LONGITUDINAL_PATIENT_TRACKING',
        link: 'https://openmrs.org/'
    },
    {
        name: 'Bahmni',
        logo: '/logos/bahmni.webp',
        dna: 'Integrated hospital system combining OpenMRS, OpenELIS, and Odoo for complete workflows.',
        archLayer: 'Clinical',
        domain: 'HOSPITAL_OS',
        spec: 'FHIR_R4 + ODOO',
        use: 'END_TO_END_WORKFLOW_AUTOMATION',
        link: 'https://bahmni.org/'
    },
    {
        name: 'OzoneHIS',
        logo: '/logos/ozone.svg',
        dna: 'Cloud-native OpenMRS distribution optimized for Docker and Kubernetes deployments.',
        archLayer: 'Infrastructure',
        domain: 'DEPLOYMENT_LAYER',
        spec: 'DOCKER + K8S',
        use: 'SCALABLE_EMR_DELIVERY',
        link: 'https://www.ozone-his.com'
    },
    {
        name: 'OpenELIS',
        logo: '/logos/openelis.png',
        dna: 'Laboratory Information System with FHIR DiagnosticReport mapping via LabBridge.',
        archLayer: 'Clinical',
        domain: 'LIS_CORE',
        spec: 'FHIR + LOINC',
        use: 'LAB_WORKFLOW_STANDARDIZATION',
        link: 'https://openelis-global.org/'
    },
    {
        name: 'Lab-Bridge',
        logo: '/logos/labbridge.svg',
        dna: 'Analyzer-to-LIS middleware for real-time lab result synchronization.',
        archLayer: 'Infrastructure',
        domain: 'DIAGNOSTIC_MIDDLEWARE',
        spec: 'ASTM + HL7',
        use: 'ANALYZER_TO_EHR_SYNC',
        link: 'https://trigonal.com.np'
    },
    {
        name: 'SENAITE',
        logo: '/logos/senaite.svg',
        dna: 'Open-source LIMS for sample management with automated instrument integration.',
        archLayer: 'Clinical',
        domain: 'LIMS',
        spec: 'ISO_15189',
        use: 'CLINICAL_LAB_AUTOMATION',
        link: 'https://www.senaite.com'
    },
    {
        name: 'WHONET',
        logo: '/logos/whonet.png',
        dna: 'WHO microbiology surveillance software for antimicrobial resistance monitoring.',
        archLayer: 'Intelligence',
        domain: 'MICROBIOLOGY',
        spec: 'AMR_DATA',
        use: 'DRUG_RESISTANCE_TRACKING',
        link: 'https://whonet.org/'
    },
    {
        name: 'Odoo',
        logo: '/logos/odoo.svg',
        dna: 'Enterprise ERP for hospital billing, inventory, and financial management.',
        archLayer: 'Fiscal',
        domain: 'FISCAL_ENGINE',
        spec: 'ERP_SYNC',
        use: 'REVENUE_INTEGRITY',
        link: 'https://www.odoo.com/documentation/19.0/'
    },
    {
        name: 'ERPNext',
        logo: '/logos/erpnext.svg',
        dna: 'Open-source ERP alternative with healthcare-specific modules for resource planning.',
        archLayer: 'Fiscal',
        domain: 'RESOURCE_PLANNING',
        spec: 'PYTHON + MARIADB',
        use: 'HOSPITAL_RESOURCE_CONTROL',
        link: 'https://docs.frappe.io/erpnext/introduction'
    },
    {
        name: 'DHIS2',
        logo: '/logos/dhis2.svg',
        dna: 'Aggregate reporting platform for public health surveillance and analytics.',
        archLayer: 'Intelligence',
        domain: 'NATIONAL_REPORTING',
        spec: 'ADX + DXF',
        use: 'SOVEREIGN_ANALYTICS_PIPELINE',
        link: 'https://docs.dhis2.org'
    },
    {
        name: 'OpenIMIS',
        logo: '/logos/openimis.svg',
        dna: 'Open-source health insurance management system for claims and beneficiary registry.',
        archLayer: 'Fiscal',
        domain: 'INSURANCE_LAYER',
        spec: 'FHIR + IHE_PIX',
        use: 'CLAIMS_AND_BENEFICIARY_REGISTRY',
        link: 'https://openimis.org/'
    },
    {
        name: 'Orthanc',
        logo: '/logos/orthanc.png',
        dna: 'Lightweight DICOM server for medical imaging with HL7 FHIR ImagingStudy integration.',
        archLayer: 'Clinical',
        domain: 'IMAGING_PACS',
        spec: 'DICOM + FHIR',
        use: 'RADIOLOGY_INTEROPERABILITY',
        link: 'https://www.orthanc-server.com/'
    },
    {
        name: 'DCM4CHEE',
        logo: '/logos/dcm4chee.png',
        dna: 'DICOM server for medical imaging with HL7 FHIR ImagingStudy integration.',
        archLayer: 'Clinical',
        domain: 'IMAGING_ARCHIVE',
        spec: 'DICOM + IHE',
        use: 'CLINICAL_IMAGE_EXCHANGE',
        link: 'https://www.dcm4che.org/dcm4chee-arc'
    },
    {
        name: 'Muzima',
        logo: '/logos/muzima.png',
        dna: 'Offline-first mobile app for rural health data collection and synchronization.',
        archLayer: 'Clinical',
        domain: 'MHEALTH',
        spec: 'OFFLINE_FIRST',
        use: 'REMOTE_DATA_CAPTURE',
        link: 'https://muzima.org'
    },
    {
        name: 'Apache Superset',
        logo: '/logos/superset.svg',
        dna: 'Modern data exploration and visualization platform for business intelligence and healthcare analytics.',
        archLayer: 'Intelligence',
        domain: 'BI_LAYER',
        spec: 'SQL + BI',
        use: 'EXECUTIVE_ANALYTICS',
        link: 'https://superset.apache.org/'
    },
    {
        name: 'SORMAS',
        logo: '/logos/sormas.png',
        dna: 'Surveillance Outbreak Response Management & Analysis System for epidemic management.',
        archLayer: 'Intelligence',
        domain: 'EPIDEMIOLOGY',
        spec: 'REAL_TIME_SURVEILLANCE',
        use: 'OUTBREAK_MGMT',
        link: 'https://sormas.org/'
    }
];

export function TechMarquee() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [popoverPosition, setPopoverPosition] = useState<{ x: number; y: number; placement: 'top' | 'bottom' } | null>(null);
    const x = useMotionValue(0);
    const cycleWidth = 2816;

    const hoveredTechData = techStack.find(t => t.name === hoveredTech);

    // Triple the array for seamless infinite loop
    const duplicatedTechStack = [...techStack, ...techStack, ...techStack];

    useAnimationFrame((_, delta) => {
        if (isPaused) return;
        const next = x.get() - delta * 0.03;
        x.set(next <= -cycleWidth ? 0 : next);
    });

    return (
        <section className="relative py-12 bg-white border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                {/* Continuous Marquee Wrapper with Floating Arrows */}
                <div className="relative group/marquee">
                    {/* Left Floating Arrow */}
                    <button
                        type="button"
                        onClick={() => x.set(x.get() + 240)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg border border-slate-200 hover:bg-white cursor-pointer z-20 opacity-0 group-hover/marquee:opacity-100 transition-opacity duration-300"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>

                    {/* Marquee Container */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-12 items-center whitespace-nowrap py-4"
                            style={{ x }}
                        >
                            {duplicatedTechStack.map((tech, idx) => (
                                <a
                                    key={`${tech.name}-${idx}`}
                                    href={tech.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 relative group"
                                    onMouseEnter={(event) => {
                                        const rect = event.currentTarget.getBoundingClientRect();
                                        const centerX = rect.left + rect.width / 2;
                                        const centerY = rect.top + rect.height / 2;
                                        const viewportWidth = window.innerWidth;
                                        const viewportHeight = window.innerHeight;
                                        const maxPopoverHalf = Math.min(192, viewportWidth / 2 - 16);
                                        const clampedX = Math.max(16 + maxPopoverHalf, Math.min(centerX, viewportWidth - 16 - maxPopoverHalf));
                                        const placement = centerY > viewportHeight * 0.6 ? 'top' : 'bottom';

                                        setHoveredTech(tech.name);
                                        setPopoverPosition({
                                            x: clampedX,
                                            y: centerY,
                                            placement
                                        });
                                        setIsPaused(true);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredTech(null);
                                        setPopoverPosition(null);
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

                        {/* Technical DNA Popover - fixed position to hovered icon */}
                        <AnimatePresence>
                            {hoveredTechData && popoverPosition && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="fixed z-50 pointer-events-none w-full max-w-sm"
                                    style={{
                                        left: popoverPosition.x,
                                        top: popoverPosition.y
                                    }}
                                >
                                    <div
                                        className="border-l border-blue-500 rounded-lg p-3 shadow-2xl relative"
                                        style={{
                                            backgroundColor: '#0F172A', // Solid fallback for Firefox
                                            backdropFilter: 'blur(16px)',
                                            WebkitBackdropFilter: 'blur(16px)',
                                            transform: popoverPosition.placement === 'top'
                                                ? 'translate(-50%, -16px)'
                                                : 'translate(-50%, 16px)'
                                        }}
                                    >
                                        <div className="space-y-3">
                                            {/* Tool Name with Logo */}
                                            <div className="flex items-center gap-3">
                                                <div className="p-1.5 bg-white rounded-sm flex-shrink-0">
                                                    <img
                                                        src={hoveredTechData.logo}
                                                        alt={hoveredTechData.name}
                                                        className="w-8 h-8 object-contain"
                                                    />
                                                </div>
                                                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                                                    {hoveredTechData.name}
                                                </h4>
                                            </div>

                                            {/* Domain */}
                                            <div className="flex items-baseline gap-2 border-t border-slate-700 pt-2">
                                                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                                                    DOMAIN:
                                                </span>
                                                <span className="font-mono text-xs text-white font-bold">
                                                    {hoveredTechData.domain ?? hoveredTechData.archLayer}
                                                </span>
                                            </div>

                                            {/* Spec */}
                                            <div className="flex items-baseline gap-2">
                                                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                                                    SPEC:
                                                </span>
                                                <span className="font-mono text-xs text-white font-bold">
                                                    {hoveredTechData.spec}
                                                </span>
                                            </div>

                                            {/* Engineering Purpose */}
                                            <div className="flex items-baseline gap-2">
                                                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                                                    USE:
                                                </span>
                                                <span className="font-mono text-xs text-white font-bold">
                                                    {hoveredTechData.use ?? hoveredTechData.dna}
                                                </span>
                                            </div>

                                            {/* Documentation Link */}
                                            <div className="pt-2 border-t border-slate-700">
                                                <a
                                                    href={hoveredTechData.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-[9px] font-mono text-blue-400 hover:text-white transition-colors pointer-events-auto"
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

                    {/* Right Floating Arrow */}
                    <button
                        type="button"
                        onClick={() => x.set(x.get() - 240)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg border border-slate-200 hover:bg-white cursor-pointer z-10 opacity-0 group-hover/marquee:opacity-100 transition-opacity duration-300"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 text-slate-600" />
                    </button>
                </div>
            </div>
        </section>
    );
}
