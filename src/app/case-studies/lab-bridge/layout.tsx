import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lab-Bridge Case Study | HL7 & ASTM Middleware for OpenELIS | Trigonal Technology',
  description: 'How we automated 5 critical analyzers for Parbat District Hospital using edge-native middleware. 100% automated entry, 6-week deployment, zero vendor lock-in. OpenELIS integration with ASTM E1381 and HL7 v2 protocols.',
  keywords: [
    'Hospital Interoperability',
    'OpenELIS Integration',
    'LIS Middleware',
    'ASTM E1381 Python',
    'Digital Health Nepal',
    'HL7 Middleware',
    'Laboratory Automation',
    'Edge Computing',
    'Raspberry Pi Healthcare',
    'FastAPI Healthcare'
  ],
  openGraph: {
    title: 'Lab-Bridge Case Study | Trigonal Technology',
    description: 'Closing the Last Mile of Diagnostic Data. Edge-native middleware connecting analyzers to OpenELIS.',
    type: 'article',
  },
};

export default function LabBridgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
