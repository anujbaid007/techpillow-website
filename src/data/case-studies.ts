export interface CaseStudy {
  slug: string;
  name: string;
  industry: string;
  industryTag: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  metrics: { value: string; label: string }[];
  testimonial?: { text: string; author: string; role: string };
  image: string;
  seo: { title: string; description: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "khwaishh",
    name: "Khwaishh",
    industry: "ecommerce",
    industryTag: "Fashion E-commerce",
    description:
      "A multi-vendor fashion marketplace built to spotlight young Indian designers and give them direct access to style-conscious buyers nationwide.",
    challenge:
      "Young Indian fashion designers had talented portfolios but no scalable way to reach buyers beyond local markets and Instagram DMs. Existing platforms either charged prohibitive commissions or lacked the multi-vendor architecture needed for a curated marketplace model. The client needed a platform that could onboard dozens of designer-vendors quickly, handle variable product catalogues, and deliver a premium shopping experience without the overhead of an enterprise e-commerce system.",
    solution:
      "TechPillow built a headless multi-vendor marketplace from the ground up — with individual vendor storefronts, centralised checkout, and a shared logistics integration layer. We built a streamlined vendor onboarding flow that reduced setup time from days to hours, and integrated a personalised recommendation engine to surface relevant designers to each shopper. The result was a platform that felt boutique but operated at scale, supporting rapid user and vendor growth from day one.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Razorpay", "AWS", "Redis"],
    metrics: [
      { value: "3x", label: "Vendor Onboarding Speed" },
      { value: "50K+", label: "Monthly Users" },
    ],
    image: "/images/case-studies/khwaishh.webp",
    seo: {
      title: "Khwaishh Multi-Vendor Fashion Marketplace — TechPillow Case Study",
      description:
        "How TechPillow built a multi-vendor fashion marketplace for young Indian designers, achieving 3x faster vendor onboarding and 50K+ monthly users.",
    },
  },
  {
    slug: "brainwoo",
    name: "BrainWoo",
    industry: "education",
    industryTag: "Education Platform",
    description:
      "A regional K-12 learning platform built to bridge the education gap for students in underserved communities across India.",
    challenge:
      "Students in Tier 3 towns and rural areas faced a stark choice: sub-standard local coaching or expensive urban edtech subscriptions that didn't reflect their curriculum or context. The client wanted to build an affordable, curriculum-aligned learning app that could operate reliably on entry-level Android devices with intermittent connectivity — a challenge that most edtech platforms had simply designed around rather than solved.",
    solution:
      "TechPillow developed a Flutter-based mobile application with offline-first architecture, enabling students to download lessons and complete assessments without an active internet connection, syncing progress when connectivity resumed. We built an adaptive assessment module that personalised practice questions based on performance data, and a teacher dashboard giving educators visibility into class-wide knowledge gaps. The result was a platform that genuinely worked for students with shared devices and data limitations.",
    techStack: ["Flutter", "Node.js", "PostgreSQL", "AWS", "Firebase", "Python"],
    metrics: [
      { value: "50K+", label: "Students Reached" },
      { value: "4.5", label: "App Store Rating" },
    ],
    image: "/images/case-studies/brainwoo.webp",
    seo: {
      title: "BrainWoo K-12 Learning Platform — TechPillow Case Study",
      description:
        "How TechPillow built an offline-first K-12 learning app that reached 50K+ students in underserved communities across India.",
    },
  },
  {
    slug: "itp-media",
    name: "ITP Media Group",
    industry: "entertainment-media",
    industryTag: "Media Company",
    description:
      "A cutting-edge interactive website for one of the world's largest media groups, reaching 104.6 million+ global readers with next-generation digital storytelling.",
    challenge:
      "ITP Media Group needed a web presence befitting their global editorial ambition — one that could handle the scale of 104.6 million monthly readers while delivering immersive, animation-rich digital experiences that stood apart from standard news websites. Legacy CMS constraints and a mixed-skill editorial team meant the solution had to be technically advanced yet editorially simple, without requiring developer involvement for every new content format.",
    solution:
      "TechPillow engineered a high-performance media website leveraging JavaScript-driven scroll animations, HTML5 canvas interactions, and a component-based editorial system that empowered journalists to create visually rich stories without writing code. We implemented a custom CDN strategy and aggressive image optimisation pipeline to ensure sub-2-second load times globally, and built reusable interactive template blocks that the editorial team could combine freely to create varied, engaging layouts.",
    techStack: ["React", "Next.js", "Node.js", "JavaScript", "HTML5", "AWS CloudFront", "Contentful"],
    metrics: [
      { value: "104.6M+", label: "Global Audience" },
      { value: "60%", label: "Engagement Boost" },
    ],
    image: "/images/case-studies/itp-media.webp",
    seo: {
      title: "ITP Media Group Interactive Website — TechPillow Case Study",
      description:
        "How TechPillow built an interactive, animation-driven media website for ITP Media Group, serving 104.6M+ global readers with a 60% engagement increase.",
    },
  },
  {
    slug: "growpital",
    name: "Growpital",
    industry: "agritech",
    industryTag: "AgriTech Investment",
    description:
      "An agricultural investment platform that democratises fractional ownership of agri-assets, opening institutional-quality returns to retail investors across India.",
    challenge:
      "Agricultural investment had historically been the preserve of wealthy landowners and institutional funds — retail investors lacked any legitimate, regulated pathway to participate in agri-assets. Growpital needed a platform that could explain complex agri-investment products to first-time investors, manage fractional ownership records, and build trust through transparent portfolio reporting — all while meeting SEBI and regulatory compliance requirements.",
    solution:
      "TechPillow built a full-stack investment platform with a consumer-facing web and mobile app that simplified the investor journey from discovery to commitment. We developed a portfolio dashboard providing real-time updates on crop cycles, yield projections, and return distributions, and implemented a KYC and compliance engine to onboard investors digitally. The platform's clear, data-driven design materially increased investor confidence, and proactive engagement campaigns drove a significant uplift in new registrations.",
    techStack: ["React", "Node.js", "PostgreSQL", "Razorpay", "AWS", "Flutter", "Python"],
    metrics: [
      { value: "2x", label: "Investor Signups" },
      { value: "40%", label: "Portfolio Growth" },
    ],
    testimonial: {
      text: "TechPillow's team has been very proactive and has proven their value — we've seen a significant increase in our site traffic, and the regular updates and redesigning of certain elements really made the website look more aesthetic and attractive.",
      author: "Ashish Dalal",
      role: "Marketing Head, Growpital",
    },
    image: "/images/case-studies/growpital.webp",
    seo: {
      title: "Growpital Agricultural Investment Platform — TechPillow Case Study",
      description:
        "How TechPillow built Growpital's agricultural investment platform, doubling investor signups and enabling fractional ownership of agri-assets for retail investors across India.",
    },
  },
  {
    slug: "eastmojo",
    name: "EastMojo",
    industry: "entertainment-media",
    industryTag: "Digital News",
    description:
      "A digital news platform dedicated to Northeast India — delivering ground-zero reporting, breaking news, and cultural stories to a million monthly readers.",
    challenge:
      "Northeast India has long been underserved by mainstream national media. EastMojo had the journalism but needed a digital platform that could support mobile-first readers across the region — many on constrained data plans — while competing with the UI sophistication of national news apps. The platform also needed to handle traffic spikes during breaking news events without performance degradation, and to surface relevant regional content intelligently without overwhelming readers.",
    solution:
      "TechPillow built a Next.js-powered news platform with a custom headless CMS, designed mobile-first with lightweight pages that loaded quickly even on 2G connections. We implemented a topic-based content graph for intelligent related story recommendations, and engineered the infrastructure to auto-scale during traffic spikes — eliminating the crash-on-big-story problem that had plagued the previous platform. SEO-optimised article architecture and AMP support drove substantial organic growth, with mobile traffic now accounting for over 85% of all sessions.",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS", "Elasticsearch", "Cloudflare"],
    metrics: [
      { value: "1M+", label: "Monthly Readers" },
      { value: "85%", label: "Mobile Traffic" },
    ],
    image: "/images/case-studies/eastmojo.webp",
    seo: {
      title: "EastMojo Digital News Platform — TechPillow Case Study",
      description:
        "How TechPillow built EastMojo's digital news platform, scaling to 1M+ monthly readers with 85% mobile traffic for Northeast India's leading news outlet.",
    },
  },
  {
    slug: "bitmemoir",
    name: "BitMemoir",
    industry: "blockchain-web3",
    industryTag: "Blockchain Certifications",
    description:
      "A blockchain-powered platform for issuing tamper-proof digital certifications and NFTs, giving individuals verifiable, permanent ownership of their credentials.",
    challenge:
      "Credential fraud is a significant and growing problem in India — fake degrees and forged certificates cost employers and institutions enormous resources to verify. BitMemoir's vision was to leverage blockchain's immutability to create certificates that could never be faked, altered, or lost. The challenge was building a system that was technically rigorous enough to be trustworthy but simple enough for institutions to issue and for individuals to share with employers — without requiring any blockchain knowledge from either party.",
    solution:
      "TechPillow designed and built a blockchain certification platform that abstracted all Web3 complexity from end users. Institutions could upload recipient data via a simple dashboard and issue verifiable credentials minted as NFTs on the Polygon network in bulk — at a fraction of Ethereum mainnet costs. Recipients received a shareable URL and QR code for their certificate, and any employer could verify authenticity in seconds without creating a wallet or understanding blockchain. The platform maintained 99.9% uptime across all certificate verifications.",
    techStack: ["React", "Node.js", "Solidity", "Polygon", "IPFS", "PostgreSQL", "AWS"],
    metrics: [
      { value: "10K+", label: "Certificates Issued" },
      { value: "99.9%", label: "Verification Uptime" },
    ],
    testimonial: {
      text: "Very enthusiastic and hardworking team — they brought my thought and vision to the website and delivered exactly the output I wanted. The team was very responsive and took actions as deemed necessary.",
      author: "Nikhil Goel",
      role: "Founder, BitMemoir",
    },
    image: "/images/case-studies/bitmemoir.webp",
    seo: {
      title: "BitMemoir Blockchain Certification Platform — TechPillow Case Study",
      description:
        "How TechPillow built BitMemoir's blockchain certification platform, issuing 10K+ tamper-proof digital credentials on Polygon with 99.9% uptime.",
    },
  },
];
