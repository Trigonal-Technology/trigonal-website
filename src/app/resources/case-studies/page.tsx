import type { Metadata } from 'next';
import { CaseStudiesClient } from './CaseStudiesClient';

export const metadata: Metadata = {
    title: 'Case Studies: Architectural Post-Mortems | Trigonal Technology',
    description: 'Deep-dive technical analyses of flagship implementations including LafiaHMS (Nigeria), Venevital (Venezuela), and integrated health system architectures.',
    keywords: ['Integrated Health System Implementation', 'Odoo-OpenMRS Synchronization', 'LafiaHMS', 'Venevital', 'Bahmni Implementation', 'Healthcare ERP'],
    openGraph: {
        title: 'Case Studies: Architectural Post-Mortems | Trigonal Technology',
        description: 'Deep-dive technical analyses of flagship implementations including LafiaHMS (Nigeria), Venevital (Venezuela), and integrated health system architectures.',
        type: 'website',
    },
};

export default function CaseStudiesPage() {
    return <CaseStudiesClient />;
}
