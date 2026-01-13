import type { Metadata } from 'next'
import { ManifestoHero } from '@/components/sections/about/ManifestoHero'
import { FounderManifesto } from '@/components/sections/about/FounderManifesto'
import { SeniorEngineeringUnit } from '@/components/sections/about/SeniorEngineeringUnit'
import { TechnicalTimeline } from '@/components/sections/about/TechnicalTimeline'
import { GlobalFootprintMap } from '@/components/sections/about/GlobalFootprintMap'
import { RegulatoryAuthority } from '@/components/sections/about/RegulatoryAuthority'

export const metadata: Metadata = {
    title: 'About | Global Digital Health Engineering & Architecture | Trigonal Technology',
    description: '60+ years of combined senior engineering expertise in Digital Health. Open-source EHR implementation, FHIR architecture, and interoperable health infrastructure for the Global South.',
    keywords: [
        'Global Digital Health Engineering',
        'Interoperable EHR Implementation',
        'Open-Source Health Infrastructure',
        'FHIR Architecture',
        'Digital Health Consulting',
        'OpenMRS Implementation',
        'Bahmni Deployment',
        'LMIC Health Systems',
    ],
    openGraph: {
        title: 'About | Global Digital Health Engineering | Trigonal Technology',
        description: '60+ years of combined experience. Elite engineering for global health infrastructure.',
        type: 'website',
    },
}

export default function AboutPage() {
    return (
        <>
            <ManifestoHero />
            <FounderManifesto />
            <SeniorEngineeringUnit />
            <TechnicalTimeline />
            <GlobalFootprintMap />
            <RegulatoryAuthority />
        </>
    )
}
