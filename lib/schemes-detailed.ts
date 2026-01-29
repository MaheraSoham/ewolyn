export interface SchemeSection {
  id: string;
  title: string;
}

export interface EligibleEntity {
  title: string;
  description: string;
}

export interface EligibleProject {
  title: string;
  description: string;
  icon: string;
}

export interface BenefitHighlight {
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  cta?: string;
}

export interface CommonMistake {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DetailedScheme {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  heroDescription: string;
  heroStats: { value: string; label: string }[];
  readTime: string;
  lastUpdated: string;
  author: string;

  tableOfContents: SchemeSection[];

  introduction: {
    paragraphs: string[];
    quote?: string;
  };

  whatIs: {
    title: string;
    paragraphs: string[];
  };

  eligibility: {
    intro: string;
    entities: EligibleEntity[];
    checklist: string[];
  };

  eligibleProjects: {
    intro: string;
    projects: EligibleProject[];
  };

  benefits: {
    highlights: BenefitHighlight[];
    lendingInstitutions?: string[];
  };

  applicationProcess: {
    steps: ProcessStep[];
    timeline: string;
  };

  documents: {
    list: string[];
    note: string;
  };

  commonMistakes: CommonMistake[];

  faqs: FAQ[];

  conclusion: {
    paragraphs: string[];
    ctaTitle: string;
    ctaDescription: string;
  };
}

export const detailedSchemes: DetailedScheme[] = [
  {
    slug: "naif-scheme",
    title: "NAIF Scheme",
    subtitle: "Complete Guide to Eligibility, Benefits & Application",
    tags: ["Agriculture", "Infrastructure", "Finance"],
    heroDescription: "The National Agri Infra Financing Facility (NAIF) enables affordable financing for agricultural infrastructure such as cold storage, warehouses, processing units, and modern farming systems.",
    heroStats: [
      { value: "3%", label: "Interest Subvention" },
      { value: "₹2 Cr", label: "Max Loan" },
      { value: "7 Years", label: "Repayment Tenure" },
      { value: "2 Years", label: "Moratorium" }
    ],
    readTime: "8 min read",
    lastUpdated: "January 7, 2026",
    author: "Ewolyn Team",

    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "what-is-naif", title: "What is NAIF?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "eligible-projects", title: "Eligible Projects" },
      { id: "key-benefits", title: "Key Benefits" },
      { id: "application-process", title: "Application Process" },
      { id: "documents-required", title: "Documents Required" },
      { id: "common-mistakes", title: "Common Mistakes" },
      { id: "faqs", title: "FAQs" }
    ],

    introduction: {
      paragraphs: [
        "The NAIF Scheme (National Agri Infra Financing Facility) is a government initiative designed to boost the agricultural infrastructure in India.",
        "With the agriculture sector playing a crucial role in the Indian economy, improving infrastructure like cold storage, warehouses, and processing units is essential for enhancing productivity and reducing post-harvest losses.",
        "Through NAIF, entrepreneurs, startups, and businesses in the agriculture sector can access affordable loans to fund such projects, contributing to a more sustainable and efficient agriculture ecosystem."
      ],
      quote: "The NAIF Scheme aims to make the agricultural value chain more efficient, reduce waste, and increase farmers' income through improved infrastructure."
    },

    whatIs: {
      title: "What is the Agriculture Infrastructure Fund (NAIF / AIF)?",
      paragraphs: [
        "The Agriculture Infrastructure Fund (NAIF) is a financial scheme introduced by the Government of India to support the creation and modernization of agriculture infrastructure projects.",
        "This scheme aims to enhance the storage, processing, and logistics capacity of the agricultural sector. The ultimate goal is to make the agricultural value chain more efficient, reduce waste, and increase farmers' income.",
        "Through NAIF, financial assistance is provided for setting up new agriculture infrastructure such as cold storage, warehouses, processing units, and custom hiring centers. This initiative is vital for increasing the shelf life of agricultural products and improving market access for farmers."
      ]
    },

    eligibility: {
      intro: "The NAIF Scheme is available to a wide range of agricultural businesses and entrepreneurs:",
      entities: [
        {
          title: "FPOs (Farmer Producer Organizations)",
          description: "Registered farmer groups or organizations working towards enhancing agricultural productivity and improving market access."
        },
        {
          title: "Private Companies",
          description: "Private companies involved in the agriculture sector, aiming to build or upgrade infrastructure."
        },
        {
          title: "Individual Entrepreneurs",
          description: "Any individual looking to invest in agricultural infrastructure projects."
        },
        {
          title: "Startups",
          description: "New ventures in the agri-sector focused on innovation and modern infrastructure development."
        },
        {
          title: "MSMEs (Micro, Small, and Medium Enterprises)",
          description: "Small-scale businesses that contribute to agriculture-related processing and infrastructure."
        }
      ],
      checklist: [
        "The land for the project must be owned or leased for at least 7–8 years.",
        "The project must involve new agricultural infrastructure development."
      ]
    },

    eligibleProjects: {
      intro: "The NAIF Scheme primarily focuses on new agriculture infrastructure projects:",
      projects: [
        {
          title: "Cold Storage",
          description: "Establishment or modernization of cold storage units to preserve perishable products.",
          icon: "❄️"
        },
        {
          title: "Primary Processing Units",
          description: "Setting up processing units for raw agricultural produce, improving quality and marketability.",
          icon: "🏭"
        },
        {
          title: "Warehouses",
          description: "Construction of warehouses for storing agricultural products in bulk, reducing post-harvest losses.",
          icon: "🏢"
        },
        {
          title: "Custom Hiring Centers",
          description: "Establishing facilities where farmers can hire modern machinery at affordable rates.",
          icon: "🚜"
        },
        {
          title: "Green House & Poly House",
          description: "Setting up controlled environment farming structures for growing high-value crops.",
          icon: "🌿"
        },
        {
          title: "Vertical Farming",
          description: "Infrastructure for multi-layered farming systems that save space and water while increasing productivity.",
          icon: "🌱"
        }
      ]
    },

    benefits: {
      highlights: [
        {
          value: "3%",
          label: "Interest Subvention",
          description: "The borrower gets the benefit of a lower interest rate compared to standard market rates. Approximate ROI is around 9%.",
          icon: "💰"
        },
        {
          value: "7 Years",
          label: "Repayment Tenure",
          description: "With an additional 2-year moratorium period, allowing you to focus on setting up and running the infrastructure before starting repayments.",
          icon: "📅"
        }
      ],
      lendingInstitutions: [
        "National Bank for Agriculture and Rural Development (NABARD)",
        "Commercial Banks (State Bank of India, HDFC, etc.)",
        "Regional Rural Banks (RRBs)",
        "Scheduled Banks"
      ]
    },

    applicationProcess: {
      steps: [
        {
          title: "Prepare the Project Report (DPR)",
          description: "Create a detailed project report with technical, financial, and operational details of your agricultural infrastructure project.",
          cta: "Need help preparing your DPR? Contact us"
        },
        {
          title: "Eligibility Check",
          description: "The lender verifies land documents, business structure, financial stability, and project type to ensure you meet all criteria."
        },
        {
          title: "Submit Application",
          description: "Upload your DPR, supporting documents, and business details through the designated financing institution."
        },
        {
          title: "Loan Sanctioning",
          description: "Bank reviews the project, inspects the land if required, and approves the loan with interest subvention benefits."
        },
        {
          title: "Loan Disbursement",
          description: "Funds are released as per project milestones and bank guidelines. Approval typically takes 2–6 weeks."
        }
      ],
      timeline: "The approval process for the NAIF Scheme can take anywhere from 2 to 6 weeks, depending on the complexity of the project and the lender's internal processing time."
    },

    documents: {
      list: [
        "Project Report (DPR)",
        "Land Ownership/Lease Documents",
        "Identity Proof (Aadhar, PAN, etc.)",
        "Business Registration Documents",
        "GST Registration",
        "Bank Statements (6-12 months)",
        "Financial Statements"
      ],
      note: "A tailored document checklist is provided during onboarding along with DPR templates and financial formats."
    },

    commonMistakes: [
      {
        title: "Incomplete Project Reports",
        description: "Missing or unclear details in the project report can lead to delays or rejection."
      },
      {
        title: "Ineligible Land",
        description: "Using leased land with insufficient tenure (less than 7-8 years) can disqualify you from the scheme."
      },
      {
        title: "Incorrect Financial Documents",
        description: "Ensure all financial documents are accurate and up-to-date to avoid delays in loan disbursement."
      },
      {
        title: "Failure to Meet Eligibility",
        description: "Applicants sometimes assume they are eligible without checking the detailed criteria, leading to rejection."
      }
    ],

    faqs: [
      {
        question: "What is the full form of NAIF?",
        answer: "NAIF stands for National Agri Infra Financing Facility, a government initiative to fund agricultural infrastructure projects."
      },
      {
        question: "What types of projects are eligible for NAIF funding?",
        answer: "Eligible projects include cold storage, warehouses, processing units, polyhouse/greenhouse, vertical farming, and custom hiring centers."
      },
      {
        question: "How can I apply for the NAIF Scheme?",
        answer: "The application involves preparing a project report (DPR), checking eligibility, and submitting your application through an authorized financial institution like NABARD or commercial banks."
      },
      {
        question: "What is the interest rate on NAIF loans?",
        answer: "NAIF offers an interest subvention of 3%, with an approximate ROI of 9% on loans."
      },
      {
        question: "Who can apply for the NAIF Scheme?",
        answer: "Eligibility includes FPOs, startups, MSMEs, private companies, and individual entrepreneurs in the agriculture sector."
      },
      {
        question: "How long does it take to get approval under the NAIF scheme?",
        answer: "Loan approval can take 2 to 6 weeks depending on the project complexity and lender's processing time."
      }
    ],

    conclusion: {
      paragraphs: [
        "The NAIF Scheme offers a fantastic opportunity for agricultural businesses, startups, and MSMEs to improve their infrastructure with affordable financing options.",
        "With an attractive loan amount of up to ₹2 Crore, 3% interest subvention, and 7-year repayment tenure, this scheme can help enhance the agricultural value chain and drive innovation in the sector.",
        "Whether you're setting up cold storage, warehouses, or processing units, NAIF is a great resource for securing funding. If you need expert help in applying for the NAIF scheme, our consultancy team is ready to assist you from preparing your DPR to coordinating with banks for faster approval."
      ],
      ctaTitle: "Need Assistance With NAIF Application?",
      ctaDescription: "Get expert help to prepare your DPR, validate eligibility, and coordinate with banks for faster approval."
    }
  },
  {
    slug: "pm-mudra-yojana",
    title: "PM MUDRA Yojana",
    subtitle: "Complete Guide to Eligibility, Benefits & Application",
    tags: ["MSME", "Business Loan", "Finance"],
    heroDescription: "Pradhan Mantri MUDRA Yojana provides collateral-free loans up to ₹10 lakh to micro enterprises for business growth and expansion.",
    heroStats: [
      { value: "₹10L", label: "Max Loan" },
      { value: "0%", label: "Collateral" },
      { value: "5 Years", label: "Repayment" },
      { value: "3 Types", label: "Shishu/Kishore/Tarun" }
    ],
    readTime: "7 min read",
    lastUpdated: "January 7, 2026",
    author: "Ewolyn Team",

    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "what-is-mudra", title: "What is MUDRA?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "loan-categories", title: "Loan Categories" },
      { id: "key-benefits", title: "Key Benefits" },
      { id: "application-process", title: "Application Process" },
      { id: "documents-required", title: "Documents Required" },
      { id: "common-mistakes", title: "Common Mistakes" },
      { id: "faqs", title: "FAQs" }
    ],

    introduction: {
      paragraphs: [
        "Pradhan Mantri MUDRA Yojana (PMMY) is a flagship scheme launched by the Government of India to provide loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.",
        "The scheme aims to bring millions of small businesses into the formal financial system and help them grow with affordable credit.",
        "MUDRA loans are available from banks, NBFCs, and MFIs across India, making it one of the most accessible funding options for small entrepreneurs."
      ],
      quote: "MUDRA Yojana is transforming the lives of small entrepreneurs by providing easy access to credit without the need for collateral."
    },

