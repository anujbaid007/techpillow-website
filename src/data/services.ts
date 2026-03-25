export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  shortDescription: string;
  capabilities: { title: string; description: string }[];
  techStack: { name: string; icon: string }[];
  process: { step: string; description: string }[];
  seo: { title: string; description: string };
}

export const services: Service[] = [
  {
    slug: "software-development",
    name: "Custom Software Development",
    tagline: "Built to scale, engineered to last.",
    description:
      "India's custom software market is projected to hit USD 10.5 billion by 2030, growing at 28.5% CAGR — and we're building the systems that matter. From complex enterprise platforms to lightweight internal tools, our engineers ship clean, maintainable code that holds up under real-world pressure. We've helped startups replace brittle legacy systems and helped enterprises automate workflows that were costing them lakhs every month. Every engagement begins with understanding your business, not just your backlog. Whether it's a GST-compliant ERP, a multi-tenant SaaS platform, or a microservices migration — we build software your team can own long after handover.",
    icon: "Code",
    shortDescription:
      "Scalable backends, APIs, and enterprise tools engineered for the long haul. Cut downtime, launch faster, spend less on maintenance.",
    capabilities: [
      {
        title: "Enterprise Software",
        description:
          "End-to-end custom enterprise applications built for high availability, compliance, and complex multi-user workflows.",
      },
      {
        title: "SaaS Platforms",
        description:
          "Multi-tenant SaaS products architected for growth — from zero to thousands of concurrent users without re-engineering.",
      },
      {
        title: "API Development",
        description:
          "Robust RESTful and GraphQL APIs that integrate cleanly with third-party systems, mobile apps, and internal services.",
      },
      {
        title: "Legacy Modernization",
        description:
          "Migrate off outdated stacks without disrupting operations. We modernize incrementally so your business never stops.",
      },
      {
        title: "ERP / CRM Systems",
        description:
          "Custom ERP and CRM solutions tailored to Indian business processes — or expert customization of platforms like Odoo and Salesforce.",
      },
      {
        title: "Database Architecture",
        description:
          "Performant, secure database design optimized for your data model, query patterns, and future scale.",
      },
    ],
    techStack: [
      { name: "Node.js", icon: "node" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: ".NET", icon: "dotnet" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
    ],
    process: [
      {
        step: "Discovery",
        description:
          "We audit your existing systems, map business requirements, and identify technical risks before writing a single line of code.",
      },
      {
        step: "Architecture",
        description:
          "Our architects design a system blueprint — data models, service boundaries, API contracts — aligned to your scale and budget.",
      },
      {
        step: "Development",
        description:
          "Agile sprints with weekly demos. You see working software early and often, not just at the end of a 6-month contract.",
      },
      {
        step: "Testing & QA",
        description:
          "Automated testing, load testing, and security audits baked into the development cycle — not bolted on at the end.",
      },
      {
        step: "Deploy & Support",
        description:
          "We handle production deployment, hand over documentation, and provide ongoing support so your team is never left stranded.",
      },
    ],
    seo: {
      title: "Custom Software Development Company in India — TechPillow",
      description:
        "Build enterprise-grade custom software with TechPillow. Scalable backends, SaaS platforms, APIs, and legacy modernization. Based in Gurugram, serving clients globally.",
    },
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    tagline: "Your app shouldn't crash on demo day.",
    description:
      "India's app economy is racing toward USD 27.7 billion by 2030, and 75% of tech startups now choose cross-platform over native. We build mobile applications that users actually want to open every day — whether that's a Flutter app with pixel-perfect animations, a React Native product sharing logic with your web platform, or a native Swift/Kotlin build for maximum hardware access. With India's 5G subscriber base crossing 350 million and 600,000 villages coming online via the National Broadband Mission, your app needs to perform from flagship phones in Mumbai to budget handsets in Tier 3 towns. We've shipped apps in fintech, edtech, healthcare, and on-demand verticals — and we treat app store ratings as a KPI, not an afterthought.",
    icon: "Smartphone",
    shortDescription:
      "Native and cross-platform apps built for performance and retention. Fast builds, clean code, zero drama.",
    capabilities: [
      {
        title: "iOS Native",
        description:
          "Swift-based iOS apps that leverage the full power of Apple's platform — from widgets and Siri integration to ARKit and HealthKit.",
      },
      {
        title: "Android Native",
        description:
          "Kotlin-first Android development optimized for the fragmented Indian device landscape, from flagship phones to budget handsets.",
      },
      {
        title: "Flutter Cross-Platform",
        description:
          "Single codebase, native performance on both iOS and Android. Flutter holds 46% of the cross-platform market — it's our default recommendation for most consumer apps.",
      },
      {
        title: "React Native",
        description:
          "For teams with existing React expertise, we build robust React Native apps with the new Bridgeless Architecture that eliminates JS bridge bottlenecks.",
      },
      {
        title: "App Store Optimization",
        description:
          "We optimize listings, screenshots, and metadata to improve visibility and conversion rates on the App Store and Google Play.",
      },
      {
        title: "Maintenance & Upgrades",
        description:
          "Proactive OS compatibility updates, performance monitoring, and feature releases so your app stays competitive post-launch.",
      },
    ],
    techStack: [
      { name: "Swift", icon: "swift" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Flutter", icon: "flutter" },
      { name: "React Native", icon: "react" },
      { name: "Firebase", icon: "firebase" },
    ],
    process: [
      {
        step: "Discovery & Scoping",
        description:
          "We define your target users, map core user journeys, and identify the MVP feature set that will get you to market fastest.",
      },
      {
        step: "UI/UX Design",
        description:
          "Interactive prototypes reviewed with real users before development begins, saving costly rework down the line.",
      },
      {
        step: "Development",
        description:
          "Iterative sprints with TestFlight and internal Android builds delivered regularly so you can test on real devices.",
      },
      {
        step: "QA & Performance",
        description:
          "Device matrix testing, crash monitoring setup, and performance benchmarking to ensure a smooth launch.",
      },
      {
        step: "Launch & Growth",
        description:
          "We manage app store submission, monitor post-launch metrics, and iterate quickly on user feedback.",
      },
    ],
    seo: {
      title: "Mobile App Development Company in India — TechPillow",
      description:
        "iOS, Android, Flutter, and React Native app development by TechPillow. 50+ apps shipped. Based in Gurugram, serving startups and enterprises across India.",
    },
  },
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "Fast, responsive, and built to convert.",
    description:
      "We build web products that load fast, look great, and drive business outcomes. From high-traffic e-commerce platforms to complex single-page applications, our front-end and full-stack engineers deliver experiences that outperform the competition. We're opinionated about performance — Core Web Vitals aren't optional. And we're opinionated about maintainability — your team should be able to own the codebase long after we hand it over.",
    icon: "Globe",
    shortDescription:
      "Fast, responsive web applications from SPAs to e-commerce. Built for performance and built to last.",
    capabilities: [
      {
        title: "Single Page Applications",
        description:
          "React, Vue, or Angular SPAs with SSR/SSG capabilities for SEO and performance at scale.",
      },
      {
        title: "Progressive Web Apps",
        description:
          "PWAs that work offline, install on home screens, and deliver near-native mobile experiences without an app store.",
      },
      {
        title: "E-commerce Platforms",
        description:
          "Custom storefronts and headless commerce implementations on Shopify, WooCommerce, or fully bespoke stacks.",
      },
      {
        title: "Marketing Websites",
        description:
          "High-converting marketing sites with CMS integration, A/B testing hooks, and sub-second load times.",
      },
      {
        title: "CMS Development",
        description:
          "Headless CMS setups (Contentful, Sanity, Strapi) that give your content team full control without developer dependency.",
      },
      {
        title: "Performance Optimization",
        description:
          "Audits and rewrites to improve Core Web Vitals, reduce bounce rates, and boost SEO rankings for existing web properties.",
      },
    ],
    techStack: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Vue.js", icon: "vue" },
      { name: "Angular", icon: "angular" },
      { name: "WordPress", icon: "wordpress" },
      { name: "Shopify", icon: "shopify" },
    ],
    process: [
      {
        step: "Discovery",
        description:
          "We audit competitor sites, define performance benchmarks, and align on the tech stack before any design work begins.",
      },
      {
        step: "Design & Prototyping",
        description:
          "Figma prototypes with real content, tested against your target audience before a single component is coded.",
      },
      {
        step: "Development",
        description:
          "Component-driven development with Storybook, ensuring design consistency and reusability across the entire site.",
      },
      {
        step: "Performance & SEO",
        description:
          "Lighthouse audits, image optimization, CDN configuration, and structured data markup baked into the build process.",
      },
      {
        step: "Launch & Handover",
        description:
          "Staged deployment, CMS training for your content team, and a 30-day post-launch support window.",
      },
    ],
    seo: {
      title: "Web Development Company in India — TechPillow",
      description:
        "Next.js, React, and full-stack web development by TechPillow. High-performance websites and web applications for startups and enterprises in India.",
    },
  },
  {
    slug: "ai-ml",
    name: "AI & Machine Learning",
    tagline: "Intelligent systems that work while you sleep.",
    description:
      "India's AI market reached USD 1.6 billion in 2025 and is accelerating toward USD 13.2 billion by 2034. But we help businesses move beyond the hype and into real, measurable automation. Over 80% of applications now embed AI capabilities — from recommendation engines and NLP pipelines to predictive models that cut operational costs by double-digit percentages. We work with your data — not generic demos — and deliver models that integrate directly into your existing workflows. Whether you're fine-tuning open-source LLMs on domain-specific data, building RAG pipelines with LangChain, or deploying computer vision for quality inspection — we'll tell you honestly what'll move the needle and what won't.",
    icon: "Brain",
    shortDescription:
      "Intelligent automation and predictive analytics that reduce costs and unlock new revenue streams.",
    capabilities: [
      {
        title: "Predictive Analytics",
        description:
          "Demand forecasting, churn prediction, and risk scoring models trained on your historical data and deployed into production.",
      },
      {
        title: "Natural Language Processing",
        description:
          "Document classification, sentiment analysis, entity extraction, and custom LLM fine-tuning for domain-specific tasks.",
      },
      {
        title: "Computer Vision",
        description:
          "Image recognition, object detection, and quality inspection systems for manufacturing, retail, and healthcare applications.",
      },
      {
        title: "AI Chatbots & Agents",
        description:
          "LLM-powered conversational agents and autonomous AI agents integrated with your knowledge base, CRM, and support workflows using RAG and agentic frameworks.",
      },
      {
        title: "Recommendation Engines",
        description:
          "Personalization systems for e-commerce, content platforms, and EdTech — built to improve engagement and average order value.",
      },
      {
        title: "Process Automation",
        description:
          "Intelligent document processing, workflow automation, and decision support systems that eliminate manual bottlenecks.",
      },
    ],
    techStack: [
      { name: "Python", icon: "python" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "OpenAI", icon: "openai" },
      { name: "LangChain", icon: "langchain" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "AWS SageMaker", icon: "aws" },
    ],
    process: [
      {
        step: "Data Assessment",
        description:
          "We audit your existing data assets, identify gaps, and define what's realistically achievable with ML given your data maturity.",
      },
      {
        step: "Problem Framing",
        description:
          "We translate business goals into precise ML problem statements with clear success metrics and baseline benchmarks.",
      },
      {
        step: "Model Development",
        description:
          "Iterative model training and evaluation with full experiment tracking, so you can see exactly what changed and why.",
      },
      {
        step: "Integration & Deployment",
        description:
          "Model serving APIs, MLOps pipelines, and monitoring dashboards deployed to your existing infrastructure.",
      },
      {
        step: "Monitoring & Retraining",
        description:
          "Production model monitoring for data drift and performance degradation, with automated retraining pipelines.",
      },
    ],
    seo: {
      title: "AI & Machine Learning Development Company in India — TechPillow",
      description:
        "Custom AI and ML solutions by TechPillow — predictive analytics, NLP, computer vision, and LLM integration. Gurugram-based AI engineers serving Indian and global businesses.",
    },
  },
  {
    slug: "ui-ux",
    name: "UI/UX Design",
    tagline: "Interfaces that users love and businesses profit from.",
    description:
      "Great design isn't decoration — it's the difference between a product people adopt and one they abandon. Our design team combines user research, behavioral psychology, and visual craft to create interfaces that reduce friction, increase conversion, and make your product feel effortless. We've redesigned apps that cut support tickets by 40% and e-commerce flows that improved checkout conversion by double digits. We design with data, validate with users, and hand off developer-ready specs.",
    icon: "Palette",
    shortDescription:
      "Research-driven UI/UX design that reduces drop-off, boosts engagement, and turns users into loyal customers.",
    capabilities: [
      {
        title: "User Research",
        description:
          "In-depth interviews, usability testing, and behavioral analytics to ground every design decision in real user evidence.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Low and high-fidelity wireframes iterated rapidly with stakeholders before any visual polish is applied.",
      },
      {
        title: "Visual Design",
        description:
          "Pixel-perfect UI design with consistent typography, color systems, and iconography that reinforces your brand.",
      },
      {
        title: "Design Systems",
        description:
          "Scalable component libraries in Figma with developer-ready tokens, reducing design drift as your product grows.",
      },
      {
        title: "Usability Testing",
        description:
          "Moderated and unmoderated testing sessions that surface usability issues before they cost you users in production.",
      },
      {
        title: "Interaction Design",
        description:
          "Micro-interactions, motion design, and state management that make complex workflows feel intuitive and delightful.",
      },
    ],
    techStack: [
      { name: "Figma", icon: "figma" },
      { name: "Adobe Creative Suite", icon: "adobe" },
      { name: "Principle", icon: "principle" },
      { name: "Lottie", icon: "lottie" },
    ],
    process: [
      {
        step: "Research & Discovery",
        description:
          "User interviews, competitor audits, and heuristic evaluations to establish a clear baseline before designing.",
      },
      {
        step: "Information Architecture",
        description:
          "Sitemap and user flow mapping to ensure navigation is logical and task completion paths are short.",
      },
      {
        step: "Wireframes & Prototypes",
        description:
          "Iterative wireframes validated with stakeholders and representative users before moving to visual design.",
      },
      {
        step: "Visual Design",
        description:
          "High-fidelity UI screens with a complete design system, ready for developer handoff via Figma.",
      },
      {
        step: "Usability Testing & Iteration",
        description:
          "Post-design testing to validate assumptions and refine interactions before development begins.",
      },
    ],
    seo: {
      title: "UI/UX Design Agency in India — TechPillow",
      description:
        "User-centred UI/UX design by TechPillow. Mobile app design, web design, and design systems for startups and enterprises. Based in Gurugram.",
    },
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    tagline: "Ship faster. Scale confidently. Sleep better.",
    description:
      "India's cloud market hit USD 21.8 billion in 2025 and is projected to contribute 8% of GDP by 2026 — yet most teams are still bottlenecked by infrastructure. We build the CI/CD pipelines, container orchestration, and observability stacks that let your developers deploy multiple times a day with confidence. India's DevOps market is growing at 19% CAGR, and Kubernetes adoption is among the fastest globally. Whether you're migrating a monolith to microservices, setting up your first K8s cluster on EKS or GKE, or reducing a ₹5L/month cloud bill with right-sizing and spot instances — we treat infrastructure as code: version controlled, tested, and reproducible.",
    icon: "Cloud",
    shortDescription:
      "CI/CD pipelines, cloud infrastructure, and container orchestration that let your team ship faster with fewer incidents.",
    capabilities: [
      {
        title: "CI/CD Pipelines",
        description:
          "Automated build, test, and deployment pipelines that eliminate manual deployments and reduce release anxiety.",
      },
      {
        title: "Container Orchestration",
        description:
          "Kubernetes cluster setup, management, and optimization — on EKS, GKE, AKS, or self-managed clusters.",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Terraform and CloudFormation templates that make your infrastructure reproducible, auditable, and version-controlled.",
      },
      {
        title: "Monitoring & Observability",
        description:
          "Full-stack observability with Prometheus, Grafana, and OpenTelemetry so you find issues before your users do.",
      },
      {
        title: "Cloud Migration",
        description:
          "Structured migration of on-premise or legacy cloud workloads to modern, cost-optimized cloud architectures.",
      },
      {
        title: "Security & Compliance",
        description:
          "Security hardening, IAM policy reviews, secret management, and compliance automation for SOC2, ISO 27001, and DPDP.",
      },
    ],
    techStack: [
      { name: "AWS", icon: "aws" },
      { name: "GCP", icon: "gcp" },
      { name: "Azure", icon: "azure" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Terraform", icon: "terraform" },
      { name: "GitHub Actions", icon: "github" },
    ],
    process: [
      {
        step: "Infrastructure Audit",
        description:
          "We assess your current setup — cost, security posture, deployment frequency, and incident history.",
      },
      {
        step: "Architecture Design",
        description:
          "We design a target architecture aligned to your team's size, budget, and reliability requirements.",
      },
      {
        step: "Pipeline Setup",
        description:
          "CI/CD pipelines, environment management, and automated testing gates configured and documented.",
      },
      {
        step: "Migration & Rollout",
        description:
          "Phased rollout with rollback plans at every step — no big-bang migrations that put production at risk.",
      },
      {
        step: "Handover & Training",
        description:
          "Runbooks, on-call documentation, and hands-on training so your team can operate the new infrastructure independently.",
      },
    ],
    seo: {
      title: "Cloud & DevOps Services in India — TechPillow",
      description:
        "AWS, GCP, Azure cloud engineering and DevOps consulting by TechPillow. CI/CD, Kubernetes, Terraform, and cloud migration. Based in Gurugram.",
    },
  },
  {
    slug: "it-resources",
    name: "IT Resources",
    tagline: "Your team, extended — not replaced.",
    description:
      "India handles over 55% of global IT services with 5.8 million tech professionals and exports exceeding USD 260 billion. When you need senior engineering talent without the overhead of full-time hiring, TechPillow provides vetted developers who integrate directly into your team — at 40-70% lower cost than onshore hiring. Our engineers work on your tools, follow your processes, and are accountable to your product goals — not to a distant vendor KPI. We've embedded engineers in Berlin startups, Mumbai scaleups, and London enterprises alike. Engagement models range from a single senior backend engineer to a full embedded squad with a delivery lead.",
    icon: "Users",
    shortDescription:
      "Vetted developers and dedicated teams that integrate into your workflow and ship like your best in-house engineers.",
    capabilities: [
      {
        title: "Dedicated Developers",
        description:
          "Senior engineers assigned exclusively to your project, available on your time zone and communication channels.",
      },
      {
        title: "Team Augmentation",
        description:
          "Plug specialists into your existing team — front-end, back-end, DevOps, QA — to accelerate without disrupting culture.",
      },
      {
        title: "Project-Based Hiring",
        description:
          "Assembled teams for discrete projects with clear scope, timeline, and deliverables — then hand off cleanly.",
      },
      {
        title: "Managed Teams",
        description:
          "A self-managing squad with a technical lead, developers, and QA — you set product direction, we handle execution.",
      },
      {
        title: "Technical Consulting",
        description:
          "Architecture reviews, technology selection, and engineering strategy advisory from senior practitioners.",
      },
      {
        title: "CTO-as-a-Service",
        description:
          "Fractional CTO engagement for early-stage startups that need technical leadership without the full-time cost.",
      },
    ],
    techStack: [
      { name: "Jira", icon: "jira" },
      { name: "Confluence", icon: "confluence" },
      { name: "Slack", icon: "slack" },
      { name: "GitHub", icon: "github" },
      { name: "Linear", icon: "linear" },
      { name: "Notion", icon: "notion" },
    ],
    process: [
      {
        step: "Requirements Briefing",
        description:
          "We understand your team structure, technical stack, project goals, and the skills gap you need us to fill.",
      },
      {
        step: "Candidate Matching",
        description:
          "We match you with pre-vetted engineers from our talent pool within 5 business days, with CVs and technical assessments.",
      },
      {
        step: "Trial Period",
        description:
          "A structured 2-week trial sprint so you can evaluate fit before committing to a longer engagement.",
      },
      {
        step: "Onboarding",
        description:
          "We manage HR, tooling access, and onboarding documentation so your engineers are productive from day one.",
      },
      {
        step: "Ongoing Management",
        description:
          "Monthly performance reviews, proactive replacements if fit degrades, and no notice period surprises.",
      },
    ],
    seo: {
      title: "IT Staff Augmentation & Dedicated Developers in India — TechPillow",
      description:
        "Hire vetted developers and dedicated tech teams from TechPillow. Staff augmentation, managed squads, and CTO-as-a-Service for startups and enterprises.",
    },
  },
];
