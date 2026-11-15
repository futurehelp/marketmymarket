/**
 * Market My Market content models.
 *
 * Keeping editorial content separate from layout components makes the native
 * rebuild easier to review, localize, and maintain.
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export type Vertical = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export type Competency = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export type Review = {
  title: string;
  quote: string;
  author: string;
  company: string;
  image: string;
};

export type Value = {
  number: string;
  title: string;
  image: string;
};

export type Article = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const navigation: NavItem[] = [
  {
    label: "About",
    href: "#about",
    children: [
      { label: "Our teams", href: "#about" },
      { label: "Careers", href: "#contact" },
    ],
  },
  {
    label: "Results",
    href: "#results",
    children: [
      { label: "Case studies", href: "#results" },
      { label: "Client stories", href: "#results" },
    ],
  },
  { label: "Resources", href: "#resources" },
  {
    label: "Who we work with",
    href: "#verticals",
    children: [
      { label: "Legal marketing", href: "#verticals" },
      { label: "Dental marketing", href: "#verticals" },
      { label: "Medical marketing", href: "#verticals" },
    ],
  },
];

export const verticals: Vertical[] = [
  {
    title: "Legal marketing",
    description: "At Market My Market, we have over 14 years of experience helping law firms grow. We understand that standing out in legal marketing requires more than just visibility. We will connect you with high-value leads that turn into cases through proven strategies and insight.",
    image: "/images/source/legal-icon.png",
    href: "/legal-marketing/",
  },
  {
    title: "Dental marketing",
    description: "Success in dentistry requires more than great care. We will help your practice grow with SEO strategies that attract patients, lower costs, and ensure long-term success.",
    image: "/images/source/dental-icon.png",
    href: "/dental-marketing/",
  },
  {
    title: "Medical marketing",
    description: "Whether you are a spine doctor, medical spa, veterinarian, or another patient-focused provider, our medical marketing strategies drive traffic and turn visits into bookings.",
    image: "/images/MMM-Medical_1.png",
    href: "/medical-marketing/",
  },
];

export const competencies: Competency[] = [
  {
    number: "01",
    title: "Digital marketing",
    description: "Expert SEO, content creation, and targeted local optimization to attract the right customers.",
    image: "/images/icon-digital.png",
  },
  {
    number: "02",
    title: "Reporting",
    description: "Detailed reports and regular updates so you always know what is working and where to go next.",
    image: "/images/icon-reporting.png",
  },
  {
    number: "03",
    title: "Development",
    description: "Strategic insights beyond marketing, connecting you with opportunities that grow the brand.",
    image: "/images/icon-development.png",
  },
];

export const reviews: Review[] = [
  {
    title: "The results have been remarkable",
    quote: "We have been working with Market My Market for over 5 years for our SEO needs, and the results have been remarkable.",
    author: "Frank Marsalisi",
    company: "Marsalisi Law",
    image: "/images/review-frank.jpg",
  },
  {
    title: "Market My Market is great",
    quote: "Market My Market is great and really helped grow my business during our partnership. Joanna is amazing to work with!",
    author: "Jonathan Kashani",
    company: "Kash Legal",
    image: "/images/review-jonathan.webp",
  },
  {
    title: "You guys do a great job",
    quote: "I am a very happy customer. If anyone needs a referral, I will tell them that your people know this stuff.",
    author: "Bob Lynch",
    company: "Clemente Orthodontics",
    image: "/images/review-chris.jpg",
  },
  {
    title: "The Market My Market team is exceptional",
    quote: "The team is creative, responsive, and professional. They have a proven record of results for our firm.",
    author: "Kimberly Mullinax",
    company: "King Law",
    image: "/images/review-kimberly.jpg",
  },
  {
    title: "They have been an invaluable tool in our growth",
    quote: "They have helped us rank for the terms we are aiming at, which is routinely bringing us new business.",
    author: "Phillip Younglove",
    company: "Younglove Law Group",
    image: "/images/review-phillip.jpg",
  },
  {
    title: "MMM is simply the best",
    quote: "MMM is friendly, responsive, and hardworking. They quickly solve any issues we have. Ten out of ten.",
    author: "Randall Knutson",
    company: "Knutson + Casey",
    image: "/images/review-randall.jpg",
  },
  {
    title: "Outstanding marketing services",
    quote: "Their expertise in digital marketing, SEO, and lead generation has significantly increased our online visibility and client inquiries.",
    author: "Daniel Setareh",
    company: "Setareh Law",
    image: "/images/review-daniel.jpg",
  },
];

export const values: Value[] = [
  { number: "01", title: "Do what you say", image: "/images/value-1.png" },
  { number: "02", title: "Be honest and transparent", image: "/images/value-2.png" },
  { number: "03", title: "Proactive, not reactive", image: "/images/value-3.png" },
  { number: "04", title: "Be thought-leading", image: "/images/value-4.png" },
  { number: "05", title: "Instill trust through accountability", image: "/images/value-5.png" },
  { number: "06", title: "Always do better, always be better", image: "/images/value-6.png" },
  { number: "07", title: "Do the right thing for clients and MMM", image: "/images/value-7.png" },
];

export const articles: Article[] = [
  {
    title: "Market My Market Named to the 2026 Inc. 5000",
    description: "A look at the growth, people, and client partnerships behind the milestone.",
    image: "/images/MAXIMIZING-DENTAL-PRACTICE-PERFORMANCE_-THE-GUIDE-TO-RECORDING-AND-ANALYZING-DATA-FOR-DENTAL-PRACTICES-2048x1365.jpeg",
    href: "#contact",
  },
  {
    title: "How we turn data and statistics into compelling stories",
    description: "The content team shares how data can become useful, human marketing.",
    image: "/images/AdobeStock_105344353-2048x1365.jpeg",
    href: "#contact",
  },
  {
    title: "Why ranking number one does not guarantee traffic anymore",
    description: "Search visibility is only one part of a modern growth strategy.",
    image: "/images/AdobeStock_233168388-2048x1463.jpeg",
    href: "#contact",
  },
];