    whatIs: {
      title: "What is MUDRA (Micro Units Development & Refinance Agency)?",
      paragraphs: [
        "MUDRA is a refinancing institution that provides funding support to banks, NBFCs, and MFIs for on-lending to micro enterprises.",
        "The scheme categorizes loans into three segments: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh).",
        "These categories help address different stages of business growth and varying funding requirements of micro entrepreneurs."
      ]
    },

    eligibility: {
      intro: "MUDRA loans are available to a wide range of business owners:",
      entities: [
        {
          title: "Small Business Owners",
          description: "Proprietors of small shops, vendors, and service providers."
        },
        {
          title: "Manufacturers",
          description: "Small manufacturing units and artisans producing goods."
        },
        {
          title: "Service Providers",
          description: "Tailors, salons, repair shops, and other service businesses."
        },
        {
          title: "Traders",
          description: "Small traders and shopkeepers involved in retail business."
        },
        {
          title: "Allied Agriculture",
          description: "Activities like dairy, poultry, beekeeping, and fishery."
        }
      ],
      checklist: [
        "Must be an Indian citizen above 18 years of age.",
        "Should have a viable business plan for non-farm income generating activity.",
        "Business should not be involved in agricultural activities directly."
      ]
    },

    eligibleProjects: {
      intro: "MUDRA loans can be used for various business purposes:",
      projects: [
        {
          title: "Working Capital",
          description: "Day-to-day business expenses, inventory purchase, and operational costs.",
          icon: "💵"
        },
        {
          title: "Machinery Purchase",
          description: "Buying equipment and machinery for manufacturing or service delivery.",
          icon: "⚙️"
        },
        {
          title: "Business Expansion",
          description: "Opening new outlets, expanding production capacity, or diversifying services.",
          icon: "📈"
        },
        {
          title: "Transport Vehicles",
          description: "Purchase of vehicles for goods transportation or passenger services.",
          icon: "🚛"
        },
        {
          title: "Shop Renovation",
          description: "Upgrading business premises, interiors, and facilities.",
          icon: "🏪"
        },
        {
          title: "Technology Upgrade",
          description: "Investing in computers, software, and digital infrastructure.",
          icon: "💻"
        }
      ]
    },

    benefits: {
      highlights: [
        {
          value: "₹10L",
          label: "Max Loan Amount",
          description: "Get loans up to ₹10 lakh under the Tarun category for established businesses.",
          icon: "💰"
        },
        {
          value: "0%",
          label: "Collateral Required",
          description: "No collateral or third-party guarantee required for MUDRA loans.",
          icon: "🔓"
        }
      ],
      lendingInstitutions: [
        "Public Sector Banks (SBI, PNB, BOB, etc.)",
        "Private Sector Banks (HDFC, ICICI, Axis, etc.)",
        "Regional Rural Banks",
        "Microfinance Institutions (MFIs)",
        "NBFCs"
      ]
    },

    applicationProcess: {
      steps: [
        {
          title: "Choose the Right Category",
          description: "Select Shishu (up to ₹50K), Kishore (up to ₹5L), or Tarun (up to ₹10L) based on your funding needs.",
          cta: "Need help choosing? Contact us"
        },
        {
          title: "Prepare Business Plan",
          description: "Create a simple business plan outlining your business model, revenue projections, and fund utilization."
        },
        {
          title: "Visit Bank/NBFC",
          description: "Approach any scheduled bank, NBFC, or MFI with your documents and business plan."
        },
        {
          title: "Application Submission",
          description: "Fill the MUDRA loan application form and submit with required documents."
        },
        {
          title: "Loan Disbursement",
          description: "After verification and approval, loan amount is disbursed to your account."
        }
      ],
      timeline: "MUDRA loans are typically processed within 7-15 working days depending on the loan amount and lender."
    },

    documents: {
      list: [
        "Identity Proof (Aadhaar, PAN, Voter ID)",
        "Address Proof (Utility bills, Aadhaar)",
        "Passport Size Photographs",
        "Business Proof/Registration",
        "Bank Statements (6 months)",
        "Business Plan or Project Report",
        "Quotations for machinery (if applicable)"
      ],
      note: "Document requirements may vary slightly between lenders. We help you prepare a complete documentation package."
    },

    commonMistakes: [
      {
        title: "Unclear Business Purpose",
        description: "Not clearly defining how the loan will be used can lead to rejection."
      },
      {
        title: "Incomplete Documentation",
        description: "Missing documents or incorrect information causes delays and rejections."
      },
      {
        title: "Poor Credit History",
        description: "Existing defaults or poor CIBIL score can affect loan approval."
      },
      {
        title: "Unrealistic Projections",
        description: "Overstating revenue or understating expenses in the business plan."
      }
    ],

    faqs: [
      {
        question: "What is the interest rate on MUDRA loans?",
        answer: "Interest rates vary between 8-12% depending on the lender and loan category. There is no fixed rate mandated by the government."
      },
      {
        question: "Can I apply for MUDRA loan online?",
        answer: "Yes, you can apply through the Udyamimitra portal or directly visit a bank branch."
      },
      {
        question: "Is there any subsidy on MUDRA loans?",
        answer: "MUDRA loans don't have direct subsidies, but some state governments offer interest subvention schemes."
      },
      {
        question: "Can I get a MUDRA loan for agriculture?",
        answer: "Direct agriculture is not covered, but allied activities like dairy, poultry, and fishery are eligible."
      },
      {
        question: "What is the repayment period for MUDRA loans?",
        answer: "Repayment period ranges from 3 to 5 years depending on the loan amount and lender terms."
      },
      {
        question: "Can existing business owners apply?",
        answer: "Yes, both new and existing businesses can apply for MUDRA loans."
      }
    ],

