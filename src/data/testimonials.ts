export interface Testimonial {
  text: string;
  name: string;
  role: string;
  company: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "TechPillow's team has been very proactive and has proven their value — we've seen a significant increase in our site traffic. Regular updates and redesigning certain elements of the website really made it look more aesthetic and attractive.",
    name: "Ashish Dalal",
    role: "Marketing Head",
    company: "Growpital",
  },
  {
    text: "I appreciate their efforts working with new startups. The team brought genuine enthusiasm and technical depth to our project, and I'm looking forward to many more collaborations in the near future.",
    name: "Davinder Singh",
    role: "CEO",
    company: "ACIC-BMU Foundation",
  },
  {
    text: "Mayank and his team are very responsible and dedicated. They took care of multiple IT tasks for us — building apps, managing the website, and much more. The team took our requirements and specifications seriously and delivered on every front. I'm completely satisfied with their work.",
    name: "Ravi Pahuja",
    role: "COO",
    company: "RKM Foundation",
  },
  {
    text: "TechPillow didn't just build what we asked for — they helped us rethink the product entirely. Our launch was weeks faster than planned, and adoption doubled in the first month.",
    name: "Anonymous CTO",
    role: "CTO",
    company: "SaaS Startup",
  },
  {
    text: "Very enthusiastic and hardworking team. They brought my vision to life exactly as I had imagined, and the output was perfect. The team was highly responsive and took decisive action whenever needed.",
    name: "Nikhil Goel",
    role: "Founder",
    company: "BitMemoir",
  },
];
