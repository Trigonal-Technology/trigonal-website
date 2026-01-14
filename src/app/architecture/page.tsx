import type { Metadata } from 'next';
import { ArchitectureClient } from './ArchitectureClient';

export const metadata: Metadata = {
    title: 'The Blueprint of Sovereign Health | Trigonal Architecture',
    description: 'Technical deep-dive into the Trigonal Health Stack: HL7 FHIR interoperability spine, Odoo fiscal engine, and compliance-first architecture for Nepal MoHP 2081 and HIPAA.',
    keywords: ['Health Information Architecture', 'HL7 FHIR R4', 'Odoo Healthcare Integration', 'Nepal MoHP 2081', 'HIPAA Architecture', 'OpenMRS Architecture'],
    openGraph: {
        title: 'The Blueprint of Sovereign Health | Trigonal Architecture',
        description: 'Technical deep-dive into the Trigonal Health Stack: HL7 FHIR interoperability spine, Odoo fiscal engine, and compliance-first architecture.',
        type: 'website',
    },
};

export default function ArchitecturePage() {
    return <ArchitectureClient />;
}
