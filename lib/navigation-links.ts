export interface NavItem {
  title: string;
  href?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export const navigationLinks: NavItem[] = [
  {
    title: "Content",
    href: "/projects",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Uses",
    href: "/uses",
  },
  {
    title: "Now",
    href: "/now",
  },
];
