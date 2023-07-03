import { LinkProps } from "next/link";

export interface PostHeading {
  heading: number;
  text: string;
  slug: string;
}

export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  content?: ContentNavItem[];
}

export interface ContentNavItem extends NavItem {
  href: string;
}

export interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export type AnalyticsProvider = "umami" | "vercel";

export type SiteMetaData = {
  title: {
    template: string;
    default: string;
  };
  description: string;
  siteRepo: string;
  metadataBase: URL;
  newsletterUrl: string;
  analyticsProvider: AnalyticsProvider;
};
