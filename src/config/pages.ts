/**
 * Page Content Configuration
 * Centralized marketing copy and content for all pages
 * This allows non-developers to update text without touching component code
 * 
 * Note: Icon names are strings that map to lucide-react icons in components
 */

export const FISCAL_INTEGRITY_CONTENT = {
  hero: {
    badge: "OFFICIAL ODOO LEARNING PARTNER",
    badgeColor: "orange" as const,
    title: "Zero Revenue Leakage.",
    subtitle: "We engineer financial integrity. From IRD-Compliant Hospital Billing to high-frequency Retail POS, our systems ensure every transaction hits the ledger.",
    cta: {
      text: "Initialize Revenue Cycle",
      href: "/consult?source=fiscal_core",
      iconName: "CreditCard" as const
    }
  },
  kernel: {
    label: "The Kernel",
    title: "Powered by Odoo 19",
    description: "We don't build billing systems from scratch. We deploy the world's most powerful open-source ERP, customized for local tax laws and workflows."
  },
  features: [
    {
      iconName: "CreditCard" as const,
      title: "Unified Billing",
      description: "Consolidate Pharmacy, Lab, and Bed charges into a single invoice. IRD-compliant real-time syncing.",
      features: [
        "Automatic Tax Calculation",
        "Insurance Adjudication"
      ],
      color: "orange" as const
    },
    {
      iconName: "ShoppingCart" as const,
      title: "Smart Inventory",
      description: "FIFO/FEFO tracking for pharmaceuticals. Auto-reordering based on consumption velocity.",
      features: [
        "Expiry Alerts",
        "Multi-Warehouse Sync"
      ],
      color: "orange" as const
    },
    {
      iconName: "BarChart3" as const,
      title: "360° CRM",
      description: "Track patient/customer lifetime value. Targeted campaigns and follow-up automation.",
      features: [
        "Patient Outreach",
        "Customer Loyalty"
      ],
      color: "orange" as const
    }
  ],
  crossIndustry: {
    badge: "BATTLE-TESTED ARCHITECTURE",
    title: "Engineered for Hospitals.\nStress-tested in Hospitality.",
    description: [
      "Our financial architectures aren't just for healthcare. We engineer the same high-frequency billing engines for Hospitality Chains and Retail Networks.",
      "Whether it's a 500-bed hospital or a 5-star hotel, the requirement is the same: Real-time inventory and audit-ready ledgers."
    ],
    industries: [
      { iconName: "Utensils" as const, label: "Restaurants", tag: "POS Speed" },
      { iconName: "Building2" as const, label: "Hotels", tag: "Booking Logic" }
    ],
    transactionLog: [
      { time: "[10:42:01]", action: "OPD_BILLING", status: "SYNCED (IRD_API)", statusColor: "emerald" as const },
      { time: "[10:42:05]", action: "RESTAURANT_POS", status: "SYNCED (INVENTORY)", statusColor: "emerald" as const },
      { time: "[10:42:12]", action: "INSURANCE_CLAIM", status: "PENDING (OPENIMIS)", statusColor: "blue" as const },
      { time: "[10:42:15]", action: "PHARMACY_DISPENSE", status: "DEDUCTED (BATCH_A1)", statusColor: "emerald" as const }
    ]
  },
  footer: {
    badge: "Ready to Audit?",
    title: "Stop leaking revenue.",
    subtitle: "Start architecting integrity.",
    cta: {
      text: "Configure Financial Stack",
      href: "/consult?source=fiscal_core"
    }
  }
} as const;

