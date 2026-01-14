import type { Metadata } from 'next';
import { FieldReportsClient } from './FieldReportsClient';

export const metadata: Metadata = {
    title: 'Field Reports: Frontline Insights | Trigonal Technology',
    description: 'Deployment logs from rural health implementations, offline-first mobile health solutions, and zero-connectivity data synchronization challenges.',
    keywords: ['EMR Implementation Field Reports', 'Offline-First Mobile Health', 'Rural Healthcare Deployment', 'Muzima Implementation', 'Intelehealth Deployment'],
    openGraph: {
        title: 'Field Reports: Frontline Insights | Trigonal Technology',
        description: 'Deployment logs from rural health implementations, offline-first mobile health solutions, and zero-connectivity data synchronization challenges.',
        type: 'website',
    },
};

export default function FieldReportsPage() {
    return <FieldReportsClient />;
}
