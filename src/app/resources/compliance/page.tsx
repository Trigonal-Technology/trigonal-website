import type { Metadata } from 'next';
import { ComplianceClient } from './ComplianceClient';

export const metadata: Metadata = {
    title: 'Compliance & Standards: The Trust Node | Trigonal Technology',
    description: 'Data Sovereignty Framework, Nepal MoHP Directive 2081 compliance, HIPAA data residency, and GDPR engineering standards for sovereign health systems.',
    keywords: ['Data Sovereignty Framework', 'Nepal MoHP Directive 2081 Compliance', 'HIPAA Data Residency', 'GDPR Compliance', 'Healthcare Security Standards'],
    openGraph: {
        title: 'Compliance & Standards: The Trust Node | Trigonal Technology',
        description: 'Data Sovereignty Framework, Nepal MoHP Directive 2081 compliance, HIPAA data residency, and GDPR engineering standards for sovereign health systems.',
        type: 'website',
    },
};

export default function CompliancePage() {
    return <ComplianceClient />;
}
