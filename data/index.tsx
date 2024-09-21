import test from "node:test";
import { title } from "process";
import { FaCamera, FaChartLine, FaFileCode, FaMobile, FaPenRuler, FaShieldHalved } from "react-icons/fa6";
import {
  IoBulbOutline,
  IoDiamondOutline,
  IoHappyOutline,
  IoPeopleOutline,
  IoShieldHalfOutline,
  IoTrendingUpSharp,
} from "react-icons/io5";

// Section Header Settings
export const SectionHeaderSettings = {
  portfolio: {
    title: "Our clients",
    gradientTitle: "success stories",
    description:
      "Explore the projects we&apos;ve delivered for our clients. Each card highlights the work we&apos;ve done and the impact we&apos;ve made, showcasing our expertise in driving successful outcomes.",
  },
  services: {
    title: "We&apos;re here to drive",
    gradientTitle: "your growth",
    description:
      "Our tailored digital solutions are built to transform businesses. From strategy to execution, we focus on maximizing your online potential and ensuring measurable success.",
  },
  about: {
    title: "We strive for better",
    gradientTitle: "digital future",
    description:
      "Join us on a journey driven by passion and innovation, where our expert team is dedicated to crafting cutting-edge digital solutions. Explore our commitment to integrity, collaboration, and growth, and meet the people who make it all possible. Let&apos;s create something exceptional together.",
  },
  testimonials: {
    title: "What our clients",
    gradientTitle: "say about us",
    description:
      "Our clients success is our success. Read what our satisfied clients have to say about our services, and discover the impact we&apos;ve made on their businesses.",
  },
};

// Portfolio Items
export const portfolioItems = [
  {
    logo: "/logo-digihry.png",
    image: "/image1.png",
    title: "Digihry",
    description: "Gaming",
    services: ["Facebook & Instagram Ads", "Strategy & Consulting", "Ads Management"],
  },
  {
    logo: "/logo-br.png",
    image: "/image2.png",
    title: "Butterfly Reality",
    description: "Real Estate",
    services: ["Facebook & Instagram Ads", "Social Media Management", "Content Creation"],
  },
  {
    logo: "/logo-previtalitu.webp",
    image: "/image3.png",
    title: "Pre Vitalitu",
    description: "Health",
    services: ["Social Media Management", "Content Creation", "Graphic Design"],
  },
  {
    logo: "/logo-newspirit.webp",
    image: "/image4.png",
    title: "New Spirit",
    description: "E-shop",
    services: ["Social Media Management", "Content Creation", "Graphic Design"],
  },
  {
    logo: "/logo-deska.webp",
    image: "/image5.png",
    title: "Deska",
    description: "E-shop",
    services: ["Social Media Management", "Content Creation", "Graphic Design"],
  },
  {
    logo: "Your logo",
    image: "",
    title: "Your Company",
    description: "Your Industry",
    services: ["Everything", "you", "need!"],
    placeholder: true,
  },
];

// Values
export const values = [
  {
    title: "Innovation",
    description:
      "We strive to bring the most innovative solutions to the market, pushing the boundaries of technology.",
    icon: <IoBulbOutline />,
  },
  {
    title: "Collaboration",
    description: "Our team works closely with clients to ensure we deliver exactly what they need.",
    icon: <IoPeopleOutline />,
  },
  {
    title: "Growth",
    description: "We focus on growth for both our clients and our company, continuously improving and evolving.",
    icon: <IoTrendingUpSharp />,
  },
  {
    title: "Integrity",
    description: "We adhere to the highest ethical standards, ensuring trust and transparency in all our dealings.",
    icon: <IoShieldHalfOutline />,
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering excellence in everything we do, from our services to our customer support.",
    icon: <IoDiamondOutline />,
  },
  {
    title: "Customer Satisfaction",
    description: "Our top priority is ensuring our clients are satisfied with our work and the results they achieve.",
    icon: <IoHappyOutline />,
  },
];