export const LAB_BRIDGE_CONTENT = {
  hero: {
    badge: "PRODUCT: LAB_BRIDGE",
    badgeColor: "purple" as const,
    title: "Production-Ready Lab Middleware.",
    subtitle: "A robust, multi-protocol gateway connecting Analyzers to OpenELIS. Validated in live hospital environments with 100% success rates.",
    buttons: [
      { 
        text: "Initialize Interface", 
        href: "/consult?source=lab_bridge", 
        variant: "primary" as const, 
        color: "purple" as const 
      }
    ]
  },
  supportedDevices: [
    "Sysmex XN (Hematology)",
    "Finecare (QIAnalyzer)",
    "EDAN (Hematology)",
    "Maglumi (Chemiluminescence)",
    "Erba (Biochemistry)",
    "Sinseng (IVD)"
  ],
  topology: {
    title: "The Integration Topology",
    description: "Middleware architecture handling HL7, ASTM, and SOAP flows.",
    nodes: [
      { 
        title: "Analyzers", 
        subtitle: "Sysmex / Maglumi / EDAN", 
        iconName: "Microscope" as const, 
        color: "slate" as const, 
        port: "RS232/TCP" 
      },
      { 
        title: "Lab-Bridge", 
        subtitle: "Result Lifecycle Manager", 
        iconName: "Activity" as const, 
        color: "purple" as const, 
        port: "8083", 
        tag: "MIDDLEWARE" 
      },
      { 
        title: "OpenELIS", 
        subtitle: "LIS Kernel", 
        iconName: "Database" as const, 
        color: "green" as const, 
        port: "8080" 
      }
    ]
  },
  features: {
    title: "Operational Achievements",
    items: [
      { 
        title: "Multi-Protocol Support", 
        subtitle: "Handles HL7, ASTM, and SOAP flows. Validated with multiple panels (blood, urine, stool) with 100% success.", 
        iconName: "ArrowLeftRight" as const, 
        color: "blue" as const 
      },
      { 
        title: "Resilient Retry Pipeline", 
        subtitle: "Failed LIS integrations enter a dedicated queue with exponential backoff. Zero silent drops.", 
        iconName: "RefreshCw" as const, 
        color: "orange" as const 
      },
      { 
        title: "Deep OpenELIS Linking", 
        subtitle: "Uses persistent JSESSIONID cookies and verified mappers to link results to specific Patient Analyses.", 
        iconName: "GitMerge" as const, 
        color: "green" as const 
      },
      { 
        title: "Automated Calculations", 
        subtitle: "Extended logic computes derived values directly from analyzer output, reducing manual calculation errors.", 
        iconName: "Zap" as const, 
        color: "purple" as const 
      },
      { 
        title: "Central Admin Console", 
        subtitle: "React/Vite frontend to configure endpoints, manage mappings, and inspect LIS Queue health.", 
        iconName: "Settings" as const, 
        color: "slate" as const 
      },
      { 
        title: "Sustained Validation", 
        subtitle: "Operated under strict monitoring for 2+ months. Refined based on feedback from Parbat District Hospital staff.", 
        iconName: "CheckCircle2" as const, 
        color: "emerald" as const 
      }
    ]
  }
} as const;

export const IMAGING_CONTENT = {
  hero: {
    badge: "PRODUCT: IMAGING_CORE",
    badgeColor: "pink" as const,
    title: "The Sovereign PACS Archive.",
    subtitle: "A Vendor-Neutral Archive (VNA) built on Orthanc & OHIF. Store, route, and view DICOM images without per-study licensing fees.",
    buttons: [
      { 
        text: "Deploy Imaging Core", 
        href: "/consult?source=imaging_core", 
        variant: "primary" as const, 
        color: "pink" as const 
      }
    ]
  },
  supportedModalities: [
    "CT Scan (DICOM Standard)",
    "MRI (Siemens/GE/Philips)",
    "Digital X-Ray (CR/DR)",
    "Ultrasound (US)",
    "Endoscopy (Video Capture)",
    "Mammography (MG)"
  ],
  topology: {
    title: "The DICOMweb Topology",
    description: "Server-side rendering with zero-footprint client viewing.",
    nodes: [
      { 
        title: "Modalities", 
        subtitle: "CT / MRI / X-Ray", 
        iconName: "Scan" as const, 
        color: "slate" as const, 
        port: "DICOM C-STORE" 
      },
      { 
        title: "Orthanc", 
        subtitle: "VNA / DicomWeb", 
        iconName: "Server" as const, 
        color: "pink" as const, 
        port: "8042", 
        tag: "CORE" 
      },
      { 
        title: "OHIF Viewer", 
        subtitle: "Zero-Footprint UI", 
        iconName: "Eye" as const, 
        color: "blue" as const, 
        port: "443" 
      }
    ]
  },
  features: {
    title: "Radiology Engineering",
    items: [
      { 
        title: "Zero-Footprint Viewer", 
        subtitle: "Powered by OHIF. Radiologists can diagnose from any browser (Chrome/Edge) without installing heavy desktop software.", 
        iconName: "Eye" as const, 
        color: "blue" as const 
      },
      { 
        title: "Vendor Neutral Archive", 
        subtitle: "We break the lock-in. Store images from GE, Siemens, or Philips in a standard, open format that YOU own.", 
        iconName: "HardDrive" as const, 
        color: "pink" as const 
      },
      { 
        title: "Intelligent Routing", 
        subtitle: "Auto-forward studies based on rules (e.g., 'Send all Neuro CTs to Dr. A' or 'Compress X-Rays for night shift').", 
        iconName: "Share2" as const, 
        color: "purple" as const 
      },
      { 
        title: "Low-Bandwidth Mode", 
        subtitle: "Optimized for constrained connectivity. Server-side rendering streams images efficiently even on 3G/4G mobile networks.", 
        iconName: "Cpu" as const, 
        color: "orange" as const 
      },
      { 
        title: "Unlimited Nodes", 
        subtitle: "Stop paying 'per-modality' license fees. Connect as many CTs, MRIs, or workstations as you need. Forever.", 
        iconName: "Layers" as const, 
        color: "emerald" as const 
      },
      { 
        title: "Lossless Compression", 
        subtitle: "Automatic transcoding to JPEG2000 for long-term archival without compromising diagnostic quality.", 
        iconName: "ShieldCheck" as const, 
        color: "slate" as const 
      }
    ]
  }
} as const;

