import { ReactNode } from "react";

// Portfolio data types
export interface MenuItem {
  id: string;
  title: string;
  link: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  website_url: string;
}

export interface ProjectsData {
  id: string;
  title: string;
  label_button: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  created_by_id: string | null;
  updated_by_id: string | null;
  portfolio_items: ProjectItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface ServicesData {
  id: string;
  title: string;
  sub_title: string | null;
  created_at: string;
  updated_at: string;
  published_at: string;
  created_by_id: string | null;
  updated_by_id: string | null;
  service_items: ServiceItem[];
}

export interface AboutData {
  id: string;
  name: string;
  description: string;
}

export interface MainBannerData {
  id: string;
  welcome_text: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  created_by_id: string | null;
  updated_by_id: string | null;
}

export interface GeneralData {
  id: string;
  title: string;
  cta_label: string;
  cta_link: string;
  copyright: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  created_at: string;
  updated_at: string;
  created_by_id: string | null;
  updated_by_id: string | null;
}

export interface MediaItem {
  id: string;
  name: string;
  alternative_text: string | null;
  caption: string | null;
  width: string;
  height: string;
  formats: Record<string, unknown>;
  hash: string;
  ext: string;
  mime: string;
  size: string;
  url: string;
  preview_url: string | null;
  provider: string;
  provider_metadata: Record<string, unknown>;
  folder_path: string;
  created_at: string;
  updated_at: string;
  created_by_id: string | null;
  updated_by_id: string | null;
}

export interface PortfolioData {
  metadata: {
    source: string;
    extracted_at: string;
    description: string;
  };
  about: AboutData;
  mainBanner: MainBannerData;
  general: GeneralData;
  menus: MenuItem[];
  projects: ProjectsData;
  services: ServicesData;
  media: MediaItem[];
}

// Component prop types
export interface ItemProjectProps {
  title: string;
  images: string[];
  imageWidth: number | string;
  imageHeight: number | string;
  children: string | ReactNode;
  odd?: boolean;
  link: string;
}

export interface ListProjectsProps {
  amountToShow?: number;
}

export interface ItemServiceProps {
  num: number | string;
  image: string;
  title: string;
  description: ReactNode;
  animationDelay?: number;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
