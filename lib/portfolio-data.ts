import { aboutData } from "./data/about";
import { mainBannerData } from "./data/mainBanner";
import { generalData } from "./data/general";
import { menusData } from "./data/menus";
import { projectsData } from "./data/projects";
import { servicesData } from "./data/services";
import { PortfolioData } from "./types";

// Consolidated portfolio data
export const portfolioData: PortfolioData = {
  metadata: {
    source: "Portfolio Content Data",
    extracted_at: "2024-10-16",
    description: "Relevant portfolio content extracted from database",
  },
  about: aboutData,
  mainBanner: mainBannerData,
  general: generalData,
  menus: menusData,
  projects: projectsData,
  services: servicesData,
  media: [], // We'll handle media separately
};

// Helper function to get image URL from media array
export const getImageUrl = (filename: string): string => {
  return `/images/${filename}`;
};

// Helper function to get project images
export const getProjectImages = (projectTitle: string): string[] => {
  // Map project titles to their image patterns and folder names
  const projectImageMap: {
    [key: string]: { folder: string; images: string[] };
  } = {
    "Peristyle Restaurant": {
      folder: "peristyle",
      images: ["peristyle1.png", "peristyle2.png", "peristyle3.png"],
    },
    "Domus Boutique Hotel": {
      folder: "domus",
      images: ["domus1.png", "domus2.png", "domus3.png"],
    },
    "Karamellu tar-Rahal t'Isfel": {
      folder: "karm",
      images: ["karm1.png", "karm2.png", "karm3.png"],
    },
    "Optimist Club of Malta": {
      folder: "optimist",
      images: ["optimist1.png", "optimist2.png", "optimist3.png"],
    },
    "Personal Training Malta - Workout Plans": {
      folder: "training",
      images: ["training1.png", "training2.png", "training3.png"],
    },
  };

  const projectData = projectImageMap[projectTitle];
  if (!projectData) return [];

  return projectData.images.map(
    image => `/projects/${projectData.folder}/${image}`
  );
};

// Helper function to get project website URL
export const getProjectWebsiteUrl = (projectTitle: string): string => {
  const project = projectsData.portfolio_items.find(
    item => item.title === projectTitle
  );
  return project?.website_url || "#";
};

// Helper function to get profile image
export const getProfileImage = (): string => {
  return "/assets/images/chris2.png";
};

// Helper function to get about image
export const getAboutImage = (): string => {
  return "/assets/images/imgabout.png";
};

// Helper function to get logo
export const getLogo = (): string => {
  return "/assets/logos/logo.svg";
};

// Helper function to get footer logo
export const getFooterLogo = (): string => {
  return "/assets/logos/logo-footer.svg";
};

export default portfolioData;