export const INTELLIGENCE_CONTENT = {
  hero: {
    badge: "PRODUCT: INTELLIGENCE_CORE",
    badgeColor: "indigo" as const,
    title: "Sovereign Health Intelligence.",
    subtitle: "From hospital operations to national surveillance. Integrated DHIS2 for reporting, Apache Superset for BI, and Local AI for predictive insight.",
    buttons: [
      { 
        text: "Initialize Analytics Stack", 
        href: "/consult?source=intelligence_core", 
        variant: "primary" as const, 
        color: "indigo" as const 
      }
    ]
  },
  features: {
    title: "The Data Hierarchy",
    items: [
      { 
        title: "1. Data Lake (Source)", 
        subtitle: "The single source of truth. Aggregates data from the EMR, Lab Systems, and Legacy Health Records into a unified schema.", 
        iconName: "Database" as const, 
        color: "slate" as const 
      },
      { 
        title: "2. Operational BI", 
        subtitle: "Apache Superset dashboards for hospital admin. Track revenue, bed occupancy, and inventory velocity in real-time.", 
        iconName: "BarChart3" as const, 
        color: "indigo" as const 
      },
      { 
        title: "3. National Reporting", 
        subtitle: "Automated DHIS2 aggregation. Push indicators directly to government servers without manual tabulation.", 
        iconName: "Globe" as const, 
        color: "blue" as const 
      },
      { 
        title: "Sovereign AI Models", 
        subtitle: "Run predictive models locally. Forecast disease outbreaks or supply shortages without sending patient data to Big Tech.", 
        iconName: "BrainCircuit" as const, 
        color: "purple" as const 
      },
      { 
        title: "Clinical Decision Support", 
        subtitle: "Real-time alerts for drug interactions and protocol adherence based on local clinical guidelines.", 
        iconName: "TrendingUp" as const, 
        color: "emerald" as const 
      },
      { 
        title: "Federated Learning", 
        subtitle: "Train models across multiple hospitals without ever moving the patient data from the premise.", 
        iconName: "Network" as const, 
        color: "orange" as const 
      }
    ]
  }
} as const;

export const MOBILE_CONTENT = {
  hero: {
    badge: "PRODUCT: NIDAN_PHR",
    badgeColor: "blue" as const,
    title: "The Hospital in Their Pocket.",
    subtitle: "A white-label patient app that reduces OPD queues. Appointments, Lab Results, and Telemedicine in one secure interface.",
    buttons: [
      { 
        text: "Deploy Patient App", 
        href: "/consult?source=nidan_phr", 
        variant: "primary" as const, 
        color: "blue" as const 
      }
    ]
  },
  features: {
    title: "Patient Experience Engineering",
    items: [
      { 
        title: "QR Check-In", 
        subtitle: "Patients generate a QR code on their phone. Reception scans it. Registration done in 3 seconds.", 
        iconName: "QrCode" as const, 
        color: "slate" as const 
      },
      { 
        title: "Instant Lab Results", 
        subtitle: "No more traveling back to the hospital just to collect a report. PDF results delivered securely to the app.", 
        iconName: "Signal" as const, 
        color: "purple" as const 
      },
      { 
        title: "OPD Booking", 
        subtitle: "Real-time slot visibility. Patients book appointments and pay via digital wallet (eSewa/Khalti integration ready).", 
        iconName: "CalendarCheck" as const, 
        color: "blue" as const 
      },
      { 
        title: "Telemedicine Ready", 
        subtitle: "Native video consultation support for follow-ups, reducing physical congestion in the hospital.", 
        iconName: "Smartphone" as const, 
        color: "indigo" as const 
      },
      { 
        title: "Family Health Wallet", 
        subtitle: "Manage profiles for children and elderly parents from a single master account.", 
        iconName: "Lock" as const, 
        color: "orange" as const 
      }
    ]
  }
} as const;
