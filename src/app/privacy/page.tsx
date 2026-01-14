import type { Metadata } from 'next';
import { PrivacyPolicyClient } from './PrivacyPolicyClient';

export const metadata: Metadata = {
    title: 'Data Sovereignty & Privacy Protocol | Trigonal Technology',
    description: 'Architecting the structures that protect global health data. Our sovereignty-first privacy framework for interoperable digital health systems.',
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}
