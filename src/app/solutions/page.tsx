import { Metadata } from 'next';
import { SolutionsClient } from './SolutionsClient';

export const metadata: Metadata = {
    title: 'The Vertical Nervous System Blueprint | Trigonal Solutions',
    description: '5 Architectural Layers. 60+ years combined engineering. Zero vendor lock-in. We engineer the Digital Nervous System of Sovereign Health—from National HIE to Last-Mile mHealth.',
};

export default function SolutionsPage() {
    return <SolutionsClient />;
}
