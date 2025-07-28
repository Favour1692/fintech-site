import { nav, landingbg, bgoverlay, featurecard, how } from "./type";
import { GoChecklist } from "react-icons/go";
import { FaChartBar, FaMobileAlt, FaSearch } from "react-icons/fa";
import { MdOutlineAutoAwesomeMosaic, MdSpaceDashboard } from "react-icons/md";
import { FaBriefcase, FaLink, FaRobot } from "react-icons/fa6";
import { GiPadlock, GiBullseye } from "react-icons/gi";

export const navdata: nav[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/about",
    title: "About",
  },
  {
    id: 3,
    link: "/features",
    title: "Features",
  },
  {
    id: 4,
    link: "/contact",
    title: "Contact Us",
  },
];

export const background: landingbg = {
  backgroundImage: "url('/background.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
};
export const overlay: bgoverlay = {
  backgroundImage: "url('/asfalt-light.png')",
  backgroundBlendMode: "overlay",
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
};
export const grey: bgoverlay = {
  backgroundImage: "url('/always-grey.png')",
  backgroundBlendMode: "overlay",
  backgroundRepeat: "repeat",
};
export const tile: bgoverlay = {
  backgroundImage: "url('/3px-tile.png')",
  backgroundBlendMode: "overlay",
  backgroundRepeat: "repeat",
};

export const features: featurecard[] = [
  {
    id: 1,
    icon: <GoChecklist />,
    text: "Track expenses with precision across multiple accounts",
  },
  {
    id: 2,
    icon: <FaChartBar />,
    text: "Visualize cash flow from monthly budgets to daily operations",
  },
  {
    id: 3,
    icon: <MdOutlineAutoAwesomeMosaic />,
    text: "Automate savings, payroll and recurring payments",
  },
  {
    id: 4,
    icon: <FaBriefcase />,
    text: "Manage invoices, clients and income in real time",
  },
  {
    id: 5,
    icon: <FaMobileAlt />,
    text: "Get financial insights that actually make sense",
  },
  {
    id: 6,
    icon: <GiPadlock />,
    text: "Keep everything secure and in sync effortlessly",
  },
];

export const howcard: how[] = [
  {
    id: 1,
    icon: <FaLink />,
    step: "Step 1",
    title: "Connect your accounts",
    description: "Securely link bank accounts, payment platforms and business tools without hassle",
  },
  {
    id: 2,
    icon: <GiBullseye />,
    step: "Step 2",
    title: "Set your goals",
    description: "Saving, scaling, simplifying. Define what success looks like for you",
  },
  {
    id: 3,
    icon: <MdSpaceDashboard />,
    step: "Step 3",
    title: "See everything in one place",
    description: "Your entire financial picture, both personal and business, visualized in real time",
  },
  {
    id: 4,
    icon: <FaRobot />,
    step: "Step 4",
    title: "Automate what slows you down",
    description: "From savings to payroll to reminders, let smart rules handle the busywork",
  },
  {
    id: 5,
    icon: <FaSearch />,
    step: "Step 5",
    title: "Act on insights",
    description: "Make decisions backed by smart data, without having to decode spreadsheets or reports",
  },
];
