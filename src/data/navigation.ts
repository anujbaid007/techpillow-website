export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  icon?: string;
}

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Custom Software Development",
        href: "/services/software-development",
        icon: "Code",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
        icon: "Smartphone",
      },
      {
        label: "Web Development",
        href: "/services/web-development",
        icon: "Globe",
      },
      {
        label: "AI & Machine Learning",
        href: "/services/ai-ml",
        icon: "Brain",
      },
      {
        label: "UI/UX Design",
        href: "/services/ui-ux",
        icon: "Palette",
      },
      {
        label: "Cloud & DevOps",
        href: "/services/cloud-devops",
        icon: "Cloud",
      },
      {
        label: "IT Resources",
        href: "/services/it-resources",
        icon: "Users",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Healthcare",
        href: "/industries/healthcare",
        icon: "HeartPulse",
      },
      {
        label: "FinTech",
        href: "/industries/fintech",
        icon: "Landmark",
      },
      {
        label: "E-commerce",
        href: "/industries/ecommerce",
        icon: "ShoppingCart",
      },
      {
        label: "Education",
        href: "/industries/education",
        icon: "GraduationCap",
      },
      {
        label: "Logistics",
        href: "/industries/logistics",
        icon: "Truck",
      },
      {
        label: "Real Estate",
        href: "/industries/real-estate",
        icon: "Building2",
      },
      {
        label: "Food & Beverage",
        href: "/industries/food-beverage",
        icon: "UtensilsCrossed",
      },
      {
        label: "Travel & Hospitality",
        href: "/industries/travel-hospitality",
        icon: "Plane",
      },
      {
        label: "Entertainment & Media",
        href: "/industries/entertainment-media",
        icon: "Tv",
      },
      {
        label: "On-Demand Services",
        href: "/industries/on-demand",
        icon: "Zap",
      },
      {
        label: "AgriTech",
        href: "/industries/agritech",
        icon: "Sprout",
      },
      {
        label: "Blockchain & Web3",
        href: "/industries/blockchain-web3",
        icon: "Link",
      },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];
