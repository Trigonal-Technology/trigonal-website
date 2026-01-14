import type { Metadata } from 'next';
import { BlueprintsClient } from './BlueprintsClient';

export const metadata: Metadata = {
    title: 'Technical Blueprints: The Sovereign Library | Trigonal Technology',
    description: 'White papers and technical documentation on HL7 FHIR R4 Mapping, Odoo 18 for Healthcare ERP, OpenHIE Mediator Architecture, and Hospital ERP Standards.',
    keywords: ['HL7 FHIR R4 Mapping', 'OpenHIE Mediator Architecture', 'Hospital ERP Standards', 'Odoo Healthcare ERP', 'Interoperability Standards'],
    openGraph: {
        title: 'Technical Blueprints: The Sovereign Library | Trigonal Technology',
        description: 'White papers and technical documentation on HL7 FHIR R4 Mapping, Odoo 18 for Healthcare ERP, OpenHIE Mediator Architecture, and Hospital ERP Standards.',
        type: 'website',
    },
};

export default function BlueprintsPage() {
    return <BlueprintsClient />;
}
