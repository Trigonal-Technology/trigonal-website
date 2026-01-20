import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fiscal Integrity Solution | Zero Revenue Leakage with Odoo 19 | Trigonal Technology',
  description: 'Hospital Revenue Cycle Management with Odoo 19. IRD-compliant billing, real-time ledger synchronization, and audit-ready financial systems. Official Odoo Learning Partner.',
  keywords: [
    'Hospital Revenue Cycle',
    'Odoo 19 Healthcare',
    'Financial Operating System',
    'IRD Compliant Billing',
    'Hospital Billing Software',
    'Revenue Cycle Management',
    'Odoo Learning Partner',
    'Clinical Financial Integration',
    'OpenIMIS Integration',
    'Hospital Inventory Management',
    'Pharmacy Billing',
    'Insurance Claims Automation',
    'Audit Trail Healthcare',
    'Real-time Ledger Sync'
  ],
  openGraph: {
    title: 'Fiscal Integrity Solution | Zero Revenue Leakage | Trigonal Technology',
    description: 'The Financial Operating System for hospitals. Odoo 19-powered revenue cycle management with IRD compliance and real-time ledger synchronization.',
    type: 'website',
  },
};

export default function FiscalIntegrityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
