import type { Metadata } from 'next';
import { ManifestoHero } from '@/components/sections/manifesto/ManifestoHero';
import { FireProcess } from '@/components/sections/manifesto/FireProcess';
import { BuildValuesArchitecture } from '@/components/sections/manifesto/BuildValuesArchitecture';
import { VisionPillars } from '@/components/sections/manifesto/VisionPillars';
import { ProofDeck } from '@/components/sections/manifesto/ProofDeck';
import { ManifestoSignature } from '@/components/sections/manifesto/ManifestoSignature';

export const metadata: Metadata = {
  title: 'The Manifesto | Engineering Culture & Code We Live By | Trigonal Technology',
  description: 'The cultural code that differentiates us externally and anchors our leadership internally. BUILD principles: Bravery, Unity, Integrity, Leadership, Discipline.',
  keywords: [
    'Engineering Culture',
    'BUILD Principles',
    'FIRE Values',
    'Engineering Integrity',
    'Digital Health Ethics',
    'Cultural Code'
  ],
  openGraph: {
    title: 'The Manifesto | Trigonal Technology',
    description: 'The Code We Live By. We fuse Engineering Precision (FIRE) with Human Character (BUILD).',
    type: 'website',
  },
};

export default function ManifestoPage() {
  return (
    <>
      <ManifestoHero />
      <FireProcess />
      <BuildValuesArchitecture />
      <VisionPillars />
      <ProofDeck />
      <ManifestoSignature />
    </>
  );
}
