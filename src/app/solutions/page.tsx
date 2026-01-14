import { Metadata } from 'next';
import { SolutionsClient } from './SolutionsClient';

export const metadata: Metadata = {
    title: 'The Vertical Nervous System Blueprint | Trigonal Solutions',
    description: 'Synthesized insights from over a decade of architecting global health infrastructure. We engineer the Digital Nervous System of Sovereign Health-from National HIE to Last-Mile mHealth.',
};

export default function SolutionsPage() {
    return <SolutionsClient />;
}
