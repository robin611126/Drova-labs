export enum ServiceType {
  UGC = 'UGC Ads/Avatar Ads',
  COMMERCIAL = 'Brand Commercials',
  BRANDING = 'Personal Branding'
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}