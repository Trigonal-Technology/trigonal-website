import type { Metadata } from 'next';
import { DataPolicyClient } from './DataPolicyClient';

export const metadata: Metadata = {
    title: 'Data Governance Blueprint | Trigonal Technology',
    description: 'Technical manifest for data architecture, sovereignty protocols, and compliance engineering in sovereign health systems.',
};

export default function DataPolicyPage() {
    return <DataPolicyClient />;
}