    conclusion: {
      paragraphs: [
        "PM MUDRA Yojana has revolutionized access to credit for small entrepreneurs across India.",
        "With collateral-free loans up to ₹10 lakh, flexible repayment options, and wide availability through banks and NBFCs, MUDRA makes business funding accessible to everyone.",
        "Whether you're starting a new venture or expanding an existing business, MUDRA can provide the financial support you need."
      ],
      ctaTitle: "Need Assistance With MUDRA Application?",
      ctaDescription: "Get expert help to prepare your application, choose the right lender, and ensure quick approval."
    }
  },
  {
    slug: "sc-st-obc-scheme",
    title: "SC / ST / OBC Scheme",
    subtitle: "Financial Empowerment for Reserved Categories",
    tags: ["Inclusion", "Subsidy", "Entrepreneurship"],
    heroDescription: "Specialized government schemes providing high-subsidy loans and capital assistance for entrepreneurs belonging to SC, ST, and OBC categories.",
    heroStats: [
      { value: "35%", label: "Max Subsidy" },
      { value: "₹5 Cr", label: "Limit" },
      { value: "4%", label: "Interest Rate" },
      { value: "Equity", label: "Support" }
    ],
    readTime: "7 min read",
    lastUpdated: "January 20, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "what-is-it", title: "What is the Scheme?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "benefits", title: "Special Benefits" },
      { id: "process", title: "Application Process" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "The Government of India has introduced several dedicated schemes like Stand-Up India and various State-level OBC finance corporations to ensure inclusive economic growth.",
        "These schemes are specifically designed to overcome historical barriers by providing low-interest credit and substantial capital subsidies to SC/ST and OBC entrepreneurs.",
        "Whether you are starting a manufacturing unit or a service business, these schemes provide the necessary financial cushion to succeed."
      ],
      quote: "Economic independence is the foundation of social dignity. These schemes are built to empower every Indian to be a job creator."
    },
    whatIs: {
      title: "What are the SC/ST/OBC Empowerment Schemes?",
      paragraphs: [
        "These are a cluster of schemes including Stand-Up India, Venture Capital Fund for Scheduled Castes (VCF-SC), and various Ambedkar Business Schemes.",
        "They offer a mix of term loans, working capital, and capital subsidies. The primary focus is on promoting first-generation entrepreneurs from reserved categories.",
        "Unlike general schemes, these often have lower interest rates, relaxed collateral requirements, and dedicated mentorship support."
      ]
    },
    eligibility: {
      intro: "Eligibility is primarily based on category and business intent:",
      entities: [
        { title: "Individual Entrepreneurs", description: "Must possess a valid Caste Certificate issued by competent authority." },
        { title: "Majority Owned Businesses", description: "Enterprises where at least 51% stake is held by SC/ST/OBC individuals." },
        { title: "Women Entrepreneurs", description: "Special priority is given to SC/ST women under the Stand-Up India scheme." }
      ],
      checklist: [
        "Valid Caste Certificate.",
        "Age between 18 to 65 years.",
        "No previous default with any bank."
      ]
    },
    eligibleProjects: {
      intro: "Eligible project types include:",
      projects: [
        { title: "Manufacturing", description: "Small and medium manufacturing units in any sector.", icon: "🏭" },
        { title: "Service Sector", description: "IT services, logistics, beauty salons, clinics, etc.", icon: "💻" },
        { title: "Trading", description: "Retail and wholesale trade businesses.", icon: "🛒" },
        { title: "Agri-Allied", description: "Poultry, dairy, and food processing.", icon: "🐄" }
      ]
    },
    benefits: {
      highlights: [
        { value: "35%", label: "Subsidy", description: "Up to 35% margin money subsidy in specific rural areas.", icon: "📉" },
        { value: "4-7%", label: "Low Interest", description: "Concessional interest rates significantly lower than market averages.", icon: "📉" }
      ],
      lendingInstitutions: ["SIDBI", "IFCI", "Public Sector Banks", "State Finance Corporations"]
    },
    applicationProcess: {
      steps: [
        { title: "Category Validation", description: "Verification of caste and income certificates.", cta: "Check your subsidy eligibility" },
        { title: "Project Selection", description: "Identifying a viable business model from the 'Greenfield' list." },
        { title: "DPR Preparation", description: "Creating a detailed project report emphasizing job creation." },
        { title: "Bank Coordination", description: "Assisting in loan application through Portals like StandUp Mitra." }
      ],
      timeline: "30-60 days from application to disbursement."
    },
    documents: {
      list: ["Caste Certificate", "Income Certificate", "Identity & Address Proof", "Business Project Report", "Partnership Deed/MOA", "GST Registration"],
      note: "Caste certificate must be digitally verifiable for faster processing."
    },
    commonMistakes: [
      { title: "Invalid Certificates", description: "Using state-level certificates for central schemes or vice-versa." },
      { title: "Brownfield Projects", description: "Applying for existing units instead of new (Greenfield) projects under Stand-Up India." }
    ],
    faqs: [
      { question: "Is collateral required?", answer: "For loans up to ₹2 Crore under CGTMSE or specific SC/ST schemes, collateral-free options are available." },
      { question: "Can I combine this with PMEGP?", answer: "Certain components can be combined, but double subsidy on the same asset is generally not allowed." }
    ],
    conclusion: {
      paragraphs: ["The path to entrepreneurship should be accessible to all. These schemes ensure that financial constraints don't stop talented individuals from reserved categories from achieving their dreams.", "We specialize in navigating these category-specific schemes to maximize your subsidy and approval chances."],
      ctaTitle: "Claim Your Special Benefits",
      ctaDescription: "Talk to our experts about the highest subsidy available for your category."
    }
  },
  {
    slug: "venture-capital-support",
    title: "Venture Capital Support",
    subtitle: "Scaling Beyond Limits with Strategic Equity",
    tags: ["Equity", "Scale", "VC"],
    heroDescription: "End-to-end support for startups reaching for Series A, B and beyond. We connect you with India's leading Angel networks and VC firms.",
    heroStats: [
      { value: "₹2Cr+", label: "Target Funding" },
      { value: "Equity", label: "Model" },
      { value: "Mentorship", label: "Included" },
      { value: "Global", label: "Network" }
    ],
    readTime: "10 min read",
    lastUpdated: "January 28, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "investor-readiness", title: "Investor Readiness" },
      { id: "matching", title: "Investor Matching" },
      { id: "due-diligence", title: "Due Diligence" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "When business traction is proven and it's time to capture the market, Venture Capital (VC) is the fuel you need. But VC funding is more than just a check—it's a marriage of vision and execution.",
        "Getting in front of the right investors and surviving the due diligence process requires a level of professional preparation that most founders struggle with alone.",
        "Our VC support program prepares your business for the high-intensity scrutiny of professional investors and ensures you get the best possible valuation."
      ],
      quote: "Funding is not a milestone, it's just fuel. Choose the right station to refuel your journey."
    },
    whatIs: {
      title: "How We Support Your VC Journey",
      paragraphs: [
        "We act as your 'Investment Banking' arm. We don't just find investors; we prepare your data room, refine your unit economics, and coach you through the pitch process.",
        "From Seed-plus rounds to Growth equity, we have a network of 100+ Angel Investors, 20+ Micro-VCs, and access to all major Indian VC firms.",
        "Our focus is beyond the money. We help you find 'Smart Capital'—investors who bring industry expertise, hiring support, and global connections."
      ]
    },
    eligibility: {
      intro: "VCs look for 'Unicorn' potential. You are ready if:",
      entities: [
        { title: "Scalable Model", description: "Your business can grow 10x without 10x increase in costs." },
        { title: "Proven Traction", description: "Steady month-on-month growth in revenue or users." },
        { title: "Strong Moat", description: "A unique technology, brand, or network effect that protects you from competitors." }
      ],
      checklist: [
        "Product-Market Fit must be evident.",
        "Clean capitalization table (Cap Table).",
        "Full-time founding team with relevant expertise."
      ]
    },
    eligibleProjects: {
      intro: "We support ventures in:",
      projects: [
        { title: "Aggressive Expansion", description: "Entering new cities or international markets.", icon: "🌐" },
        { title: "Tech R&D", description: "Investing in cutting-edge AI, Hardware, or DeepTech.", icon: "🧪" },
        { title: "Talent Acquisition", description: "Hiring top-tier leadership and engineering teams.", icon: "👨‍💻" },
        { title: "Marketing & Brand", description: "Establishing a household brand name through mass outreach.", icon: "📢" }
      ]
    },
    benefits: {
      highlights: [
        { value: "Valuation", label: "Optimization", description: "Expert guidance to ensure you don't dilute too much equity for too little capital.", icon: "📈" },
        { value: "Term Sheet", label: "Advisory", description: "Protecting founder interests in complex legal documents.", icon: "📜" }
      ],
      lendingInstitutions: ["Angel Networks (IAN, Mumbai Angels)", "Micro-VCs", "Tier-1 VCs (Sequoia, Accel, etc.)", "Family Offices"]
    },
    applicationProcess: {
      steps: [
        { title: "Readiness Audit", description: "Reviewing your financials, business model, and tech stack.", cta: "Book a Pitch Review" },
        { title: "Deck & Data Room", description: "Building a world-class pitch deck and a 'Ready-to-Invest' data room." },
        { title: "The Roadshow", description: "Setting up meetings with targeted investors through warm introductions." },
        { title: "Closing", description: "Negotiating term sheets and finishing the legal due diligence." }
      ],
      timeline: "3-9 months. VC fundraising is a marathon, not a sprint."
    },
    documents: {
      list: ["Detailed Investment Deck", "5-Year Financial Model", "Unit Economics Sheet", "Competitive Analysis", "Founder CVs", "Client Testimonials/Metrics"],
      note: "Your 'Data Room' should be ready before the first investor meeting."
    },
    commonMistakes: [
      { title: "Wrong Investor Fit", description: "Pitching to a fintech VC when you are a healthtech startup." },
      { title: "Unprepared Diligence", description: "Having messy accounting or legal gaps that kill the deal at the last minute." }
    ],
    faqs: [
      { question: "How much equity should I give?", answer: "Typically 15-25% in a Seed/Series A round, but it depends on valuation and round size." },
      { question: "Do you charge upfront?", answer: "We have a hybrid model of small retainer and success-based equity/cash fee." }
    ],
    conclusion: {
      paragraphs: ["Venture Capital is a high-speed game. If you have the ambition and the engine, we provide the high-octane fuel and the navigator to win the race.", "Let's turn your startup into a legendary company."],
      ctaTitle: "Ready to Scale to the Moon?",
      ctaDescription: "Let's audit your investor-readiness today."
    }
  },
  {
    slug: "psb-loans-59-minutes",
    title: "PSB 59 Minute Loan",
    subtitle: "Fastest In-Principle Approval for MSMEs",
    tags: ["Fast", "Digital", "In-Principle"],
    heroDescription: "A digital platform providing contactless, fast, and transparent 'In-Principle' approval for business loans up to ₹5 Crore.",
    heroStats: [
      { value: "59 Min", label: "Approval Time" },
      { value: "₹5 Cr", label: "Max Loan" },
      { value: "Digital", label: "Process" },
      { value: "MSME", label: "Focused" }
    ],
    readTime: "5 min read",
    lastUpdated: "January 10, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "features", title: "Key Features" },
      { id: "eligibility", title: "Eligibility" },
      { id: "process", title: "Process" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "In the fast-paced business world, waiting weeks for a loan response is not an option. PSB Loans in 59 Minutes is a government-backed fintech platform that changed the lending landscape.",
        "It uses advanced algorithms to analyze your GST, Income Tax, and Bank statements digitally to provide an 'In-Principle' approval in less than an hour.",
        "Once you have this approval, you can approach the bank with the letter, which significantly speeds up the final disbursement process."
      ],
      quote: "Speed is the new currency. Get approved at the speed of your thoughts."
    },
    whatIs: {
      title: "How does it work?",
      paragraphs: [
        "The platform acts as an aggregator. You upload your digital footprints, and it matches you with the best bank products across Public and Private sectors.",
        "The process is completely contactless. It reduces the time for 'In-Principle' approval from 20-25 days to just 59 minutes.",
        "The loans can be for Term Loans or Working Capital, and can be integrated with CGTMSE for collateral-free benefits."
      ]
    },
    eligibility: {
      intro: "To get approved, you need strong digital credentials:",
      entities: [
        { title: "GST Registered Units", description: "GST details are mandatory for most business loan types on the portal." },
        { title: "IT Filers", description: "You should have scanned copies of your ITR for the last 3 years." },
        { title: "Formal Banking", description: "Active bank accounts with data that can be fetched via Net Banking or Statement upload." }
      ],
      checklist: [
        "GST Identification Number (GSTIN).",
        "Income Tax Returns in XML format.",
        "6 Months Bank Statement in PDF."
      ]
    },
    eligibleProjects: {
      intro: "Loan types include:",
      projects: [
        { title: "MSME Loans", description: "Business loans up to ₹5 Crore.", icon: "🏢" },
        { title: "Personal Loans", description: "For salaried individuals.", icon: "👤" },
        { title: "Home Loans", description: "For residential property purchase.", icon: "🏠" },
        { title: "Auto Loans", description: "For vehicle purchase.", icon: "🚗" }
      ]
    },
    benefits: {
      highlights: [
        { value: "59 Min", label: "Speed", description: "Real-time analysis and instant approval letter.", icon: "⚡" },
        { value: "Multiple", label: "Bank Options", description: "Choose from 20+ Public and Private Sector banks.", icon: "🏦" }
      ],
      lendingInstitutions: ["SBI", "Union Bank", "Bank of Baroda", "IDBI", "ICICI Bank", "Standard Chartered"]
    },
    applicationProcess: {
      steps: [
        { title: "Registration", description: "Register with mobile and email on the official portal.", cta: "Apply on PSB 59 Portal" },
        { title: "Digital Upload", description: "Uploading GST, ITR, and Bank Statements." },
        { title: "Bank Selection", description: "Choosing the bank and branch based on the offers generated." },
        { title: "Approval Letter", description: "Paying a small convenience fee to download the In-Principle approval letter." }
      ],
      timeline: "59 minutes for approval; 7-10 days for disbursement."
    },
    documents: {
      list: ["GST User ID & Password", "Income Tax XML Files", "Bank Statements (PDF)", "Director/Partner Details", "Udyam Certificate"],
      note: "Ensure your mobile number is linked with Aadhaar and GST for OTP verifications."
    },
    commonMistakes: [
      { title: "Invalid XML", description: "Uploading regular PDF of ITR instead of the XML/JSON file from the IT portal." },
      { title: "Mismatched Data", description: "Differences in PAN/GST and Bank name details." }
    ],
    faqs: [
      { question: "Is this a final sanction?", answer: "No, it is an 'In-Principle' approval. The bank will still do physical verification before final sanction." },
      { question: "What is the fee?", answer: "The platform charges a fee of ₹1,000 + GST for the approval letter." }
    ],
    conclusion: {
      paragraphs: ["PSB 59 Minutes is the best starting point for any MSME looking for a transparent and fast loan process.", "We help you prepare your digital documents and select the bank branch that is most likely to complete the final disbursement quickly."],
      ctaTitle: "Get Approved Today",
      ctaDescription: "Let's get your digital documents ready for the 59-minute challenge."
    }
  },
  {
    slug: "clcs-tus-msme-champions",
    title: "MSME Champions",
    subtitle: "Technology Upgradation & Competitiveness",
    tags: ["Technology", "Subsidy", "Innovation"],
    heroDescription: "The Credit Linked Capital Subsidy for Technology Upgradation (CLCSS) and MSME Champions scheme helps MSMEs modernize their production techniques.",
    heroStats: [
      { value: "15%", label: "Capital Subsidy" },
      { value: "₹15L", label: "Max Subsidy" },
      { value: "51+", label: "Industries" },
      { value: "Zero", label: "Defect/Effect" }
    ],
    readTime: "8 min read",
    lastUpdated: "January 15, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "features", title: "Key Features" },
      { id: "eligibility", title: "Eligibility" },
      { id: "benefits", title: "Benefits" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "In a globalized market, MSMEs need to stay competitive by using the latest machinery. The CLCS-TUS scheme provides integrated support for technology upgradation, design, intellectual property rights, and quality certification.",
        "It aims to facilitate technology upgradation by providing 15% upfront capital subsidy to MSMEs for induction of well-established and improved technologies in the specified sub-sectors.",
        "The scheme is now part of the larger 'MSME Champions' umbrella, which also includes ZED (Zero Defect Zero Effect) certification support."
      ],
      quote: "Modern technology is not an expense—it is the best investment for global survival."
    },
    whatIs: {
      title: "What is the CLCS-TUS Scheme?",
      paragraphs: [
        "The scheme is designed to help MSMEs move from outdated technology to state-of-the-art production methods. The 15% subsidy helps reduce the effective cost of new machinery significantly.",
        "It covers over 51 sub-sectors including Food Processing, Corrugated Boxes, Leather, Electronics, and Textiles.",
        "Under the 'Design' component, the government also provides financial assistance for hiring professional design consultants for product improvement."
      ]
    },
    eligibility: {
      intro: "Who is eligible?",
      entities: [
        { title: "Existing MSMEs", description: "Units looking to modernize their current production lines." },
        { title: "New MSMEs", description: "Startups setting up with advanced technologies from day one." },
        { title: "Export Units", description: "Units aiming for quality improvements for international markets." }
      ],
      checklist: [
        "Must have valid Udyam Registration.",
        "Project must use technologies approved by the Technical Subcommittee (TSC).",
        "Must source the loan from eligible PLIs (Primary Lending Institutions)."
      ]
    },
    eligibleProjects: {
      intro: "Supported activities:",
      projects: [
        { title: "Modern Machinery", description: "Purchase of high-efficiency production equipment.", icon: "⚙️" },
        { title: "ZED Certification", description: "Applying for Zero Defect Zero Effect quality mark.", icon: "✅" },
        { title: "IPR Support", description: "Filing for Patents, Trademarks, and Designs.", icon: "🎨" }
      ]
    },
    benefits: {
      highlights: [
        { value: "15%", label: "Upfront Subsidy", description: "Direct credit to your loan account reducing principal.", icon: "📉" },
        { value: "₹15L", label: "Max Subsidy", description: "Calculated on a project cost up to ₹1 Crore.", icon: "📈" }
      ],
      lendingInstitutions: ["SIDBI", "NABARD", "All Public Sector Banks", "Select Cooperative Banks"]
    },
    applicationProcess: {
      steps: [
        { title: "Technology Selection", description: "Choosing the machine that falls under the approved list.", cta: "See approved technology list" },
        { title: "Loan Application", description: "Applying for a term loan at your bank specifically mentioning CLCSS." },
        { title: "Online Upload", description: "Uploading the claim for subsidy on the MSME portal through the bank." },
        { title: "Release of Funds", description: "Subsidy is released after the inspection of the machine." }
      ],
      timeline: "6-12 months for subsidy release."
    },
    documents: {
      list: ["Udyam Registration", "Proforma Invoice for Machinery", "Bank Sanction Letter", "Balance Sheets of last 3 years", "Techno-Economic Viability Report"],
      note: "Subsidy is subject to the availability of funds with the Ministry. First-come, first-served!"
    },
    commonMistakes: [
      { title: "Non-Approved Tech", description: "Buying machinery that is not in the approved technology list of the ministry." },
      { title: "Delayed Claim", description: "Failing to upload the subsidy claim within the stipulated time after loan disbursement." }
    ],
    faqs: [
      { question: "Is the subsidy taxable?", answer: "No, it is treated as a capital receipt and not as revenue income." },
      { question: "Can I get this for used machinery?", answer: "No, the scheme is strictly for NEW technology induction." }
    ],
    conclusion: {
      paragraphs: ["The MSME Champions scheme is the key to turning a local shop into a global factory. High quality and low cost are only possible through technology.", "We help you navigate the complex list of approved technologies and handle the subsidy application through your bank."],
      ctaTitle: "Modernize Your Factory",
      ctaDescription: "Let's check if your machinery qualifies for the 15% upfront subsidy."
    }
  },
  {
    slug: "sfurti-traditional-industries",
    title: "SFURTI Scheme",
    subtitle: "Modernizing Traditional Artisan Clusters",
    tags: ["Artisans", "Cluster", "Rural"],
    heroDescription: "Scheme of Fund for Regeneration of Traditional Industries (SFURTI) aims to organize traditional industries and artisans into clusters for competitiveness.",
    heroStats: [
      { value: "₹5 Cr", label: "Max Grant (Major)" },
      { value: "90%", label: "Govt. Contribution" },
      { value: "Group", label: "Development" },
      { value: "KVIC", label: "Nodal Agency" }
    ],
    readTime: "7 min read",
    lastUpdated: "January 10, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "cluster-types", title: "Types of Clusters" },
      { id: "eligibility", title: "Eligibility" },
      { id: "benefits", title: "Benefits" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "India's traditional industries—like Khadi, village industries, and coir—are rich in heritage but often lack modern market access. SFURTI is a cluster-based scheme to make these industries productive and sustainable.",
        "It focuses on grouping artisans together and providing them with Common Facility Centers (CFCs), modern machinery, and training.",
        "The goal is to provide sustainable employment for rural artisans and help them reach national and international consumers."
      ],
      quote: "Heritage is our strength; technology is our bridge to the future. SFURTI empowers the hands that hold our traditions."
    },
    whatIs: {
      title: "What is the SFURTI Scheme?",
      paragraphs: [
        "SFURTI provides grants for infrastructure and capability building. It is NOT for individual artisans but for groups of artisans organized as a Special Purpose Vehicle (SPV).",
        "It covers 'Soft Interventions' (training, exposure visits) and 'Hard Interventions' (machinery, CFCs, raw material banks).",
        "The government contributes up to 90% of the project cost, making it one of the most generous grant schemes in India."
      ]
    },
    eligibility: {
      intro: "Who can initiate a SFURTI cluster?",
      entities: [
        { title: "NGOs", description: "Non-Governmental Organizations with experience in rural development." },
        { title: "Statutory Bodies", description: "KVIC, KVIB, Coir Board, and State Government Agencies." },
        { title: "PRIs", description: "Panchayati Raj Institutions involved in artisan welfare." }
      ],
      checklist: [
        "Minimum 500 artisans for Major clusters; 250 for Regular clusters.",
        "Provision of land for the CFC by the IA (Implementing Agency).",
        "Minimum 3 years of experience in the specific artisan sector."
      ]
    },
    eligibleProjects: {
      intro: "Sectors covered:",
      projects: [
        { title: "Honey & Beekeeping", description: "Cluster and processing units for forest-based honey.", icon: "🐝" },
        { title: "Bamboo Products", description: "Modern furniture and utility items from bamboo.", icon: "🎋" },
        { title: "Coir & Jute", description: "Traditional fiber products with modern designs.", icon: "🧶" },
        { title: "Handicrafts", description: "Metal craft, pottery, woodcraft, and textiles.", icon: "🏺" }
      ]
    },
    benefits: {
      highlights: [
        { value: "₹2.5 Cr", label: "Regular Cluster", description: "For clusters with 250 to 500 artisans.", icon: "👥" },
        { value: "90%", label: "Grants", description: "Government covers almost the entire cost of the project.", icon: "🎁" }
      ],
      lendingInstitutions: ["Ministry of MSME", "KVIC", "KVIB", "Coir Board"]
    },
    applicationProcess: {
      steps: [
        { title: "Cluster Mapping", description: "Identifying a region with high density of specific artisans.", cta: "Start a cluster proposal" },
        { title: "DSR Preparation", description: "Submitting a Diagnostic Study Report to the nodal agency." },
        { title: "DPR & Approval", description: "Detailed Project Report evaluation by the Scheme Steering Committee (SSC)." },
        { title: "Implementation", description: "Setting up the CFC and training the artisans." }
      ],
      timeline: "12-18 months for full setup."
    },
    documents: {
      list: ["NGO/IA Registration Documents", "List of Artisans with Aadhaar", "Land Records for CFC", "Bye-laws of the SPV", "Detailed Technical Drawings for CFC"],
      note: "Sustainability after the 3-year intervention period is the key criteria for approval."
    },
    commonMistakes: [
      { title: "Ghost Artisans", description: "Providing a list of artisans who are not actually involved in the trade." },
      { title: "Lack of Market Link", description: "Building a factory without having a plan to sell the final products." }
    ],
    faqs: [
      { question: "Can an individual apply?", answer: "No, SFURTI is strictly for groups (clusters) of artisans." },
      { question: "Do artisans have to pay?", answer: "Usually, artisans contribute a small amount to the SPV to ensure ownership." }
    ],
    conclusion: {
      paragraphs: ["SFURTI is changing the face of rural India by turning traditional skills into professional enterprises.", "We specialize in the end-to-end management of SFURTI projects—from artisan mobilization and DSR preparation to SPV formation and CFC design."],
      ctaTitle: "Revive Your Traditional Industry",
      ctaDescription: "Let's build a proposal to bring ₹5 Crore grant to your artisan cluster."
    }
  },
  {
    slug: "stand-up-india",
    title: "Stand-Up India",
    subtitle: "Empowering Women & SC/ST Entrepreneurs",
    tags: ["Women", "SC/ST", "Greenfield"],
    heroDescription: "Stand-Up India facilitates bank loans between ₹10 Lakhs and ₹1 Crore to at least one SC or ST borrower and at least one woman borrower per bank branch.",
    heroStats: [
      { value: "₹1 Cr", label: "Max Loan" },
      { value: "51%", label: "Ownership" },
      { value: "7 Yrs", label: "Tenure" },
      { value: "Greenfield", label: "Focus" }
    ],
    readTime: "8 min read",
    lastUpdated: "January 15, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "what-is-standup", title: "What is Stand-Up India?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "loan-details", title: "Loan Details" },
      { id: "process", title: "Process" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "In a bid to promote entrepreneurship at the grass-root level, the Stand-Up India Scheme was launched to leverage the institutional credit structure to reach out to the underserved sectors of the population.",
        "The scheme specifically targets Scheduled Castes (SC), Scheduled Tribes (ST), and Women entrepreneurs, helping them set up their first business ventures (Greenfield Enterprises).",
        "It provides a comprehensive support system that includes not only credit but also handholding support through a network of agencies like SIDBI and NABARD."
      ],
      quote: "Stand-Up India is about standing up for those who have been left behind. It's about turning job seekers into job creators."
    },
    whatIs: {
      title: "What is the Stand-Up India Scheme?",
      paragraphs: [
        "The scheme mandates every bank branch to provide at least two loans: one to a woman and one to an SC/ST entrepreneur. This ensures widespread reach across thousands of bank branches in India.",
        "The loan covers 75% of the project cost. The entrepreneur is expected to contribute at least 10% of the project cost from their own funds, and the rest can be converged with other subsidy schemes.",
        "The interest rate is the lowest applicable rate of the bank for that category (base rate + tenor premium + 3%)."
      ]
    },
    eligibility: {
      intro: "Who can apply?",
      entities: [
        { title: "SC/ST/Women", description: "Must be above 18 years of age." },
        { title: "Greenfield Projects", description: "The scheme is ONLY for setting up your FIRST business venture in manufacturing, services, or trading." },
        { title: "Non-Individual Entities", description: "At least 51% of the shareholding and controlling stake should be held by either an SC/ST or woman entrepreneur." }
      ],
      checklist: [
        "Borrower should not be in default to any bank/financial institution.",
        "Only for greenfield (new) projects.",
        "Project must be in Manufacturing, Services, or Trading sectors."
      ]
    },
    eligibleProjects: {
      intro: "Sectors covered:",
      projects: [
        { title: "Trading", description: "Setting up a retail showroom, distribution center, or e-commerce hub.", icon: "🛍️" },
        { title: "Services", description: "Starting a hospitality venture, clinic, IT hub, or professional service firm.", icon: "🏢" },
        { title: "Manufacturing", description: "Establishing a small factory, processing unit, or assembly line.", icon: "⚙️" },
        { title: "Agri-Allied", description: "Dairy, poultry, food processing, etc. (Recently added).", icon: "🌾" }
      ]
    },
    benefits: {
      highlights: [
        { value: "₹1 Cr", label: "Funding", description: "High-value loans up to ₹100 Lakhs for significant business scale.", icon: "💰" },
        { value: "85%", label: "Project Cost", description: "The loan can cover up to 85% of the project cost if combined with other subsidies.", icon: "📉" }
      ],
      lendingInstitutions: ["All Scheduled Commercial Banks", "Regional Rural Banks", "Direct application via Standupmitra portal"]
    },
    applicationProcess: {
      steps: [
        { title: "Registration", description: "Applying through the Standupmitra portal and selecting 'Trainee Borrower' or 'Ready Borrower'.", cta: "Apply on Standupmitra" },
        { title: "Handholding Support", description: "If you need help, the portal connects you with agencies for training, project report preparation, and mentoring." },
        { title: "Bank Selection", description: "Selecting the preferred bank branch for your loan application." },
        { title: "Appraisal & Sanction", description: "The bank evaluates the proposal and sanctions the loan based on feasibility." }
      ],
      timeline: "30-45 days."
    },
    documents: {
      list: ["Caste Certificate", "Identity & Address Proof", "Business Project Report", "Proof of Business Address", "Rent/Lease Agreement", "Financial Projections"],
      note: "The 'Greenfield' status is strictly checked. Ensure this is your first time starting this business."
    },
    commonMistakes: [
      { title: " brownfield Application", description: "Applying for an existing business or expanding an old one." },
      { title: "Inadequate Promoters' Contribution", description: "Failing to show the minimum 10% own contribution in the project." }
    ],
    faqs: [
      { question: "Can I get a loan for a shop?", answer: "Yes, trading activities are fully covered." },
      { question: "What is the repayment period?", answer: "7 years with a maximum moratorium of 18 months." }
    ],
    conclusion: {
      paragraphs: ["Stand-Up India is a life-changing opportunity for entrepreneurs who have the vision but lack the high-value capital. It bypasses the usual barriers to large-scale credit.", "We provide specialized handholding—from verifying your greenfield status to getting your DPR ready for high-value bank appraisal."],
      ctaTitle: "Ready to Stand Up?",
      ctaDescription: "Let's check if your project qualifies for the ₹1 Crore Stand-Up India loan."
    }
  },
  {
    slug: "pmegp",
    title: "PMEGP Scheme",
    subtitle: "Prime Minister's Employment Generation Programme",
    tags: ["Subsidy", "Startup", "Manufacturing"],
    heroDescription: "A flagship credit-linked subsidy program aimed at generating self-employment opportunities through the establishment of micro-enterprises in both rural and urban areas.",
    heroStats: [
      { value: "₹50L", label: "Max Project (Mfg)" },
      { value: "₹20L", label: "Max Project (Service)" },
      { value: "35%", label: "Max Subsidy" },
      { value: "92%", label: "Success Rate" }
    ],
    readTime: "9 min read",
    lastUpdated: "January 20, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Overview" },
      { id: "what-is-pmegp", title: "What is PMEGP?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "eligible-projects", title: "Scope of Support" },
      { id: "key-benefits", title: "Financial Benefits" },
      { id: "application-process", title: "Application Process" },
      { id: "documents-required", title: "Documents Required" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "The Prime Minister's Employment Generation Programme (PMEGP) is a credit-linked subsidy scheme launched by the Ministry of MSME, Government of India, to generate employment opportunities in rural as well as urban areas through setting up of self-employment ventures.",
        "It is a 'One-Stop' solution for unemployed youth and traditional artisans to become entrepreneurs. The scheme is implemented by Khadi and Village Industries Commission (KVIC) as the nodal agency at the national level.",
        "At the state level, the scheme is implemented through State KVIC Directorates, State Khadi and Village Industries Boards (KVIBs), District Industries Centres (DICs), and Banks."
      ],
      quote: "Turning job seekers into job providers through sustainable micro-enterprises."
    },
    whatIs: {
      title: "Nature of the Scheme",
      paragraphs: [
        "Under the PMEGP, a beneficiary has to invest only 5% to 10% of the project cost as their own contribution. The government provides a 'Margin Money' subsidy ranging from 15% to 35% of the project cost.",
        "The balance (60% to 75%) of the project cost is provided by banks as a term loan. It covers all viable new projects in the manufacturing and service sectors, excluding those specifically mentioned in the negative list (like meat, intoxicants, etc.)."
      ]
    },
    eligibility: {
      intro: "Who can apply for PMEGP assistance?",
      entities: [
        { title: "Individuals", description: "Any individual above 18 years of age. No income ceiling." },
        { title: "Educational Qualification", description: "At least VIII standard pass for projects above ₹10 Lakh in manufacturing and ₹5 Lakh in service sector." },
        { title: "Self Help Groups", description: "SHGs (including those belonging to BPL provided they have not availed benefit under any other scheme)." },
        { title: "Institutional Bodies", description: "Institutions registered under Societies Registration Act, 1860, Production Co-operative Societies, and Charitable Trusts." }
      ],
      checklist: [
        "Only for NEW units/projects. Existing units are not eligible.",
        "The unit should be established at a new location.",
        "Applicants should not have availed any government subsidy under other schemes for the same unit."
      ]
    },
    eligibleProjects: {
      intro: "Sectors encouraged under PMEGP:",
      projects: [
        { title: "Manufacturing", description: "Food processing, agro-based industries, engineering, textiles, and chemicals.", icon: "🏭" },
        { title: "Services", description: "Repairing workshops, dry cleaning, salons, tailoring, and tourism-related services.", icon: "🛠️" },
        { title: "Trading", description: "Retail shops and trading activities (Recently expanded coverage).", icon: "🏪" }
      ]
    },
    benefits: {
      highlights: [
        { value: "35%", label: "Rural Subsidy", description: "For Special Categories (SC/ST/OBC/Minority/Women/Ex-Servicemen) in rural areas.", icon: "📈" },
        { value: "25%", label: "Urban Subsidy", description: "For Special Categories in urban areas or General Category in rural areas.", icon: "🏙️" },
        { value: "15%", label: "General Urban", description: "For General Category applicants setting up units in urban areas.", icon: "🏠" }
      ],
      lendingInstitutions: ["All Public Sector Banks", "Regional Rural Banks (RRBs)", "Co-operative Banks approved by State Level Task Force Committee", "Private Sector Scheduled Commercial Banks"]
    },
    applicationProcess: {
      steps: [
        { title: "Online Registration", description: "Fill the application on the PMEGP e-Portal (KVIC) and upload a passport-size photo and project summary." },
        { title: "DPR Submission", description: "Upload the Detailed Project Report (DPR) along with Aadhaar, education, and caste certificates." },
        { title: "Scrutiny", description: "KVIC/DIC will scrutinize the application and forward it to the selected bank." },
        { title: "Bank Appraisal", description: "The bank evaluates the feasibility and sanctions the loan (90-95% of project cost)." },
        { title: "EDP Training", description: "Mandatory 10-day Entrepreneurship Development Programme (EDP) training before first disbursement." }
      ],
      timeline: "Typically 30 to 45 days from application to sanction."
    },
    documents: {
      list: [
        "Aadhaar Card & PAN Card",
        "Detailed Project Report (DPR)",
        "Educational Qualification Certificate (VIII pass or above)",
        "Caste Certificate (for SC/ST/OBC/Minority)",
        "Rural Area Certificate (if applicable)",
        "Projected Balance Sheet & P&L Statement"
      ],
      note: "The DPR is the most critical document. It must show financial viability and employment potential."
    },
    commonMistakes: [
      { title: "Inaccurate DPR", description: "Providing unrealistic financial projections or non-viable business models." },
      { title: "Location Mismatch", description: "Failing to provide a proper Rural Area Certificate for rural-specific higher subsidies." }
    ],
    faqs: [
      { question: "Can I buy land with PMEGP loan?", answer: "No, the cost of land cannot be included in the project cost under PMEGP." },
      { question: "Is collateral required?", answer: "Loans up to ₹10 Lakh are usually collateral-free under RBI guidelines. Higher amounts may be covered under CGTMSE." }
    ],
    conclusion: {
      paragraphs: [
        "PMEGP is a robust gateway for first-time entrepreneurs to start their journey with significant government backing.",
        "Our team assists in the entire lifecycle—from selecting the right project category and preparing a bankable DPR to navigating the EDP training and securing the margin money subsidy."
      ],
      ctaTitle: "Ignite Your Entrepreneurial Journey",
      ctaDescription: "Get a professionally drafted DPR and end-to-end guidance for your PMEGP application."
    }
  },
  {
    slug: "cgtmse",
    title: "CGTMSE Scheme",
    subtitle: "Credit Guarantee Fund Trust for Micro and Small Enterprises",
    tags: ["Collateral-Free", "MSME Loan", "Guarantee"],
    heroDescription: "Enable your business to secure loans up to ₹5 Crore without any collateral or third-party guarantee through the government's premier credit guarantee structure.",
    heroStats: [
      { value: "₹5 Cr", label: "Max Guarantee" },
      { value: "85%", label: "Coverage" },
      { value: "95%", label: "Success Rate" },
      { value: "15 Days", label: "Timeline" }
    ],
    readTime: "7 min read",
    lastUpdated: "January 22, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Overview" },
      { id: "what-is-cgtmse", title: "What is CGTMSE?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "benefits", title: "Key Benefits" },
      { id: "process", title: "Application Process" },
      { id: "documents-required", title: "Documents Required" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) was launched by the Government of India to make collateral-free credit available to the MSME sector.",
        "Both the Ministry of MSME and Small Industries Development Bank of India (SIDBI) established this trust to support first-generation entrepreneurs and existing businesses who lack the 'security' required by traditional banks.",
        "It acts as a shield for banks, promising to cover a major portion of the loss if a small business fails to repay, thereby encouraging banks to lend more freely."
      ],
      quote: "Bridging the credit gap for the deserving entrepreneurs who have vision but no collateral."
    },
    whatIs: {
      title: "How It Works",
      paragraphs: [
        "CGTMSE provides guarantee coverage to banks and financial institutions (Member Lending Institutions) for loans extended to MSEs. The guarantee cover is available for both term loans and working capital facilities.",
        "Recently, the maximum loan limit was enhanced from ₹2 Crore to ₹5 Crore, significantly increasing the scope for small businesses to scale.",
        "The guarantee coverage ranges from 75% to 85% depending on the loan amount, the category of the borrower (Women/SC/ST/Micro), and the location (Zonal area)."
      ]
    },
    eligibility: {
      intro: "Is your business eligible for CGTMSE cover?",
      entities: [
        { title: "Sectors", description: "All new and existing Micro and Small Enterprises (MSEs) in Manufacturing and Service sectors." },
        { title: "Retail Trade", description: "Recently included! Retail trade activities are now eligible for coverage up to certain limits." },
        { title: "Status", description: "Must have a valid Udyam Registration (MSME registration)." }
      ],
      checklist: [
        "Loan amount should not exceed ₹5 Crore.",
        "The business must NOT be in the 'Negative List' of the bank or RBI.",
        "Borrower should have a viable Business Plan (DPR)."
      ]
    },
    eligibleProjects: {
      intro: "Eligible Credit Facilities:",
      projects: [
        { title: "Term Loans", description: "For purchase of machinery, equipment, and construction of factory buildings.", icon: "🏗️" },
        { title: "Working Capital", description: "To manage day-to-day operational expenses and inventory.", icon: "📦" },
        { title: "Composite Loans", description: "A combination of both term loan and working capital in a single facility.", icon: "⚖️" }
      ]
    },
    benefits: {
      highlights: [
        { value: "0%", label: "Collateral", description: "No need to pledge property or provide third-party guarantees.", icon: "🛡️" },
        { value: "₹5 Cr", label: "Credit Support", description: "Substantial capital for expansion and modernization.", icon: "💰" },
        { value: "Lower", label: "Interest Rate", description: "Banks often offer better rates when a government guarantee is present.", icon: "📉" }
      ],
      lendingInstitutions: ["Public Sector Banks", "Private Sector Banks", "Regional Rural Banks (RRBs)", "Select NBFCs and SFBs"]
    },
    applicationProcess: {
      steps: [
        { title: "Bank Selection", description: "Apply for a business loan at any CGTMSE Member Lending Institution (MLI)." },
        { title: "Project Appraisal", description: "The bank evaluates your project report, financial viability, and creditworthiness." },
        { title: "Guarantee Approval", description: "Once the bank approves the loan, they apply to the CGTMSE portal for guarantee cover." },
        { title: "Fee Payment", description: "Payment of Annual Guarantee Fee (AGF) by the bank (often passed to the borrower)." },
        { title: "Disbursement", description: "Loan is disbursed after the guarantee is confirmed by the Trust." }
      ],
      timeline: "Usually 15 to 25 days depending on the bank's internal processing."
    },
    documents: {
      list: [
        "Udyam Registration Certificate",
        "Business PAN & GST Registration",
        "Detailed Project Report (DPR)",
        "ITR and Financial Audits (if existing)",
        "Identity & Address Proof of Promoters",
        "Bank Solvency Certificate"
      ],
      note: "The 'Primary Security' (machinery or stocks bought with the loan) is still required; only 'Collateral Security' (external property) is waived."
    },
    commonMistakes: [
      { title: "High Debt-Equity Ratio", description: "Banks may reject even with CGTMSE if the promoter's own contribution is too low." },
      { title: "Incomplete Udyam", description: "Errors in MSME registration can delay the guarantee application process." }
    ],
    faqs: [
      { question: "Can I apply directly to CGTMSE?", answer: "No, CGTMSE is not a lending agency. You must apply through a bank." },
      { question: "What is the fee for CGTMSE?", answer: "The fee ranges from 0.37% to 1.35% per annum based on loan amount and location." }
    ],
    conclusion: {
      paragraphs: [
        "CGTMSE is the single most powerful tool for small businesses to unlock bank finance without the burden of pledging property.",
        "We help you prepare bank-ready DPRs and negotiate with various lending institutions to ensure your project gets the CGTMSE cover it deserves."
      ],
      ctaTitle: "Fuel Your Business Growth",
      ctaDescription: "Let's find the right bank and prepare your collateral-free loan application."
    }
  },
  {
    slug: "startup-india",
    title: "Startup India",
    subtitle: "DPIIT Recognition and Benefits",
    tags: ["Innovation", "Tax Benefit", "IPR Support"],
    heroDescription: "Get recognized as an innovative startup by DPIIT and unlock a world of benefits including tax exemptions, easier public procurement, and fast-track patenting.",
    heroStats: [
      { value: "80%", label: "IPR Rebate" },
      { value: "3 Yrs", label: "Tax Holiday" },
      { value: "₹100 Cr", label: "Turnover Limit" },
      { value: "7 Days", label: "Timeline" }
    ],
    readTime: "8 min read",
    lastUpdated: "January 24, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Overview" },
      { id: "what-is-startup-india", title: "Recognition Process" },
      { id: "eligibility", title: "Eligibility" },
      { id: "benefits", title: "Startup Benefits" },
      { id: "process", title: "Step-by-Step Guide" },
      { id: "documents-required", title: "Documentation" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "Startup India is a flagship initiative of the Government of India, intended to build a strong ecosystem that is conducive for the growth of startup businesses and to drive sustainable economic growth.",
        "The core of this initiative is 'DPIIT Recognition', which provides startups with a legal certificate enabling them to claim various fiscal and non-fiscal benefits.",
        "Whether you are in the Early Stage or Scaling Stage, being a part of Startup India puts you in the spotlight for investors and government support."
      ],
      quote: "Empowering the innovators today to create the industries of tomorrow."
    },
    whatIs: {
      title: "DPIIT Recognition",
      paragraphs: [
        "Department for Promotion of Industry and Internal Trade (DPIIT) provides the recognition that officially classifies an entity as a 'Startup'.",
        "It focuses on supporting businesses that are working towards innovation, development, or improvement of products or processes, or if they have a scalable business model with a high potential of employment generation."
      ]
    },
    eligibility: {
      intro: "Does your company qualify as a 'Startup'?",
      entities: [
        { title: "Entity Type", description: "Private Limited Company, Registered Partnership Firm, or Limited Liability Partnership (LLP)." },
        { title: "Age", description: "Should not have exceeded 10 years from the date of incorporation/registration." },
        { title: "Turnover", description: "Annual turnover has not exceeded ₹100 Crore in any of the financial years since incorporation." }
      ],
      checklist: [
        "Entity should not have been formed by splitting up or reconstruction of an existing business.",
        "Must be working towards innovation or scalability.",
        "Must have a recommendation or a brief on innovation."
      ]
    },
    eligibleProjects: {
      intro: "Focus Areas:",
      projects: [
        { title: "Deep Tech", description: "AI, ML, Robotics, and Advanced Computing solutions.", icon: "🤖" },
        { title: "Sustainability", description: "Clean energy, waste management, and circular economy models.", icon: "🌿" },
        { title: "FinTech & EdTech", description: "Innovative financial services and educational platforms.", icon: "💻" }
      ]
    },
    benefits: {
      highlights: [
        { value: "80-IAC", label: "Tax Exemption", description: "Income tax exemption for 3 consecutive years within 10 years.", icon: "📊" },
        { value: "IPR", label: "Rebates", description: "80% rebate in patent cost and 50% rebate in trademark filing.", icon: "📜" },
        { value: "Easy", label: "Procurement", description: "Exemption from prior turnover/experience for government tenders.", icon: "🏛️" }
      ],
      lendingInstitutions: ["Small Industries Development Bank of India (SIDBI)", "Fund of Funds for Startups (FFS)", "Startup India Seed Fund Scheme (SISFS)"]
    },
    applicationProcess: {
      steps: [
        { title: "Portal Registration", description: "Register your entity on the Startup India website (www.startupindia.gov.in)." },
        { title: "Application Form", description: "Fill the 'Recognition' form and provide details of the 'Problem' you are solving and your 'Innovation'." },
        { title: "Documentation", description: "Upload the Incorporation Certificate and a brief write-up about the startup." },
        { title: "Review", description: "DPIIT reviews the application for innovation and scalability potential." },
        { title: "Certification", description: "On approval, a certificate of recognition is issued digitally." }
      ],
      timeline: "Usually takes 5 to 7 working days from the date of submission."
    },
    documents: {
      list: [
        "Certificate of Incorporation/Registration",
        "PAN Card of the Entity",
        "Brief about the Startup (Problem, Solution, Uniqueness)",
        "Revenue/Funding details (if any)",
        "Website/Mobile App link (if any)",
        "Patent/Trademark details (if any)"
      ],
      note: "The Write-up on 'Innovation' is the most critical part of the application."
    },
    commonMistakes: [
      { title: "Generic Business", description: "Applying for a simple service/trading business without any innovation component." },
      { title: "Split-up Business", description: "Claiming startup status for a subsidiary or a restructured old firm." }
    ],
    faqs: [
      { question: "Can a Proprietorship be recognized?", answer: "No, only Private Ltd, LLP, or Registered Partnerships are eligible." },
      { question: "What is Angel Tax exemption?", answer: "Recognized startups are exempt from tax on share premium under Section 56(2)(viib)." }
    ],
    conclusion: {
      paragraphs: [
        "Startup India is more than just a certificate; it's a badge of innovation that opens doors to funding and tax holidays.",
        "We assist in framing your 'Innovation Story' and navigating the complex 80-IAC tax exemption applications."
      ],
      ctaTitle: "Get Recognized Today",
      ctaDescription: "Let's secure your DPIIT recognition and unlock your startup benefits."
    }
  },
  {
    slug: "gem-registration",
    title: "GeM Registration",
    subtitle: "Government e-Marketplace Seller Enrollment",
    tags: ["Public Procurement", "B2G Sales", "Direct Purchase"],
    heroDescription: "Connect your business directly to the massive government procurement market worth over ₹3 Lakh Crore annually through a transparent digital portal.",
    heroStats: [
      { value: "₹3L Cr", label: "Market Size" },
      { value: "0%", label: "Tender Fee" },
      { value: "10 Days", label: "Payment" },
      { value: "15 Days", label: "Timeline" }
    ],
    readTime: "6 min read",
    lastUpdated: "January 26, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Overview" },
      { id: "what-is-gem", title: "What is GeM?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "benefits", title: "Seller Benefits" },
      { id: "process", title: "Registration Process" },
      { id: "documents-required", title: "Documents Required" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "Government e-Marketplace (GeM) is the National Public Procurement Portal; an end-to-end online marketplace for Central and State Government Ministries / Departments / PSUs.",
        "It was launched to enhance transparency, efficiency, and speed in public procurement. For sellers, it replaces the manual tender process with a digital 'Amazon-like' experience for selling to the government.",
        "From a small stationery shop to a large defense manufacturer, GeM provides a level playing field for all types of businesses."
      ],
      quote: "Your gateway to the largest buyer in India—The Government."
    },
    whatIs: {
      title: "How it Transforms Sales",
      paragraphs: [
        "GeM facilitates three types of buying: Direct Purchase (up to ₹25,000), L1 Purchase (through comparison), and High-Value Bidding/RA.",
        "As a seller, you upload your product/service catalog. When a government officer needs something, they search for it, compare prices, and place the order directly on the portal."
      ]
    },
    eligibility: {
      intro: "Can you sell on GeM?",
      entities: [
        { title: "Manufacturers", description: "Original Equipment Manufacturers (OEMs) who produce their own goods." },
        { title: "Resellers", description: "Authorized distributors or sellers of existing products with proper authorization." },
        { title: "Service Providers", description: "Cleaning, security, IT support, logistics, and professional service firms." }
      ],
      checklist: [
        "Valid GST Registration is mandatory for most categories.",
        "Entity must have a valid PAN and Bank Account.",
        "Verification through Aadhaar-linked mobile is required."
      ]
    },
    eligibleProjects: {
      intro: "Product Categories:",
      projects: [
        { title: "Office Goods", description: "Computers, stationery, furniture, and electronics.", icon: "💻" },
        { title: "Vehicles", description: "Cars, buses, and specialized transport equipment.", icon: "🚗" },
        { title: "Specialized Services", description: "Manpower outsourcing, laundry, and consulting services.", icon: "👥" }
      ]
    },
    benefits: {
      highlights: [
        { value: "Direct", label: "Access", description: "Sell to every government department in India from one portal.", icon: "🌍" },
        { value: "Assured", label: "Payment", description: "Government is mandated to pay within 10 days of CRAC generation.", icon: "💳" },
        { value: "Paperless", label: "Bidding", description: "Participate in high-value tenders without physical document submission.", icon: "📄" }
      ],
      lendingInstitutions: ["GeM Sahay (Financing against GeM orders)", "Member Banks providing EMD/PBG"]
    },
    applicationProcess: {
      steps: [
        { title: "User Registration", description: "Create a seller account using Aadhaar or PAN of the authorized person." },
        { title: "Profile Completion", description: "Fill in business details, factory locations, and financial turnover." },
        { title: "Caution Money", description: "Deposit a small one-time caution money based on annual turnover (ranges from ₹5k to ₹25k)." },
        { title: "Catalog Management", description: "Upload your products or services with high-quality images and technical specs." },
        { title: "Incident Management", description: "Ensure compliance to avoid being 'Watchlisted' or suspended." }
      ],
      timeline: "Profile verification takes 7-15 days; catalog approval depends on the category."
    },
    documents: {
      list: [
        "GST Registration Certificate",
        "PAN Card of the Business",
        "Cancelled Cheque",
        "Udyam Registration (for MSME benefits)",
        "Trademark/Patent (for OEM status)",
        "Board Resolution/Authorization Letter"
      ],
      note: "OEM status requires specialized evaluation and sometimes factory inspections."
    },
    commonMistakes: [
      { title: "Wrong HS Coding", description: "Mapping products to the wrong category results in zero visibility." },
      { title: "Slow Response", description: "Failing to accept an order within 48 hours can lead to automatic cancellation." }
    ],
    faqs: [
      { question: "Is there a registration fee?", answer: "Registration is free, but a one-time 'Caution Money' deposit is required." },
      { question: "Can I sell without GST?", answer: "Only if your total turnover is below the GST exemption limit, but most buyers prefer GST-valid sellers." }
    ],
    conclusion: {
      paragraphs: [
        "GeM is not just a portal; it's a massive sales channel that works 24/7 to connect you with government buyers.",
        "We help you with end-to-end management—from OEM verification and brand linking to winning high-value bids."
      ],
      ctaTitle: "Open Your Government Store",
      ctaDescription: "Let's setup your GeM profile and start uploading your catalog today."
    }
  },
  {
    slug: "nsic-certification",
    title: "NSIC Certification",
    subtitle: "Single Point Registration Scheme (SPRS)",
    tags: ["Tender Priority", "EMD Exemption", "MSME Support"],
    heroDescription: "Empower your MSE to compete for government tenders by getting NSIC certified. Enjoy 100% EMD exemption and priority in procurement processes.",
    heroStats: [
      { value: "100%", label: "EMD Exempt" },
      { value: "Free", label: "Tender Sets" },
      { value: "L1+15%", label: "Price Priority" },
      { value: "25 Days", label: "Timeline" }
    ],
    readTime: "7 min read",
    lastUpdated: "January 25, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Overview" },
      { id: "what-is-nsic", title: "What is NSIC?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "benefits", title: "Key Benefits" },
      { id: "process", title: "Registration Process" },
      { id: "documents-required", title: "Documents Required" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "The National Small Industries Corporation (NSIC) is an ISO 9001:2015 certified Government of India Enterprise under Ministry of MSME. Its Single Point Registration Scheme (SPRS) is the backbone for MSEs seeking to enter government contracts.",
        "The primary objective is to enhance the participation of Micro and Small Enterprises in the Government Stores Purchase Programme by providing them various tender-related exemptions.",
        "By holding an NSIC certificate, an MSE is considered 'technically capable' by various government buying departments, reducing the need for repeated technical evaluations."
      ],
      quote: "Giving small industries the muscle to win big government contracts."
    },
    whatIs: {
      title: "Single Point Registration",
      paragraphs: [
        "The SPRS scheme allows an MSE to register once with NSIC and become eligible for participating in all government tenders without having to pay Earnest Money Deposit (EMD).",
        "It also includes a 'Price Preference' policy where MSEs quoting within a price band of L1+15% are allowed to supply a portion (up to 25%) of the requirement by bringing down their price to L1."
      ]
    },
    eligibility: {
      intro: "Who qualifies for NSIC SPRS?",
      entities: [
        { title: "Micro Enterprises", description: "Units with investment in plant & machinery up to ₹1 Crore." },
        { title: "Small Enterprises", description: "Units with investment up to ₹10 Crore." },
        { title: "Commercial Startups", description: "New MSEs that have started commercial production but don't have audited balance sheets for 3 years (Provisional registration)." }
      ],
      checklist: [
        "Must have a valid Udyam Registration Certificate.",
        "Must be in commercial production for at least one year (for full registration).",
        "Ownership of the factory/premises must be clearly documented."
      ]
    },
    eligibleProjects: {
      intro: "Sectors Covered:",
      projects: [
        { title: "Manufacturing", description: "Units producing tangible goods for government supply.", icon: "⚙️" },
        { title: "Services", description: "IT, maintenance, logistics, and consultancy services.", icon: "🏢" },
        { title: "Provisional Units", description: "Units with less than 1 year of production history.", icon: "🆕" }
      ]
    },
    benefits: {
      highlights: [
        { value: "0", label: "EMD Cost", description: "Participate in thousands of tenders without blocking your capital in deposits.", icon: "💸" },
        { value: "Free", label: "Tender Info", description: "Get tender sets and documents free of cost from buying agencies.", icon: "📄" },
        { value: "25%", label: "Mandatory", description: "Government departments MUST procure 25% of their total annual needs from MSEs.", icon: "🎯" }
      ],
      lendingInstitutions: ["NSIC Raw Material Assistance Scheme", "Member Banks for Performance Bank Guarantees"]
    },
    applicationProcess: {
      steps: [
        { title: "Online Application", description: "Apply through the NSIC SPRS portal with your Udyam details." },
        { title: "Technical Inspection", description: "A technical inspecting agency (like RITES or NSIC engineers) visits your unit to verify capacity." },
        { title: "Report Submission", description: "The inspecting agency submits a 'Technical Assessment Report' to NSIC." },
        { title: "Final Review", description: "NSIC Zonal/Branch offices review the report and financial documents." },
        { title: "Certificate Issue", description: "On approval, the SPRS certificate is issued, highlighting your 'Monetary Limit'." }
      ],
      timeline: "Complete process usually takes 20 to 30 days."
    },
    documents: {
      list: [
        "Udyam Registration Certificate",
        "Detailed List of Plant & Machinery",
        "Audited Financials for the last 3 years",
        "Ownership/Lease Deed of Premises",
        "Declaration of Partnership/Directors",
        "Quality Certifications (ISO, BIS, etc.)"
      ],
      note: "The 'Monetary Limit' on the certificate is calculated as 50% of your highest turnover in the last 3 years."
    },
    commonMistakes: [
      { title: "Expired Udyam", description: "Failing to update Udyam data before applying for NSIC." },
      { title: "Inadequate Machinery", description: "Not having the necessary tools to produce the items you wish to register for." }
    ],
    faqs: [
      { question: "What is the validity of the certificate?", answer: "The SPRS certificate is valid for 2 years and must be renewed thereafter." },
      { question: "What is the fee for registration?", answer: "The fee is based on your turnover, ranging from ₹3,000 up to ₹50,000+ for large units." }
    ],
    conclusion: {
      paragraphs: [
        "NSIC certification is the 'Visa' for MSEs to enter the lucrative world of government tenders and procurement.",
        "We assist in the end-to-end technical documentation and represent your case during the technical inspection phase."
      ],
      ctaTitle: "Become a Government Supplier",
      ctaDescription: "Let's get your NSIC registration started and unlock tender priority."
    }
  },
  {
    slug: "startup-seed-fund",
    title: "Startup SEED Fund",
    subtitle: "Financial Assistance for Early-Stage Startups (SISFS)",
    tags: ["Early Stage", "Grant", "Proof of Concept"],
    heroDescription: "Bridge the gap between your idea and market launch with grants up to ₹20 Lakh and debt-based funding up to ₹50 Lakh through the Startup India Seed Fund.",
    heroStats: [
      { value: "₹50L", label: "Max Funding" },
      { value: "₹20L", label: "Grant Component" },
      { value: "Equity", label: "Flexible" },
      { value: "45 Days", label: "Timeline" }
    ],
    readTime: "8 min read",
    lastUpdated: "January 28, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Overview" },
      { id: "what-is-sisfs", title: "What is SISFS?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "benefits", title: "Funding Tiers" },
      { id: "process", title: "Application Process" },
      { id: "documents-required", title: "Documents Required" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "Many startups with great potential fail because of the 'Valley of Death'—the stage where they have a proof of concept but lack the capital for pilot trials and market entry.",
        "The Startup India Seed Fund Scheme (SISFS) provides financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.",
        "This allows the startup to reach a level where they can raise investments from angel investors or venture capitalists, or seek loans from commercial banks."
      ],
      quote: "Fueling the journey from a garage prototype to a market-ready product."
    },
    whatIs: {
      title: "Funding Mechanism",
      paragraphs: [
        "The fund is disbursed to selected 'Incubators' across India. Startups apply to these incubators rather than a central government office.",
        "It offers two types of funding: Grants for very early stage (validation/prototype) and Debt/Convertible Debentures for more mature startups (market launch/scaling)."
      ]
    },
    eligibility: {
      intro: "Can your startup apply for SISFS?",
      entities: [
        { title: "Recognition", description: "Must be a DPIIT recognized startup incorporated not more than 2 years ago." },
        { title: "Innovation", description: "Must have a business idea with a high potential for scale and social impact." },
        { title: "Funds", description: "Should not have received more than ₹10 Lakh in monetary support from any other central/state government scheme." }
      ],
      checklist: [
        "At least 51% shareholding by Indian promoters.",
        "Must be using technology in its core product or service.",
        "Should have a clear plan on how the seed fund will be utilized."
      ]
    },
    eligibleProjects: {
      intro: "Innovation Focus:",
      projects: [
        { title: "Social Impact", description: "Healthcare, education, and rural development startups.", icon: "🏥" },
        { title: "Agri-Tech", description: "Post-harvest loss reduction and smart farming solutions.", icon: "🌾" },
        { title: "Waste-to-Wealth", description: "Recycling and sustainable manufacturing innovation.", icon: "♻️" }
      ]
    },
    benefits: {
      highlights: [
        { value: "₹20L", label: "POC Grant", description: "For validation of Proof of Concept or prototype development.", icon: "🧪" },
        { value: "₹50L", label: "Market Launch", description: "For product trials, market entry, and commercialization through debt.", icon: "🚀" },
        { value: "Expert", label: "Mentorship", description: "Access to the incubator’s network of mentors and industry links.", icon: "🧠" }
      ],
      lendingInstitutions: ["DPIIT Selected Incubators (Tier 1 & Tier 2)"]
    },
    applicationProcess: {
      steps: [
        { title: "Incubator Selection", description: "Choose up to 3 incubators locally or based on your sector through the Startup India portal." },
        { title: "Pitch Deck Submission", description: "Submit your business plan, prototype details, and fund requirement through the online portal." },
        { title: "Evaluation", description: "The incubator's selection committee reviews the pitch and calls for an interview." },
        { title: "Due Diligence", description: "The incubator verifies the startup's claims and legal standing." },
        { title: "Disbursement", description: "Funds are released in tranches based on predetermined milestones." }
      ],
      timeline: "Usually 45 to 60 days from application to first tranche."
    },
    documents: {
      list: [
        "DPIIT Recognition Certificate",
        "Certificate of Incorporation",
        "Detailed Pitch Deck (Problem, Solution, GTM, Team)",
        "Prototype Photos/Video (if any)",
        "Financial Projections for 3 years",
        "Declaration of No-Prior-Support"
      ],
      note: "Highlighting the 'Market Fit' and 'Scalability' is essential for incubator approval."
    },
    commonMistakes: [
      { title: "Weak Prototype", description: "Applying with only an idea and no tangible proof of concept." },
      { title: "Generic Plan", description: "Failing to explain exactly how the ₹20L/₹50L will lead to the next milestone." }
    ],
    faqs: [
      { question: "Is this a loan or a grant?", answer: "It is a grant up to ₹20L and debt/convertible debt up to ₹50L." },
      { question: "Can I apply to multiple incubators?", answer: "Yes, you can select up to 3 incubators in a single application." }
    ],
    conclusion: {
      paragraphs: [
        "The Seed Fund Scheme is the most significant support for early-stage founders to turn their dreams into prototypes.",
        "We help you build compelling pitch decks and select the right incubators to maximize your chances of selection."
      ],
      ctaTitle: "Nurture Your Idea",
      ctaDescription: "Let's craft your winning pitch deck for the Startup India Seed Fund."
    }
  },
  {
    slug: "tax-exemption-80iac",
    title: "Tax Exemption Benefits",
    subtitle: "80-IAC and Section 56 (Angel Tax) Exemption",
    tags: ["Tax Holiday", "Angel Tax", "Reinvestment"],
    heroDescription: "Scale your startup faster by reinvesting 100% of your profits. Get income tax exemption for 3 consecutive years and wave goodbye to Angel Tax concerns.",
    heroStats: [
      { value: "3 Yrs", label: "Tax Holiday" },
      { value: "100%", label: "Profit Exempt" },
      { value: "No", label: "Angel Tax" },
      { value: "25 Days", label: "Timeline" }
    ],
    readTime: "7 min read",
    lastUpdated: "January 29, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Overview" },
      { id: "eligibility", title: "Eligibility" },
      { id: "benefits", title: "Key Benefits" },
      { id: "process", title: "Application Process" },
      { id: "documents-required", title: "Documents Required" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "For a growing startup, taxes can be a major drain on working capital. The Government of India offers specialized tax exemptions to recognized startups to help them conserve cash and reinvest in growth.",
        "The two most significant benefits are the Section 80-IAC (Income Tax exemption) and the Angel Tax exemption under Section 56(2)(viib).",
        "While DPIIT recognition is the first step, these tax benefits require a separate and more rigorous application to the Inter-Ministerial Board (IMB)."
      ],
      quote: "Turning tax liabilities into growth opportunities for India's innovators."
    },
    whatIs: {
      title: "Nature of Exemption",
      paragraphs: [
        "Under Section 80-IAC, an eligible startup can claim a 100% tax holiday on profits for 3 consecutive financial years out of its first 10 years of incorporation.",
        "Angel Tax exemption ensures that the share premium received from investors is not treated as 'income from other sources', provided the total paid-up share capital and share premium doesn't exceed ₹25 Crore."
      ]
    },
    eligibility: {
      intro: "Who can claim these tax holidays?",
      entities: [
        { title: "Recognition", description: "Must be a DPIIT recognized startup incorporated after April 1, 2016." },
        { title: "Entity Type", description: "Only Private Limited Companies or LLPs are eligible for 80-IAC." },
        { title: "Innovation", description: "Must be working towards innovation, development, or improvement of products or scalable business models." }
      ],
      checklist: [
        "Annual turnover should not have exceeded ₹100 Crore.",
        "Must have obtained a certificate from the Inter-Ministerial Board (for 80-IAC).",
        "Should not be formed by splitting up or reconstruction of an existing business."
      ]
    },
    eligibleProjects: {
      intro: "Eligible Expenditure for Reinvestment:",
      projects: [
        { title: "R&D", description: "Research and development of new technologies.", icon: "🔬" },
        { title: "Market Scaling", description: "Customer acquisition and international expansion.", icon: "📈" },
        { title: "Hiring", description: "Building a high-quality technical and operational team.", icon: "👥" }
      ]
    },
    benefits: {
      highlights: [
        { value: "100%", label: "Tax Holiday", description: "Zero tax on profits for 3 full years helping cash flow.", icon: "💰" },
        { value: "Angel", label: "Exemption", description: "Safe harbor from scrutiny on high-premium equity funding.", icon: "👼" },
        { value: "10 Yrs", label: "Flexibility", description: "Choose any 3 consecutive years within the first decade.", icon: "📅" }
      ],
      lendingInstitutions: ["Ministry of Finance", "Central Board of Direct Taxes (CBDT)"]
    },
    applicationProcess: {
      steps: [
        { title: "DPIIT Recognition", description: "Ensure your entity is already recognized as a startup by DPIIT." },
        { title: "IMB Form Filing", description: "Submit Form 80-IAC and/or Section 56 declaration through the Startup India portal." },
        { title: "Financial Submission", description: "Upload audited balance sheets and ITRs for the past years (if applicable)." },
        { title: "Innovation Brief", description: "Provide a detailed justification of why your business is innovative and scalable." },
        { title: "IMB Review", description: "The Inter-Ministerial Board meets periodically to evaluate and approve cases." }
      ],
      timeline: "Usually takes 25 to 40 days depending on board meetings."
    },
    documents: {
      list: [
        "Certificate of Incorporation",
        "DPIIT Recognition Certificate",
        "Memorandum of Association (MOA) / LLP Agreement",
        "Audited Financials for the last 3 years (or since incorporation)",
        "Video link/Presentation of the product/service",
        "Detailed write-up on Innovation"
      ],
      note: "The 'Technical Justification' of innovation is where most applications get rejected. It must be unique."
    },
    commonMistakes: [
      { title: "Generic Tech", description: "Claiming tax benefits for a simple e-commerce or service site with no core innovation." },
      { title: "Incomplete MOA", description: "Having business objects in MOA that don't match the startup's current innovative activities." }
    ],
    faqs: [
      { question: "Is MAT applicable?", answer: "Yes, Minimum Alternate Tax (MAT) may still apply even if 80-IAC is granted." },
      { question: "Can I choose my tax holiday years?", answer: "Yes, you can choose any block of 3 years within your first 10 years." }
    ],
    conclusion: {
      paragraphs: [
        "Tax exemptions are the government's way of rewarding risk-takers. They provide the necessary 'buffer' for a startup to reach profitability.",
        "We specialize in preparing the technical documentation for the IMB and ensuring your innovation is presented effectively."
      ],
      ctaTitle: "Protect Your Profits",
      ctaDescription: "Let's check your eligibility for the 80-IAC tax holiday."
    }
  },
  {
    slug: "zed-certification",
    title: "ZED Certification",
    subtitle: "Zero Defect Zero Effect MSME Scheme",
    tags: ["Quality", "Environment", "Global Exports"],
    heroDescription: "Enhance your manufacturing quality and environmental footprint with ZED certification. Get up to 80% subsidy on certification costs and become a preferred supplier.",
    heroStats: [
      { value: "80%", label: "Subsidy" },
      { value: "Global", label: "Standard" },
      { value: "3 Levels", label: "Grading" },
      { value: "30 Days", label: "Timeline" }
    ],
    readTime: "6 min read",
    lastUpdated: "January 29, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Overview" },
      { id: "what-is-zed", title: "What is ZED?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "benefits", title: "Scheme Benefits" },
      { id: "process", title: "Certification Levels" },
      { id: "documents-required", title: "Documents Required" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "In a globalized world, 'Quality' and 'Sustainability' are no longer optional. The ZED scheme aims to create an ecosystem for Zero Defect (Quality) and Zero Effect (Environment) manufacturing in India.",
        "It provides a roadmap for MSMEs to move from 'local' quality standards to 'global' ones, while reducing waste and increasing energy efficiency.",
        "Government of India provides significant financial support to MSMEs to cover the costs of assessment, consultancy, and certification."
      ],
      quote: "Precision in products, responsibility towards the planet."
    },
    whatIs: {
      title: "The ZED Philosophy",
      paragraphs: [
        "Zero Defect: Focuses on customer satisfaction and high-quality production with no rejections.",
        "Zero Effect: Focuses on environmentally sustainable manufacturing with zero negative impact on the ecosystem.",
        "The scheme grades MSMEs into Bronze, Silver, and Gold levels based on their maturity in various parameters."
      ]
    },
    eligibility: {
      intro: "Who should get ZED certified?",
      entities: [
        { title: "MSMEs", description: "Any registered Micro, Small, or Medium enterprise in the manufacturing sector." },
        { title: "Udyam Holder", description: "Must have a valid Udyam Registration Certificate." },
        { title: "Exporters", description: "MSMEs looking to supply to international buyers who require environmental compliance." }
      ],
      checklist: [
        "Must be a manufacturing unit.",
        "Should be willing to undergo on-site assessment.",
        "Already having basic ISO certification is a plus but not mandatory."
      ]
    },
    eligibleProjects: {
      intro: "Improvement Areas:",
      projects: [
        { title: "Process Control", description: "Reducing waste and improving manufacturing precision.", icon: "🎯" },
        { title: "Energy Audit", description: "Optimizing power consumption and using renewable energy.", icon: "⚡" },
        { title: "Waste Management", description: "Effective handling of industrial effluents and solid waste.", icon: "♻️" }
      ]
    },
    benefits: {
      highlights: [
        { value: "80%", label: "Grants", description: "Subsidy on certification cost (Micro: 80%, Small: 60%, Medium: 50%).", icon: "💰" },
        { value: "Tender", label: "Weightage", description: "Preference in government tenders and procurement ratings.", icon: "🏆" },
        { value: "Bank", label: "Concessions", description: "Lower interest rates from many PSU banks for ZED certified units.", icon: "🏦" }
      ],
      lendingInstitutions: ["Quality Council of India (QCI)", "National Productivity Council (NPC)"]
    },
    applicationProcess: {
      steps: [
        { title: "Universal Registration", description: "Register on the ZED portal (www.zed.msme.gov.in) using Udyam ID." },
        { title: "Pledge", description: "Take the 'ZED Pledge' to commit to quality and environmental standards." },
        { title: "Self-Assessment", description: "Complete a self-assessment on various quality and environment parameters." },
        { title: "Desktop Assessment", description: "Submit documents for a desktop audit by accredited agencies." },
        { title: "Site Assessment", description: "Experts visit your factory for a physical verification before awarding Silver/Gold levels." }
      ],
      timeline: "Self-assessment is instant; site certification takes 30-45 days."
    },
    documents: {
      list: [
        "Udyam Registration Certificate",
        "PAN & GST Details",
        "Factory License",
        "Quality Manual / Process Flowcharts",
        "Energy/Electricity Bills for the last 6 months",
        "Pollution Control Board Clearance (if applicable)"
      ],
      note: "Photos and videos of the shop floor are often required during self-assessment."
    },
    commonMistakes: [
      { title: "False Pledges", description: "Taking the pledge but not implementing basic cleanliness/safety on the shop floor." },
      { title: "Inconsistent Data", description: "Providing production data that doesn't match electricity/resource consumption." }
    ],
    faqs: [
      { question: "How long is the certificate valid?", answer: "The ZED certificate is typically valid for 3 years." },
      { question: "Is there a renewal fee?", answer: "Yes, but renewal also attracts government subsidies." }
    ],
    conclusion: {
      paragraphs: [
        "ZED is your factory's 'Quality Passport'. It signals to the world that you are a reliable, sustainable manufacturer.",
        "We help you through the self-assessment process and prepare your plant for the Gold-level site audit."
      ],
      ctaTitle: "Upgrade Your Factory",
      ctaDescription: "Let's take the ZED pledge and start your quality transformation today."
    }
  },
  {
    slug: "ngo-elevation",
    title: "NGO Elevation Program",
    subtitle: "Grant Readiness and Compliance Management",
    tags: ["Social Impact", "CSR Funding", "Govt. Grants"],
    heroDescription: "Transform your NGO into a professionally managed, audit-ready institution. Master the world of 12A, 80G, CSR-1, and FCRA to unlock massive funding opportunities.",
    heroStats: [
      { value: "₹25L+", label: "Avg Grant" },
      { value: "12A/80G", label: "Standard" },
      { value: "CSR-1", label: "Enabled" },
      { value: "45 Days", label: "Timeline" }
    ],
    readTime: "8 min read",
    lastUpdated: "January 29, 2026",
    author: "Ewolyn Team",
    tableOfContents: [
      { id: "introduction", title: "Overview" },
      { id: "compliance", title: "Core Compliances" },
      { id: "eligibility", title: "Eligibility" },
      { id: "benefits", title: "Funding Sources" },
      { id: "process", title: "Step-by-Step Elevation" },
      { id: "documents-required", title: "Documents Required" },
      { id: "faqs", title: "FAQs" }
    ],
    introduction: {
      paragraphs: [
        "India has millions of NGOs, but only a fraction are able to access large-scale CSR funds or government grants. The reason is usually a lack of professional management and compliance.",
        "Our NGO Elevation Program is designed to bridge this gap. We help community-based organizations evolve into structured institutions that corporate donors can trust.",
        "From basic registrations to building a compelling 'Impact Portfolio', we handle the technical side so you can focus on your social mission."
      ],
      quote: "Empowering the changemakers with professional excellence."
    },
    whatIs: {
      title: "The Pillars of Trust",
      paragraphs: [
        "Transparency: Maintaining public records of audits and fund utilization.",
        "Compliance: Staying updated with the latest Income Tax and Ministry of Corporate Affairs (MCA) regulations.",
        "Impact: Quantifying the social change you are bringing to the ground."
      ]
    },
    eligibility: {
      intro: "Which organizations can join the program?",
      entities: [
        { title: "Trusts & Societies", description: "Registered under the Indian Trusts Act or Societies Registration Act." },
        { title: "Section 8 Companies", description: "Non-profit companies registered under the Companies Act, 2013." },
        { title: "Social Enterprises", description: "Hybrid models working towards sustainable social development." }
      ],
      checklist: [
        "Should have a clear social objective.",
        "Should have a functioning board of trustees/directors.",
        "Must be willing to adopt professional financial auditing."
      ]
    },
    eligibleProjects: {
      intro: "Funding Focus Areas:",
      projects: [
        { title: "Education", description: "Digital literacy and primary schooling for underprivileged children.", icon: "📚" },
        { title: "Rural Health", description: "Mobile clinics and sanitation projects in deep rural areas.", icon: "🏥" },
        { title: "Skill Dev", description: "Vocational training and livelihood creation for youth and women.", icon: "🛠️" }
      ]
    },
    benefits: {
      highlights: [
        { value: "CSR-1", label: "Enabled", description: "Registration with MCA to become eligible for Corporate Social Responsibility funds.", icon: "🏢" },
        { value: "Tax", label: "Benefits", description: "12A and 80G registrations allowing tax-free income and donation benefits to donors.", icon: "📉" },
        { value: "Grant", label: "Readiness", description: "Access to government portals like Darpan for central grants.", icon: "🎯" }
      ],
      lendingInstitutions: ["Ministry of Corporate Affairs", "NITI Aayog (Darpan)", "International Foundation Grants"]
    },
    applicationProcess: {
      steps: [
        { title: "Audit & Assessment", description: "Review of your current trust deed, audit reports, and ground activities." },
        { title: "Statutory Filing", description: "Securing/Renewing 12A and 80G registrations under the new five-year renewal policy." },
        { title: "CSR-1 Registration", description: "Linking the NGO with the MCA portal for direct CSR funding eligibility." },
        { title: "Portfolio Building", description: "Creating professional impact reports and pitch decks for corporate donors." },
        { title: "FCRA Assistance", description: "Preparing the ground for Foreign Contribution Regulation Act registration for global funds." }
      ],
      timeline: "Full elevation to 'Grant Ready' status takes 45 to 90 days."
    },
    documents: {
      list: [
        "Trust Deed / MOA & AOA",
        "PAN & Aadhaar of all Trustees/Directors",
        "Audited Accounts for the last 3 years",
        "Detailed Activity Report with photos",
        "Bank Account Statement (specifically for the NGO)",
        "FCRA Prior Permission (if seeking global funds)"
      ],
      note: "The 'Board Composition' is often scrutinized by donors to ensure no conflict of interest."
    },
    commonMistakes: [
      { title: "Intermingling Funds", description: "Using personal bank accounts for NGO transactions." },
      { title: "Vague Reporting", description: "Failing to show actual outcomes (e.g., 'helped many' instead of 'trained 45 women')." }
    ],
    faqs: [
      { question: "Is 80G registration permanent?", answer: "No, under the new law, it must be renewed every 5 years." },
      { question: "What is Darpan ID?", answer: "It is a unique ID issued by NITI Aayog, mandatory for central government grants." }
    ],
    conclusion: {
      paragraphs: [
        "Your mission deserves to be funded at scale. Professional compliance is the bridge to that funding.",
        "We assist you in navigating the complex regulatory landscape of the social sector, ensuring your NGO reaches its full potential."
      ],
      ctaTitle: "Elevate Your Impact",
      ctaDescription: "Let's review your NGO's compliance and build your path to CSR funding."
    }
  }
];

export function getDetailedSchemeBySlug(slug: string): DetailedScheme | undefined {
  return detailedSchemes.find((scheme) => scheme.slug === slug);
}
