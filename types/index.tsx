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
