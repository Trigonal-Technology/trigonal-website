import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orthanc Radiology Pipeline Case Study | DICOM & PACS Infrastructure | Trigonal Technology',
  description: 'Replacing heavy Dcm4chee architecture with lightweight Orthanc instances. 20x lighter footprint, 100% billing capture, REST API native DICOM workflow.',
  keywords: [
    'DICOM Infrastructure',
    'Orthanc PACS',
    'Radiology Workflow',
    'PACS Billing Integration',
    'Medical Imaging',
    'Bahmni Integration',
    'Dcm4chee Replacement'
  ],
  openGraph: {
    title: 'Orthanc Radiology Pipeline Case Study | Trigonal Technology',
    description: 'From Legacy Bloat to Lightweight Speed. Replacing heavy PACS with Orthanc.',
    type: 'article',
  },
};

export default function OrthancRadiologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
