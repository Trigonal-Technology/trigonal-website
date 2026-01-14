import type { Metadata } from 'next';
import { ResourcesClient } from './ResourcesClient';

export const metadata: Metadata = {
    title: 'Technical Resources | Trigonal Technology',
    description: 'Case studies, technical blueprints, compliance guides, and field reports from 60+ years of combined engineering experience in sovereign digital health systems.',
    openGraph: {
        title: 'Technical Resources | Trigonal Technology',
        description: 'Case studies, technical blueprints, compliance guides, and field reports from 60+ years of combined engineering experience in sovereign digital health systems.',
        type: 'website',
    },
};

export default function ResourcesPage() {
    return <ResourcesClient />;
}
