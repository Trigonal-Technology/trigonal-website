import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NidanEHR | The Operating System for Sovereign Hospitals | Trigonal Technology',
  description: 'Built on OpenMRS Kernel. Hardened for low-connectivity. Integrated with Odoo Finance. Offline-first EMR for rural healthcare.',
  keywords: [
    'NidanEHR',
    'Hospital OS',
    'OpenMRS',
    'Odoo Integration',
    'Offline EMR',
    'FHIR R4',
    'Sovereign Healthcare',
    'Clinical Information System'
  ],
  openGraph: {
    title: 'NidanEHR | The Operating System for Sovereign Hospitals',
    description: 'Built on OpenMRS Kernel. Hardened for low-connectivity. Integrated with Odoo Finance.',
    type: 'website',
  },
};

export default function NidanEHRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
