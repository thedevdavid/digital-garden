import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Amy Shields",
  handle: "@amyshieldsfake",
  socialProfiles,
  email: "definitelyfake@nevermind.com",
  website: "https://nextjs.org",
  jobTitle: "Frontend Engineer & UI Designer",
  company: "Unicorns & Co.",
  availableForWork: true,
  location: {
    city: "Los Angeles",
    media: "/losangeles.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. Building hackin’ cool digital products around the world 🌴.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/thedevdavid/digital-garden",
  newsletterProvider: "mailerlite",
  newsletterUrl: "https://developreneur.davidlevai.com",
  analyticsProvider: "umami",
  defaultTheme: "system",
  activeAnnouncement: true,
  announcement: {
    buttonText: "Support on DevHunt →",
    link: "https://devhunt.org/tool/modern-developer-blog-template-digital-garden-starter",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
