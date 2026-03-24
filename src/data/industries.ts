export interface Industry {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  capabilities: string[];
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  techStack: string[];
  seo: { title: string; description: string };
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    shortDescription:
      "Digital health solutions built for India's regulatory landscape — from telemedicine to hospital management systems.",
    icon: "HeartPulse",
    capabilities: [
      "Telemedicine Platforms",
      "Patient Monitoring",
      "Hospital Management",
      "Health Records (ABDM)",
    ],
    challenges: [
      {
        title: "Fragmented Patient Records",
        description:
          "Patient data scattered across disconnected systems makes diagnosis harder and increases clinical errors. ABDM compliance adds another layer of complexity for Indian providers.",
      },
      {
        title: "Last-Mile Healthcare Access",
        description:
          "Over 600 million Indians live in areas underserved by physical healthcare facilities. Reaching these patients digitally requires low-bandwidth, multilingual solutions that work on entry-level smartphones.",
      },
      {
        title: "Regulatory Complexity",
        description:
          "Telemedicine guidelines, DPDP Act requirements, and ABDM integration mandates create a compliance minefield for health-tech startups and hospital networks alike.",
      },
      {
        title: "Appointment & Queue Management",
        description:
          "OPD queues and appointment no-shows waste clinician time and frustrate patients, directly impacting revenue and care quality.",
      },
    ],
    solutions: [
      {
        title: "ABDM-Compliant EMR Systems",
        description:
          "Electronic medical records integrated with India's Ayushman Bharat Digital Mission, enabling seamless health data sharing across providers.",
      },
      {
        title: "Telemedicine Platforms",
        description:
          "Video consultation, e-prescription, and digital diagnostic workflows optimized for low-bandwidth conditions across Tier 2 and Tier 3 India.",
      },
      {
        title: "Patient Engagement Apps",
        description:
          "Multilingual mobile apps for appointment booking, medication reminders, and chronic disease management with offline capability.",
      },
      {
        title: "Hospital Management Systems",
        description:
          "End-to-end HMS covering OPD, IPD, pharmacy, lab, billing, and insurance claim management for multi-location hospital networks.",
      },
      {
        title: "AI Diagnostic Tools",
        description:
          "Machine learning models for radiology image analysis, clinical NLP for physician notes, and risk stratification for chronic conditions.",
      },
    ],
    techStack: ["React Native", "Node.js", "FHIR", "PostgreSQL", "AWS", "Python"],
    seo: {
      title: "Healthcare Software Development Company in India — TechPillow",
      description:
        "ABDM-compliant EMR, telemedicine, and hospital management software by TechPillow. Serving Indian healthcare providers and health-tech startups.",
    },
  },
  {
    slug: "fintech",
    name: "FinTech",
    shortDescription:
      "Secure, compliant financial technology for lending, payments, wealth management, and beyond.",
    icon: "Landmark",
    capabilities: [
      "Digital Lending Platforms",
      "Payment Gateways",
      "Wealth Management",
      "KYC & Compliance",
    ],
    challenges: [
      {
        title: "RBI & SEBI Compliance",
        description:
          "India's financial regulatory framework is evolving rapidly. Non-compliance with RBI lending guidelines or SEBI regulations can result in licence revocation and heavy penalties.",
      },
      {
        title: "Fraud and Security Risk",
        description:
          "UPI fraud, account takeover, and synthetic identity fraud are growing threats that erode user trust and force expensive remediation.",
      },
      {
        title: "Credit Access for the Unbanked",
        description:
          "Over 190 million Indians remain unbanked or underbanked. Building credit models for thin-file customers requires alternative data and ML-driven approaches.",
      },
    ],
    solutions: [
      {
        title: "Digital Lending Platforms",
        description:
          "End-to-end NBFC and lending platform development with bureau integration, rule-based underwriting, and RBI-compliant disbursement flows.",
      },
      {
        title: "UPI & Payment Integration",
        description:
          "Payment gateway integration, UPI stack implementation, and reconciliation automation for merchants and platforms.",
      },
      {
        title: "KYC & AML Automation",
        description:
          "Aadhaar eKYC, Video KYC, PAN verification, and automated AML screening to reduce onboarding friction while meeting regulatory requirements.",
      },
      {
        title: "Fraud Detection",
        description:
          "Real-time transaction monitoring and ML-based anomaly detection to flag and block fraudulent activity before it completes.",
      },
      {
        title: "Wealth & Investment Platforms",
        description:
          "Mutual fund distribution, portfolio management, and robo-advisory platforms built for SEBI-registered investment advisors.",
      },
    ],
    techStack: ["Node.js", "Java", "PostgreSQL", "Redis", "AWS", "Python"],
    seo: {
      title: "FinTech Software Development Company in India — TechPillow",
      description:
        "RBI-compliant lending platforms, UPI integration, and fraud detection systems by TechPillow. India's trusted FinTech development partner.",
    },
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    shortDescription:
      "High-conversion commerce platforms — from D2C storefronts to large-scale multi-vendor marketplaces.",
    icon: "ShoppingCart",
    capabilities: [
      "Multi-Vendor Marketplaces",
      "D2C Storefronts",
      "Order Management",
      "Personalization Engine",
    ],
    challenges: [
      {
        title: "Fierce Competition from Aggregators",
        description:
          "Competing against Flipkart, Meesho, and Amazon requires differentiation through brand experience, niche assortment, and faster delivery — not price wars.",
      },
      {
        title: "Cart Abandonment",
        description:
          "Indian e-commerce platforms average 70%+ cart abandonment, often driven by trust issues at checkout, COD dependency, and slow load times.",
      },
      {
        title: "Logistics Complexity",
        description:
          "Managing multi-carrier fulfillment, return logistics, and hyperlocal delivery across India's diverse geographies is operationally complex and expensive.",
      },
    ],
    solutions: [
      {
        title: "Custom Storefront Development",
        description:
          "Headless commerce storefronts built on Next.js with sub-2-second load times, built-in A/B testing, and CMS-driven content management.",
      },
      {
        title: "Multi-Vendor Marketplace",
        description:
          "Scalable marketplace platforms with vendor onboarding, catalogue management, commission workflows, and seller analytics dashboards.",
      },
      {
        title: "Checkout Optimisation",
        description:
          "One-click checkout, saved UPI mandates, COD verification flows, and trust signals that measurably reduce abandonment rates.",
      },
      {
        title: "Logistics Integration",
        description:
          "API integrations with Shiprocket, Delhivery, and Dunzo alongside custom order management and returns workflows.",
      },
      {
        title: "Recommendation Engine",
        description:
          "ML-driven product recommendations, dynamic pricing, and personalised email/push campaigns to increase repeat purchase rate.",
      },
    ],
    techStack: ["Next.js", "React", "Node.js", "Shopify", "PostgreSQL", "Redis"],
    seo: {
      title: "E-commerce Development Company in India — TechPillow",
      description:
        "Custom e-commerce platforms, multi-vendor marketplaces, and Shopify development by TechPillow. Built for Indian D2C brands and marketplaces.",
    },
  },
  {
    slug: "education",
    name: "Education",
    shortDescription:
      "EdTech platforms that reach students in metros and beyond — engaging, scalable, and accessible.",
    icon: "GraduationCap",
    capabilities: [
      "Learning Management Systems",
      "Adaptive Assessments",
      "Live Class Infrastructure",
      "Student Analytics",
    ],
    challenges: [
      {
        title: "Engagement and Completion Rates",
        description:
          "Online courses suffer from low completion rates — often under 10% — driven by passive content formats and lack of accountability mechanisms.",
      },
      {
        title: "Reaching Underserved Students",
        description:
          "Students in Tier 3 towns and rural areas often have intermittent internet and low-end devices, requiring apps that perform well under constrained conditions.",
      },
      {
        title: "Assessment Integrity",
        description:
          "Online proctoring and assessment integrity are ongoing challenges for certification bodies and competitive exam platforms.",
      },
    ],
    solutions: [
      {
        title: "Learning Management Systems",
        description:
          "Custom LMS platforms with video streaming, gamification, progress tracking, and multilingual content delivery optimised for Indian networks.",
      },
      {
        title: "Live Class & Cohort Platforms",
        description:
          "Live teaching infrastructure with interactive whiteboards, breakout rooms, polls, and attendance tracking for synchronous learning.",
      },
      {
        title: "Adaptive Assessment Engine",
        description:
          "Item response theory-based adaptive tests that adjust difficulty in real time, providing more accurate skill measurement.",
      },
      {
        title: "Offline-First Mobile Apps",
        description:
          "Content download and offline playback for students with unreliable internet connectivity, with seamless sync when connectivity returns.",
      },
      {
        title: "Educator Analytics Dashboard",
        description:
          "Dashboards giving teachers and administrators visibility into engagement, performance trends, and at-risk student identification.",
      },
    ],
    techStack: ["React", "Node.js", "Flutter", "PostgreSQL", "AWS", "WebRTC"],
    seo: {
      title: "EdTech Platform Development Company in India — TechPillow",
      description:
        "Custom LMS, live class platforms, and adaptive assessment tools by TechPillow. Serving Indian EdTech startups and educational institutions.",
    },
  },
  {
    slug: "logistics",
    name: "Logistics",
    shortDescription:
      "Tech-driven logistics platforms that reduce delivery costs, improve visibility, and delight customers.",
    icon: "Truck",
    capabilities: [
      "Fleet Management",
      "Route Optimisation",
      "Real-Time Tracking",
      "Warehouse Management",
    ],
    challenges: [
      {
        title: "Last-Mile Delivery Cost",
        description:
          "Last-mile delivery accounts for over 40% of total logistics cost in India. Inefficient routing and idle vehicles destroy margins, especially for same-day delivery commitments.",
      },
      {
        title: "Visibility Across the Supply Chain",
        description:
          "Lack of real-time visibility leads to reactive operations — delays are discovered when customers complain, not when shipments deviate from plan.",
      },
      {
        title: "Driver Retention and Management",
        description:
          "High driver attrition, cash COD handling, and inconsistent service quality are persistent pain points for logistics operators across India.",
      },
    ],
    solutions: [
      {
        title: "Fleet Tracking & Telematics",
        description:
          "Real-time GPS tracking, driver behaviour monitoring, and fuel management systems integrated with your existing dispatch operations.",
      },
      {
        title: "Route Optimisation Engine",
        description:
          "AI-powered routing that accounts for traffic, delivery windows, vehicle capacity, and priority to reduce kilometres driven per delivery.",
      },
      {
        title: "Driver App",
        description:
          "Mobile-first driver apps with turn-by-turn navigation, digital proof of delivery, COD collection tracking, and in-app support.",
      },
      {
        title: "Customer Tracking Portal",
        description:
          "Branded tracking pages and proactive SMS/WhatsApp notifications that reduce inbound customer queries by up to 60%.",
      },
      {
        title: "Warehouse Management System",
        description:
          "Inventory management, pick-pack-ship workflows, and barcode/RFID integration for efficient fulfilment centre operations.",
      },
    ],
    techStack: ["Node.js", "React", "Flutter", "PostgreSQL", "Redis", "Google Maps API"],
    seo: {
      title: "Logistics Software Development Company in India — TechPillow",
      description:
        "Fleet management, route optimisation, and last-mile delivery technology by TechPillow. Serving Indian logistics operators and supply chain businesses.",
    },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    shortDescription:
      "PropTech platforms that simplify property discovery, transactions, and portfolio management.",
    icon: "Building2",
    capabilities: [
      "Property Listing Platforms",
      "Virtual Tours",
      "Transaction Management",
      "CRM for Brokers",
    ],
    challenges: [
      {
        title: "Opaque Pricing and Poor Discovery",
        description:
          "Buyers and renters struggle to compare properties fairly in India's fragmented market, leading to distrust and extended sales cycles for developers and brokers.",
      },
      {
        title: "Manual Document-Heavy Processes",
        description:
          "Property registration, title verification, and loan origination involve mountains of paperwork that delay transactions by weeks or months.",
      },
      {
        title: "Broker Productivity",
        description:
          "Most real estate agencies in India still manage leads via WhatsApp and spreadsheets, resulting in missed follow-ups and lost revenue.",
      },
    ],
    solutions: [
      {
        title: "Property Listing & Search",
        description:
          "Location-aware property portals with AI-powered recommendations, verified listings, price trend analytics, and map-based discovery.",
      },
      {
        title: "Virtual Tours & 3D Walkthroughs",
        description:
          "360-degree virtual tours and interactive floor plans that let buyers evaluate properties remotely before site visits.",
      },
      {
        title: "Broker CRM",
        description:
          "Mobile-first CRM for real estate agents with lead management, follow-up automation, document storage, and commission tracking.",
      },
      {
        title: "Digital Transaction Platform",
        description:
          "End-to-end digital transaction workflows covering token payment, agreement generation, stamp duty, and registration appointment scheduling.",
      },
      {
        title: "Developer Sales Dashboard",
        description:
          "Real-time inventory and sales dashboards for housing developers to track channel partner performance and project pipeline.",
      },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Google Maps API", "AWS", "Flutter"],
    seo: {
      title: "Real Estate Software Development Company in India — TechPillow",
      description:
        "PropTech platforms, property listing portals, and broker CRM development by TechPillow. Serving Indian real estate developers and agencies.",
    },
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    shortDescription:
      "End-to-end tech for restaurants, cloud kitchens, and food brands — from ordering to operations.",
    icon: "UtensilsCrossed",
    capabilities: [
      "Online Ordering Platforms",
      "Kitchen Display Systems",
      "Loyalty Programs",
      "Inventory Management",
    ],
    challenges: [
      {
        title: "High Aggregator Commission Dependency",
        description:
          "Zomato and Swiggy commissions of 20-30% gut restaurant margins. Brands need owned ordering channels to retain profitability on digital orders.",
      },
      {
        title: "Kitchen Efficiency and Waste",
        description:
          "Poor demand forecasting leads to food waste and stockouts, directly impacting both cost and customer satisfaction.",
      },
      {
        title: "Customer Retention",
        description:
          "Aggregator platforms own the customer relationship. Restaurants struggle to build direct loyalty and repeat purchase behaviour without their own digital presence.",
      },
    ],
    solutions: [
      {
        title: "Direct Ordering App & Website",
        description:
          "Branded mobile apps and websites with online ordering, UPI/card payment, and real-time order tracking — bypassing aggregator commissions.",
      },
      {
        title: "Kitchen Display System",
        description:
          "Digital KDS that routes orders from all channels to the right kitchen stations, reducing order errors and preparation time.",
      },
      {
        title: "Loyalty & CRM Platform",
        description:
          "Points-based loyalty, personalised offers, and WhatsApp re-engagement campaigns to build a direct customer base.",
      },
      {
        title: "Inventory & Recipe Management",
        description:
          "Inventory tracking with recipe costing, waste logging, and automated reorder alerts integrated with POS and supplier systems.",
      },
      {
        title: "Cloud Kitchen Management",
        description:
          "Multi-brand, multi-location operations management with consolidated order dashboards and performance analytics by brand and outlet.",
      },
    ],
    techStack: ["React Native", "Node.js", "PostgreSQL", "Razorpay", "Firebase", "React"],
    seo: {
      title: "Food & Beverage App Development Company in India — TechPillow",
      description:
        "Restaurant ordering apps, cloud kitchen platforms, and loyalty systems by TechPillow. Serving Indian F&B brands looking to reduce aggregator dependency.",
    },
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    shortDescription:
      "Seamless booking experiences and smart operations for hotels, OTAs, and travel businesses.",
    icon: "Plane",
    capabilities: [
      "Booking Engine",
      "Property Management",
      "Revenue Management",
      "Guest Experience Apps",
    ],
    challenges: [
      {
        title: "OTA Dependency and Commission Drain",
        description:
          "Hotels and tour operators paying MakeMyTrip and Booking.com commissions of 15-25% need direct booking channels to protect profitability.",
      },
      {
        title: "Dynamic Pricing Complexity",
        description:
          "Manually managing room rates across seasons, events, and competitors is error-prone and leaves significant revenue on the table.",
      },
      {
        title: "Fragmented Guest Experience",
        description:
          "Check-in queues, paper-based requests, and disconnected F&B and housekeeping systems create a subpar guest experience that shows up in review scores.",
      },
    ],
    solutions: [
      {
        title: "Hotel Booking Engine",
        description:
          "Direct booking engine with dynamic pricing, inventory management, and channel manager integration across OTAs and GDS.",
      },
      {
        title: "Property Management System",
        description:
          "Front desk, housekeeping, F&B, and billing in a single cloud PMS optimised for independent hotels and boutique chains.",
      },
      {
        title: "Guest Experience App",
        description:
          "Mobile check-in/check-out, digital concierge, in-app room service ordering, and real-time feedback collection for elevated guest satisfaction.",
      },
      {
        title: "Revenue Management",
        description:
          "AI-driven rate recommendations based on occupancy forecasts, competitor rates, and local events to maximise RevPAR.",
      },
      {
        title: "Tour & Activity Platform",
        description:
          "Custom booking platforms for tour operators with itinerary management, guide assignment, and integrated payment processing.",
      },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Python"],
    seo: {
      title: "Travel & Hospitality Software Development in India — TechPillow",
      description:
        "Hotel management systems, booking engines, and guest experience apps by TechPillow. Serving Indian hotels, OTAs, and travel businesses.",
    },
  },
  {
    slug: "entertainment-media",
    name: "Entertainment & Media",
    shortDescription:
      "Scalable streaming, publishing, and fan engagement platforms for digital-first media brands.",
    icon: "Tv",
    capabilities: [
      "Video Streaming Platforms",
      "Content Management",
      "Audience Analytics",
      "Monetisation",
    ],
    challenges: [
      {
        title: "Content Delivery at Scale",
        description:
          "Serving high-quality video to millions of concurrent viewers across India's heterogeneous network conditions requires sophisticated adaptive streaming and CDN strategies.",
      },
      {
        title: "Monetisation Beyond Subscriptions",
        description:
          "Pure subscription models face high churn in price-sensitive markets. Platforms need flexible hybrid monetisation — SVOD, AVOD, TVOD, and bundling — to maximise LTV.",
      },
      {
        title: "Content Piracy",
        description:
          "DRM implementation, watermarking, and geo-restriction enforcement are critical — yet technically complex — for premium content owners.",
      },
    ],
    solutions: [
      {
        title: "OTT & Video Streaming Platform",
        description:
          "Full-stack OTT platform with adaptive bitrate streaming, multi-DRM, offline downloads, and apps across iOS, Android, Smart TV, and web.",
      },
      {
        title: "Content Management System",
        description:
          "Enterprise CMS for media organisations with editorial workflows, multi-author support, paywall management, and SEO automation.",
      },
      {
        title: "Audience Analytics",
        description:
          "Real-time viewing analytics, content performance dashboards, and audience segmentation for data-driven commissioning decisions.",
      },
      {
        title: "Interactive Web Experiences",
        description:
          "Engaging editorial websites with JavaScript-driven animations, interactive infographics, and live blog infrastructure for breaking news.",
      },
      {
        title: "Monetisation Infrastructure",
        description:
          "Subscription management, programmatic ad integration, and micropayment capabilities for flexible hybrid revenue models.",
      },
    ],
    techStack: ["React", "Node.js", "AWS CloudFront", "HLS.js", "PostgreSQL", "Elasticsearch"],
    seo: {
      title: "Media & Entertainment Software Development in India — TechPillow",
      description:
        "OTT platforms, media CMS, and audience analytics by TechPillow. Serving Indian digital media companies and content publishers.",
    },
  },
  {
    slug: "on-demand",
    name: "On-Demand Services",
    shortDescription:
      "Marketplace and on-demand platforms that connect customers with services — fast, reliable, and scalable.",
    icon: "Zap",
    capabilities: [
      "Service Marketplace",
      "Real-Time Dispatch",
      "Provider Management",
      "Rating & Review",
    ],
    challenges: [
      {
        title: "Supply-Demand Balancing",
        description:
          "On-demand platforms live and die by their ability to match supply and demand in real time. Surplus providers during slow periods and shortages at peak times both destroy unit economics.",
      },
      {
        title: "Provider Quality and Trust",
        description:
          "Maintaining consistent service quality across hundreds or thousands of independent providers is the central challenge for on-demand marketplaces.",
      },
      {
        title: "Hyperlocal Complexity",
        description:
          "Operating across Indian cities means managing extreme geographic density variation, language diversity, and local regulatory requirements.",
      },
    ],
    solutions: [
      {
        title: "On-Demand Marketplace Platform",
        description:
          "Three-sided marketplace (customer, provider, admin) with real-time dispatch, booking management, and commission workflows.",
      },
      {
        title: "Provider App",
        description:
          "Feature-rich provider mobile app with job acceptance, real-time navigation, earnings dashboard, and in-app support.",
      },
      {
        title: "Customer App",
        description:
          "Consumer app with service discovery, booking, live tracking, in-app payment, and post-service rating and review.",
      },
      {
        title: "Dynamic Pricing Engine",
        description:
          "Surge pricing and demand-based rate management to optimise supply availability during peak periods.",
      },
      {
        title: "Operations Dashboard",
        description:
          "Real-time command centre for ops teams — live map view, exception management, provider performance, and SLA monitoring.",
      },
    ],
    techStack: ["React Native", "Node.js", "PostgreSQL", "Redis", "Google Maps API", "Firebase"],
    seo: {
      title: "On-Demand App Development Company in India — TechPillow",
      description:
        "On-demand service marketplace development by TechPillow. Customer apps, provider apps, and dispatch platforms for Indian hyperlocal businesses.",
    },
  },
  {
    slug: "agritech",
    name: "AgriTech",
    shortDescription:
      "Technology that empowers Indian farmers and agricultural investors with data, access, and efficiency.",
    icon: "Sprout",
    capabilities: [
      "Farm Management Systems",
      "Agricultural Marketplaces",
      "Investment Platforms",
      "Crop Advisory",
    ],
    challenges: [
      {
        title: "Market Access and Price Discovery",
        description:
          "Indian smallholder farmers sell through intermediaries who capture most of the margin. Direct market access and transparent price discovery can significantly increase farmer income.",
      },
      {
        title: "Input Supply Chain",
        description:
          "Access to quality seeds, fertilisers, and pesticides at fair prices is inconsistent in rural India, driving input costs up and yields down.",
      },
      {
        title: "Agricultural Finance",
        description:
          "Formal credit penetration in Indian agriculture remains low. Farmers rely on informal lenders at exploitative rates for seasonal financing.",
      },
    ],
    solutions: [
      {
        title: "Farmer-to-Market Platform",
        description:
          "Direct digital marketplace connecting farmers with buyers — FPOs, retailers, and processors — with transparent pricing and logistics integration.",
      },
      {
        title: "Agricultural Investment Platform",
        description:
          "Fractional investment platforms enabling retail investors to participate in agricultural projects with transparent returns and portfolio tracking.",
      },
      {
        title: "Crop Advisory App",
        description:
          "AI-driven crop advisory delivering personalised recommendations on sowing, irrigation, pest management, and harvest timing via SMS and app.",
      },
      {
        title: "Farm Management System",
        description:
          "Digital farm records, input tracking, and yield analytics for progressive farmers, FPOs, and agri-enterprises managing large land banks.",
      },
      {
        title: "Weather & Satellite Integration",
        description:
          "Integration with IMD weather APIs and satellite imagery for field-level crop health monitoring and risk assessment.",
      },
    ],
    techStack: ["Flutter", "Python", "Node.js", "PostgreSQL", "AWS", "Google Earth Engine"],
    seo: {
      title: "AgriTech Software Development Company in India — TechPillow",
      description:
        "Agricultural investment platforms, farmer marketplace, and crop advisory apps by TechPillow. Serving India's agri-tech ecosystem.",
    },
  },
  {
    slug: "blockchain-web3",
    name: "Blockchain & Web3",
    shortDescription:
      "Enterprise blockchain, NFT, and Web3 solutions built for real use cases, not speculation.",
    icon: "Link",
    capabilities: [
      "Smart Contract Development",
      "NFT Platforms",
      "Digital Certifications",
      "DeFi Protocols",
    ],
    challenges: [
      {
        title: "Trust and Verification Gaps",
        description:
          "Credential fraud, counterfeit goods, and opaque supply chains are problems that blockchain's immutability is genuinely well-suited to solve — when implemented correctly.",
      },
      {
        title: "Regulatory Uncertainty in India",
        description:
          "India's evolving stance on crypto assets creates compliance complexity for Web3 businesses. Navigating VDA taxation and RBI guidelines requires legal and technical alignment.",
      },
      {
        title: "User Adoption Barriers",
        description:
          "Web3 UX is notoriously poor — wallet management, gas fees, and seed phrases alienate mainstream users. Consumer Web3 products must abstract this complexity entirely.",
      },
    ],
    solutions: [
      {
        title: "Blockchain Certification Platform",
        description:
          "Immutable digital credential issuance on blockchain — tamper-proof certificates for universities, training providers, and professional bodies.",
      },
      {
        title: "NFT Platform Development",
        description:
          "Custom NFT minting, marketplace, and management platforms built on Ethereum, Polygon, or Solana tailored to your use case.",
      },
      {
        title: "Smart Contract Development",
        description:
          "Audited Solidity and Rust smart contracts for token issuance, DAOs, escrow, and royalty management with comprehensive test suites.",
      },
      {
        title: "Supply Chain Traceability",
        description:
          "Blockchain-based provenance tracking for food, pharma, and luxury goods — enabling end-to-end transparency from farm or factory to consumer.",
      },
      {
        title: "Web3 Wallet Integration",
        description:
          "Seamless wallet-connect integration and custodial wallet solutions that make Web3 features accessible to non-crypto-native users.",
      },
    ],
    techStack: ["Solidity", "Ethereum", "Polygon", "React", "Node.js", "IPFS"],
    seo: {
      title: "Blockchain & Web3 Development Company in India — TechPillow",
      description:
        "Smart contracts, NFT platforms, and blockchain certification solutions by TechPillow. Enterprise blockchain development for Indian and global businesses.",
    },
  },
];