export const testimonials = [
  {
    quote:
      "Their innovative approach transformed our digital presence. We saw a 40% increase in engagement within the first quarter!",
    name: "Sarah Johnson",
    title: "Marketing Director at Tech Innovators Inc.",
  },
  {
    quote:
      "Working with this agency has been a game-changer for our brand. Their expertise and dedication are unmatched.",
    name: "David Lee",
    title: "CEO of GreenTech Solutions",
  },
  {
    quote:
      "The team&apos;s strategic insights and creative solutions helped us achieve our best sales year yet. Highly recommend!",
    name: "Emily Martinez",
    title: "Head of Digital Strategy at HealthPlus",
  },
  {
    quote:
      "Their exceptional service and results-oriented approach have significantly boosted our online visibility and sales.",
    name: "James Smith",
    title: "Founder of EcoLiving Products",
  },
  {
    quote:
      "From day one, their professionalism and expertise stood out. We couldn&apos;t be happier with the results. Excellent work!",
    name: "Olivia Brown",
    title: "COO of UrbanStyle Fashion",
  },
];

// Items for grid
export const gridItems = [
  {
    id: 0,
    title: "Happy Clients",
    value: "5,000+",
    description: "Over 5,000 satisfied clients trust GoSocial to manage and grow their social media presence.",
  },
  {
    id: 1,
    title: "Increased ROI",
    value: "150%",
    description:
      "Clients have reported an average increase of 150% in their social media ROI within the first six months of using our services.",
  },
  {
    id: 2,
    title: "Automated Posts",
    value: "1M+",
    description:
      "GoSocial has successfully automated over 1 million social media posts, saving valuable time for our clients.",
  },
  {
    id: 3,
    title: "Engagement Boost",
    value: "200%",
    description:
      "Users experience up to a 200% increase in engagement rates with our advanced analytics and optimized posting strategies.",
  },
];
// Words for flipping animation
export const flipWords = ["website", "strategy", "design", "brand", "content"];

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string[];
  link: string;
}

// Services
export const services: Service[] = [
  {
    icon: <FaFileCode />,
    title: "Web Development",
    description: [
      "Custom Website Design and Development",
      "E-commerce Solutions",
      "Content Management System (CMS)",
      "Website Maintenance and Support",
    ],
    link: "/web-development",
  },
  {
    icon: <FaMobile />,
    title: "Mobile App Development",
    description: [
      "iOS and Android App Development",
      "Cross-platform App Development",
      "Mobile App UI/UX Design",
      "App Store Optimization (ASO)",
    ],
    link: "mobile-app-development",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    description: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing (SMM)",
      "Email Marketing Campaigns",
    ],
    link: "digital-marketing",
  },
  {
    icon: <FaCamera />,
    title: "Content Creation",
    description: [
      "Copywriting and Blogging",
      "Video Production and Editing",
      "Graphic Design and Infographics",
      "Photography Services",
    ],
    link: "content-creation",
  },
  {
    icon: <FaShieldHalved />,
    title: "Branding & Identity",
    description: [
      "Logo Design and Brand Identity",
      "Brand Strategy and Consulting",
      "Brand Guidelines Development",
      "Print and Digital Design",
    ],
    link: "branding-and-identity",
  },
  {
    icon: <FaPenRuler />,
    title: "UI/UX Design",
    description: [
      "User Interface (UI) Design",
      "User Experience (UX) Research and Testing",
      "Prototyping and Wireframing",
      "Usability Testing",
    ],
    link: "ui-and-ux-design",
  },
];

// Projects in Portfolio
const projects = [
  {
    imageSrc: "/image1.png",
    title: "digihry.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://digihry.sk",
    logoSrc: "logo-digihry.png",
  },
  {
    imageSrc: "/image2.png",
    title: "butterfly-reality.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://butterfly-reality.sk",
    logoSrc: "logo-br.png",
  },
  {
    imageSrc: "/image3.png",
    title: "previtalitu.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://previtalitu.sk",
    logoSrc: "logo-previtalitu.webp",
  },
  {
    imageSrc: "/image4.png",
    title: "newspirit.sk",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://newspirit.sk",
    logoSrc: "logo-newspirit.webp",
  },
  {
    imageSrc: "/image5.png",
    title: "deska.shop",
    description: "Managed FB and IG Ad campaigns targeting relevant audience with average ROAS 2.7",
    link: "https://deska.shop",
    logoSrc: "logo-deska.webp",
  },
];
