// app/data/schemes-data.ts

export interface Scheme {
  id: number;
  name: string;
  tags: string[];
  eligibility: string[];
  benefits: string[];
  whereToApply: string;
  documents: string[];
  applyLink: string;
  icon: 'Insurance' | 'Subsidy' | 'Travel' | 'Support';
  isTopScheme?: boolean;
}

export const schemesData: Scheme[] = [
  {
    id: 1,
    name: "Chief Minister's Comprehensive Health Insurance Scheme (CMCHIS)",
    tags: ["Insurance", "TN Govt", "Free Treatment"],
    eligibility: [
      "Tamil Nadu residents with annual family income below ₹1,20,000",
      "Name must be present in the family card (Ration Card)",
    ],
    benefits: [
      "Up to ₹5,00,000 coverage per family per year on a floater basis",
      "Cashless treatment at over 1,700 empanelled government and private hospitals",
      "Covers 1090 procedures, including major cancer surgeries, chemotherapy, and radiotherapy",
    ],
    whereToApply: "District Kiosk, Taluk Office, or designated Hospital Kiosks",
    documents: ["Ration Card", "Aadhaar Card", "Income Certificate"],
    applyLink: "https://www.cmchistn.com/", // Official Link
    icon: 'Insurance',
    isTopScheme: true,
  },
  {
    id: 2,
    name: "Pradhan Mantri Jan Arogya Yojana (PMJAY)",
    tags: ["Insurance", "Central Govt", "Free Treatment"],
    eligibility: [
      "Families identified based on SECC 2011 data",
      "No cap on family size or age of members",
    ],
    benefits: [
      "₹5,00,000 coverage per family per year for secondary and tertiary care",
      "Paperless and cashless access at any empanelled hospital across India",
      "Covers over 1,900 medical packages including oncology",
    ],
    whereToApply: "Check eligibility online or visit Common Service Centers (CSC)",
    documents: ["Aadhaar Card", "PMJAY e-card (if eligible)", "Ration Card"],
    applyLink: "https://beneficiary.nha.gov.in/", // Official Link
    icon: 'Insurance',
    isTopScheme: true,
  },
    {
    id: 3,
    name: "Travel Allowance for Cancer Patients (TN Govt)",
    tags: ["Travel Support", "TN Govt"],
    eligibility: [
      "Patients travelling over 50km for treatment at regional or government cancer centers",
      "Patient and one attendant are eligible",
    ],
    benefits: ["Reimbursement of travel expenses (bus/train fare) for treatment visits"],
    whereToApply: "Social Welfare or Medical Superintendent's Office at the treating hospital",
    documents: ["Treatment Records/Certificate", "Original Travel Tickets", "Residence Proof"],
    applyLink: "#", // Typically an offline process at the hospital
    icon: 'Travel',
    isTopScheme: true,
  },
  {
    id: 4,
    name: "Financial Aid from Tamil Nadu Chief Minister's Public Relief Fund",
    tags: ["Subsidies", "TN Govt", "Support"],
    eligibility: [
        "Economically weaker sections requiring high-cost treatment not fully covered by other schemes",
    ],
    benefits: [
      "One-time financial assistance based on the case's merit",
      "Aids in purchasing costly medicines or for specialized procedures",
    ],
    whereToApply: "Application to the District Collector's Office or directly to the Chief Minister's Cell",
    documents: ["Doctor's detailed report", "Income Certificate", "Identity Proof", "Petition letter"],
    applyLink: "#", // Offline application process
    icon: 'Subsidy',
  },
];