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
