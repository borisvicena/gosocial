import { FaCamera, FaChartLine, FaFileCode, FaMobile, FaPenRuler, FaShieldHalved } from "react-icons/fa6";

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
